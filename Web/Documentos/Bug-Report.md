# Relatório de Defeitos — SeaTecnologia

**Sistema:** Cadastro e listagem de Funcionários (Web)
**Ambiente:** Navegador Chrome / Windows 11
**Aplicação:** https://analista-teste.seatecnologia.com.br

---

## Resumo

| ID | Título | Severidade | Prioridade |
|---|---|---|---|
| [EXP-001](#exp-001) | Campo "CPF" aceita formato inválido sem validação | Alta | Alta |
| [EXP-002](#exp-002) | Campo "CPF" aceita duplicação sem validação | Alta | Alta |
| [EXP-003](#exp-003) | Campo "CPF" não valida autenticidade do documento | Alta | Alta |
| [EXP-004](#exp-004) | Campos de preenchimento aceitam emoji sem validação | Média | Baixa |
| [EXP-005](#exp-005) | Campo "CPF" aceita emoji, não valida tipo de dado | Alta | Alta |
| [EXP-006](#exp-006) | Sistema aceita cadastro com data de nascimento menor que 18 anos | Alta | Alta |
| [EXP-007](#exp-007) | Sistema aceita cadastro com data de nascimento futura | Alta | Alta |
| [EXP-008](#exp-008) | Ausência de rolagem impede visualização de 5+ funcionários | Alta | Alta |
| [EXP-009](#exp-009) | Cargo "Cargo 1" não é exibido corretamente na listagem | Média | Baixa |
| [EXP-010](#exp-010) | Atividade "Ativid 1" não é exibida corretamente na listagem | Média | Baixa |
| [EXP-011](#exp-011) | Seção "A etapa está concluída?" sobrepõe a listagem | Média | Baixa |
| [EXP-012](#exp-012) | Botão "Adicionar EPI" não executa nenhuma ação | Média | Média |
| [EXP-013](#exp-013) | Botão "Adicionar outra atividade" salva o cadastro (comportamento do "Salvar") | Alta | Alta |

---

## EXP-001

**Título:** Campo "CPF" aceita formato inválido sem validação

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os dados de cadastro utilizando como CPF "123.4567891"
4. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário com CPF em formato inválido.

**Obtido:** O sistema permitiu o cadastro do funcionário utilizando um número de CPF com formato inválido.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-001_FAIL_2026-08-17.mp4` |

---

## EXP-002

**Título:** Campo "CPF" aceita duplicação sem validação

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os dados de cadastro utilizando como CPF "12345678912"
4. Clicar em "Salvar"
5. Clicar em "+Adicionar Funcionário"
6. Preencher os dados de cadastro utilizando como CPF "12345678912"
7. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário com CPF já existente no cadastro.

**Obtido:** O sistema permitiu o cadastro do funcionário utilizando um número de CPF já existente.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-002_FAIL_2026-08-17.mp4` |

---

## EXP-003

**Título:** Campo "CPF" não realiza validação da autenticidade do documento informado

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os dados de cadastro utilizando como CPF "12345678912"
4. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário sem a validação de autenticidade do CPF.

**Obtido:** O sistema permitiu o cadastro do funcionário utilizando um número de CPF inexistente.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-003_FAIL_2026-08-17.mp4` |

---

## EXP-004

**Título:** Campos de preenchimento aceitam emoji sem validação

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "RG" e "Informe o número do CA" com 😂
4. Preencher o campo "CPF" com "12345678912"
5. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário utilizando emojis nos campos.

**Obtido:** O sistema permitiu o cadastro do funcionário utilizando emojis nos campos.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Baixa | `SEATECNOLOGIA_EXP-004_FAIL_2026-08-17.mp4` |

---

## EXP-005

**Título:** Campo "CPF" aceita emoji, não valida tipo de dado, apenas quantidade de caracteres

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "RG" e "Informe o número do CA"
4. Preencher o campo "CPF" com "😂😂😂😂😂1"
5. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário utilizando emojis no campo CPF.

**Obtido:** O sistema permitiu o cadastro do funcionário utilizando emojis no campo CPF.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-005_FAIL_2026-08-17.mp4` |

---

## EXP-006

**Título:** Sistema aceita cadastro de funcionário com data de nascimento menor do que 18 anos

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Inserir a data de nascimento "17/05/2010"
5. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário com data menor do que 18 anos.

**Obtido:** O sistema permitiu o cadastro do funcionário inserindo uma data de nascimento menor do que 18 anos.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-006_FAIL_2026-08-17.mp4` |

---

## EXP-007

**Título:** Sistema aceita cadastro de funcionário com data de nascimento futura

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Inserir a data de nascimento "17/05/2030"
5. Clicar em "Salvar"

**Esperado:** O sistema não deve permitir o cadastro do funcionário com data de nascimento futura.

**Obtido:** O sistema permitiu o cadastro do funcionário inserindo uma data de nascimento futura.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-007_FAIL_2026-08-17.mp4` |

---

## EXP-008

**Título:** Ausência de rolagem na listagem impede visualização de funcionários a partir do 5º cadastrado

**Pré-condições:** Devem existir 5 ou mais funcionários cadastrados. Sistema disponível e estável.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Verificar a listagem de funcionários

**Esperado:** O sistema deve permitir a visualização de todos os funcionários cadastrados.

**Obtido:** O sistema não permite visualizar os demais funcionários por falta de uma barra de rolagem ou caixa de pesquisa.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-008_FAIL_2026-08-17.png` |

---

## EXP-009

**Título:** Cargo "Cargo 1" não é exibido corretamente na listagem de funcionários

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Selecionar o cargo "Cargo 1"
5. Clicar em "Salvar"

**Esperado:** O sistema deve exibir corretamente o cargo "Cargo 1" na listagem de funcionários.

**Obtido:** O sistema exibe apenas uma barra azul sem o texto do cargo definido. A resposta da requisição `GET /employees` via API confirma que o "Cargo 1" está definido corretamente — o problema está isolado na renderização da interface.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Baixa | `SEATECNOLOGIA_EXP-009_FAIL_2026-08-17.png` |

---

## EXP-010

**Título:** Atividade "Ativid 1" não é exibida corretamente na listagem de funcionários

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Selecionar a atividade "Ativid 1"
5. Clicar em "Salvar"

**Esperado:** O sistema deve exibir corretamente a atividade "Ativid 1" na listagem de funcionários.

**Obtido:** O sistema exibe apenas uma barra azul sem o texto da atividade definida. A resposta da requisição `GET /employees` via API confirma que a "Ativid 1" está definida corretamente — o problema está isolado na renderização da interface.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Baixa | `SEATECNOLOGIA_EXP-010_FAIL_2026-08-17.png` |

---

## EXP-011

**Título:** Seção "A etapa está concluída?" sobrepõe a listagem de funcionários quando 4 ou mais funcionários são cadastrados

**Pré-condições:** Devem existir pelo menos 4 funcionários cadastrados. Sistema disponível e estável.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Visualizar a seção "A etapa está concluída?" na listagem de funcionários cadastrados

**Esperado:** A seção "A etapa está concluída?" não deve sobrepor a listagem de funcionários, permanecendo visível e legível independente da quantidade de registros.

**Obtido:** A seção "A etapa está concluída?" é exibida sobrepondo a lista de funcionários.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Baixa | `SEATECNOLOGIA_EXP-011_FAIL_2026-08-17.png` |

---

## EXP-012

**Título:** Botão "Adicionar EPI" não executa nenhuma ação ao ser clicado

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Clicar no botão "Adicionar EPI"

**Esperado:** O botão "Adicionar EPI" deve executar uma ação ao ser clicado (ex: ser possível adicionar um outro EPI).

**Obtido:** Nada acontece ao clicar no botão "Adicionar EPI".

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Média | `SEATECNOLOGIA_EXP-012_FAIL_2026-08-17.mp4` |

---

## EXP-013

**Título:** Botão "Adicionar outra atividade" finaliza e salva o cadastro do funcionário, com o mesmo comportamento do botão "Salvar"

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Clicar no botão "Adicionar outra atividade"

**Esperado:** O botão "Adicionar outra atividade" deve executar uma ação para permitir adicionar mais uma atividade ao cadastro do funcionário, sem finalizar/salvar o cadastro.

**Obtido:** O funcionário é cadastrado (com apenas a atividade já selecionada) e a página é redirecionada para a listagem de funcionários — comportamento idêntico ao botão "Salvar".

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_EXP-013_FAIL_2026-08-17.mp4` |
