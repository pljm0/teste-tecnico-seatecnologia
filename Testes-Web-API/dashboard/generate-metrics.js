/**
 * generate-metrics.js
 *
 * Lê o relatório do cypress-mochawesome-reporter (index.json, gerado com a
 * opção "saveJson: true" no reporterOptions) e gera um metrics.json no
 * formato que o dashboard.html (pasta qa-metrics/) espera.
 *
 * ESTRUTURA DE PASTAS ESPERADA:
 *   meu-projeto/
 *   ├── cypress/
 *   │   └── reports/
 *   │       └── index.json          ← gerado pelo cypress-mochawesome-reporter
 *   ├── qa-metrics/
 *   │   ├── dashboard.html
 *   │   ├── chart.umd.min.js
 *   │   ├── generate-metrics.js     ← este arquivo
 *   │   └── metrics.json            ← gerado por este script
 *
 * USO (rodando a partir da raiz do projeto):
 *   node qa-metrics/generate-metrics.js cypress/reports/index.json qa-metrics/metrics.json
 *
 * Ou, se rodar de dentro da pasta qa-metrics/:
 *   node generate-metrics.js ../cypress/reports/index.json metrics.json
 *
 * Depois, sirva a pasta qa-metrics/ (fetch não funciona em file://):
 *   npx serve qa-metrics
 */

const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || 'cypress/reports/index.json';
const outputPath = process.argv[3] || 'qa-metrics/metrics.json';


if (!fs.existsSync(inputPath)) {
  console.error(`Arquivo não encontrado: ${inputPath}`);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

// Agrupa testes por "categoria". Aqui usamos o nome do arquivo de spec
// (sem extensão) como categoria — ajuste essa função se quiser agrupar
// por describe(), por tag, etc.
function categoryFromSpec(specFile) {
  const base = path.basename(specFile, path.extname(specFile));
  return base
    .replace(/\.(cy|spec|test)$/i, '')
    .replace(/[-_]/g, ' ')
    .trim();
}

const tests = [];
for (const result of raw.results || []) {
  const specFile = result.file || 'spec';
  const category = categoryFromSpec(specFile);

  const walk = (suite) => {
    for (const t of suite.tests || []) {
      tests.push({
        title: t.fullTitle || t.title,
        category,
        duration: (t.duration || 0) / 1000, // segundos
        state: t.state, // 'passed' | 'failed' | 'pending'
      });
    }
    for (const child of suite.suites || []) walk(child);
  };
  walk(result);
}

const total = tests.length;
const passed = tests.filter((t) => t.state === 'passed').length;
const failed = tests.filter((t) => t.state === 'failed').length;
const skipped = tests.filter((t) => t.state === 'pending').length;
const totalDuration = tests.reduce((s, t) => s + t.duration, 0);
const avgDuration = total ? totalDuration / total : 0;

const sorted = [...tests].sort((a, b) => a.duration - b.duration);
const fastest = sorted[0];
const slowest = sorted[sorted.length - 1];

// Tempo total por categoria (pro gráfico de barras)
const byCategory = {};
for (const t of tests) {
  byCategory[t.category] = (byCategory[t.category] || 0) + t.duration;
}

const metrics = {
  generatedAt: new Date().toISOString(),
  totalTests: total,
  passedPct: total ? Math.round((passed / total) * 1000) / 10 : 0,
  passed,
  failed,
  skipped,
  totalDurationSeconds: Math.round(totalDuration * 100) / 100,
  avgDurationSeconds: Math.round(avgDuration * 100) / 100,
  fastest: fastest
    ? { title: fastest.title, seconds: Math.round(fastest.duration * 100) / 100 }
    : null,
  slowest: slowest
    ? { title: slowest.title, seconds: Math.round(slowest.duration * 100) / 100 }
    : null,
  categories: Object.entries(byCategory).map(([name, seconds]) => ({
    name,
    seconds: Math.round(seconds * 100) / 100,
  })),
  // Cobertura não vem do mochawesome — se você usa cypress-code-coverage
  // (istanbul), leia coverage/coverage-summary.json e preencha aqui.
  coveragePct: null,
};

fs.writeFileSync(outputPath, JSON.stringify(metrics, null, 2));
console.log(`metrics.json gerado em: ${outputPath}`);
