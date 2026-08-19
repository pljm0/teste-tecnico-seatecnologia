## Sessão Exploratória - SeaTecnologia API

### O que foi testado

- Criar, ler, atualizar e deletar um funcionário
- Campos obrigatórios vazios no payload
- Dados em formato incorreto
- CPF duplicado
- POST com payload incorreto

### Observações

**Criação de funcionário com campos obrigatórios vazios**
API aceita sem validação. Nenhuma mensagem de erro.

**CPF com formato inválido (ex: teste)**
API aceita sem validação. Nenhuma mensagem de erro.

**CPF duplicado**
API aceita sem validação. Nenhuma mensagem de erro.

**Data de nascimento em formato incorreto (ex: 2026-08/12)**
API aceita sem validação. Nenhuma mensagem de erro.

**Requisição POST com payload em formato incorreto**
API aceita sem validação. Nenhuma mensagem de erro. Aplicação web é quebrada (tela cinza) e só retorna após deletar o funcionário criado.

### Resultado da sessão

**Bugs/dúvidas a reportar:**

*Bugs de validação:*
- API aceita criação de funcionário com CPF em formato inválido e duplicado sem validação.
- API aceita criação de funcionário com campos obrigatórios vazios.
- API aceita criação de funcionário com data de nascimento em formato inválido.

*Bug de segurança:*
- Pouca segurança e privacidade, se faz necessário um token de autenticação.

*Bug crítico:*
- API aceita criação de funcionário com payload incorreto (quebrando a interface web).

**Comportamentos confirmados:**
- Requisições GET e POST utilizam o endpoint /employees.
- Requisições PUT e DELETE utilizam o endpoint /employees/{id}.
