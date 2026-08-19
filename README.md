# 🦈 Teste Técnico — SeaTecnologia (Analista de Teste QA)

Suíte de testes automatizados (Web, API e Integração) para o sistema de cadastro de funcionários da SeaTecnologia, desenvolvida com [Cypress](https://www.cypress.io/).

**Aplicação sob teste:** https://analista-teste.seatecnologia.com.br
**Endpoint da API:** https://analista-teste.seatecnologia.com.br/employees

---

## 📊 Dashboard de Métricas

O projeto conta com um dashboard próprio, gerado a partir dos relatórios de execução, com visão geral dos testes, taxa de aprovação, tempo de execução por categoria e estatísticas de performance.

![Dashboard de métricas](assets/dashboard-preview.png)

---

## 🗂️ Estrutura do projeto

```
teste-tecnico-seatecnologia/
├── cypress/
│   ├── e2e/
│   │   ├── api.cy.js          # Testes de API (CRUD, validações)
│   │   ├── web.cy.js          # Testes de interface Web
│   │   └── webxapi.cy.js      # Testes de integração Web x API
│   ├── fixtures/
│   ├── reports/                # Relatórios gerados pelo mochawesome
│   └── screenshots/             # Screenshots de falhas
├── qa-metrics/
│   ├── dashboard.html          # Dashboard de métricas (visual)
│   ├── chart.umd.min.js        # Chart.js (local, sem dependência de CDN)
│   ├── generate-metrics.js     # Script que gera o metrics.json
│   ├── features.json           # Cobertura funcional por área (opcional)
│   └── metrics.json            # Métricas geradas a cada execução
├── cypress.config.js
├── package.json
└── README.md
```

## 📄 Documentação do projeto

- **Plano de Testes** — estratégia, escopo, riscos e critérios de entrada/saída
- **Cenários de Teste** — Web, API e Integração, com passos e resultados esperados
- **Relatório de Defeitos** — bugs encontrados nas sessões exploratórias, com evidências
- **Nota de Estratégia** — critérios de priorização e o que ficou fora do escopo
- **Diário de Uso de IA** — registro de uso de IA generativa durante o desenvolvimento

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/teste-tecnico-seatecnologia.git
cd teste-tecnico-seatecnologia
npm install
```

---

## ▶️ Como executar os testes

### Rodar toda a suíte

```bash
npx cypress run
```

### Rodar em modo interativo (abre o Cypress Test Runner)

```bash
npx cypress open
```

### Rodar apenas os testes de Smoke

```bash
npm run cypress:smoke
```

### Rodar a suíte de Regressão (exclui os testes marcados como `@known-issue`)

```bash
npm run cypress:regression
```

### Rodar apenas os testes classificados como Known Issue

```bash
npm run cypress:known-issues
```

### Rodar um arquivo de spec específico

```bash
npx cypress run --spec cypress/e2e/web.cy.js
npx cypress run --spec cypress/e2e/api.cy.js
npx cypress run --spec cypress/e2e/webxapi.cy.js
```

---

## 🏷️ Tags utilizadas

| Tag | Significado |
|---|---|
| `@smoke` | Fluxos críticos, execução rápida |
| `@regression` | Cobertura completa dos cenários |
| `@known-issue` | Bugs já identificados e documentados; a falha é esperada até a correção |

O filtro de tags é feito com [`@cypress/grep`](https://github.com/cypress-io/cypress/tree/develop/npm/grep).

---

## 📈 Relatório de execução (Mochawesome)

Após `npx cypress run`, o relatório HTML fica disponível em:

```
cypress/reports/index.html
```

---

## 👤 Autor

Pedro Lourenço
