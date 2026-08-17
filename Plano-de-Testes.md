# Plano de Testes — SeaTecnologia

## 1. Identificação

| Campo | Valor |
|---|---|
| Sistema | Teste Técnico - SeaTecnologia |
| Responsável pelo plano | Pedro Lourenço |
| Data de criação | 16/08/2026 |
| Última atualização | 16/08/2026 |

## 2. Objetivo

Realizar testes no sistema web, API e no cruzamento entre eles.

## 3. Escopo

### Dentro do escopo
- Cadastro de funcionário (Web)
- Listagem e filtros de funcionários (Web)
- Endpoint POST, GET, PUT e DELETE /employees (API)
- Integração entre API e interface web (Web e API)

### Fora do escopo
- Testes de performance/carga
- Testes de segurança (pentest)

## 4. Contexto e premissas

- Não há documento de requisitos formal disponível para este sistema.
- O comportamento esperado é definido a partir de sessões exploratórias.

## 5. Estratégia de testes

### 5.1 Testes Web
| Aspecto | Abordagem |
|---|---|
| Ferramenta | Cypress |
| Tipo de teste | E2E |
| Técnicas de teste | ECP e BVA |
| Foco | Fluxo do cadastro de funcionários, validação de campos, mensagens de erro, comportamento visual |
| Cobertura por tags | @smoke / @regression / @known-issue |

### 5.2 Testes de API
| Aspecto | Abordagem |
|---|---|
| Ferramenta | Cypress `cy.request()` / Postman |
| Tipo de teste | Validação de payload |
| Foco | Campos obrigatórios, duplicidade e status code |
| Cobertura por tags | @smoke / @regression / @known-issue |

### 5.3 Testes de integração (Web + API)
| Aspecto | Abordagem |
|---|---|
| Ferramenta | [ex: Cypress, combinando `cy.request()` com ações de UI] |
| Foco | consistência de dados entre o que é submetido/exibido na tela e o que é persistido/retornado pela API |
| Cobertura por tags | @smoke / @regression / @known-issue |


## 6. Ambiente e dados de teste

| Item | Detalhe |
|---|---|
| URL Web | https://analista-teste.seatecnologia.com.br |
| URL/Base API | https://analista-teste.seatecnologia.com.br/employees |
| Ambiente | Windows 11 |
| Navegador(es) alvo | Chrome |

## 7. Riscos identificados

| Risco | Impacto | Origem |
|---|---|---|
| Dados sensíveis sem validação | Alto | Web / API |
| Data de nascimento sem validação | Alto | Web / API |
| Falta de uma barra de rolagem ou caixa de pesquisa de funcionários | Alto | Web |
| Problemas visuais | Médio | Web |
| Sistema sem autenticação | Alto | API |
| Payloads sem validação | Alto | API |

## 8. Critérios de entrada e saída

**Critérios de entrada:**
- Ambiente para teste disponível e estável.
- Sistema Web e API disponíveis e estáveis.
- Testes exploratórios realizados.
- Comportamentos do sistema definidos.

**Critérios de saída:**
- Todos os cenarios de teste planejados executados e automatizados.
- Bugs reportados.
- Evidências registradas.

## 9. Rastreabilidade

```
Sessão Exploratória → Bug reportado → Cenário de Teste (CT-0XX) → Automação (tag)
```

## 10. Ferramentas utilizadas

- Automação Web: Cypress
- Automação/Teste API: Cypress e Postman
- CI/CD: GitHub Actions
- Relatórios: Mochawesome 
