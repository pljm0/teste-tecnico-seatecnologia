# Cenários de Teste — SeaTecnologia

**Sistema:** Cadastro de Funcionários (Web)
**Ambiente:** Navegador Chrome / Windows 11
**Aplicação:** https://analista-teste.seatecnologia.com.br

---

## Resumo

| ID | Título | Observação |
|---|---|---|
| [CT-001](#ct-001) | Efetuar cadastro de funcionário com dados válidos | @Smoke / @Regression |
| [CT-002](#ct-002) | Efetuar cadastro de funcionário ativo com dados válidos | @Regression |
| [CT-003](#ct-003) | Efetuar cadastro de funcionário com idade menor de 18 anos | @Known-issue |
| [CT-004](#ct-004) | Efetuar cadastro de funcionário com data de nascimento futura | @Known-issue |
| [CT-005](#ct-005) | Não permitir cadastro de funcionário com CPF duplicado | @Known-issue |
| [CT-006](#ct-006) | Validar preenchimento obrigatório do campo Nome | @Regression |
| [CT-007](#ct-007) | Validar preenchimento obrigatório do campo CPF | @Regression |
| [CT-008](#ct-008) | Validar preenchimento obrigatório do campo RG | @Regression |
| [CT-009](#ct-009) | Validar preenchimento obrigatório do campo Data de nascimento | @Regression |
| [CT-010](#ct-010) | Validar preenchimento obrigatório do campo Número do CA | @Regression |
| [CT-011](#ct-011) | Validar quantidade mínima de caracteres no campo CPF | @Regression |
| [CT-012](#ct-012) | Validar inserção de emojis nos campos de cadastro | @Know-issue |

---

## CT-001

**Título:** Efetuar cadastro de funcionário com dados válidos

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "CPF", "RG", "Data de nascimento" e "Número do CA" com dados válidos
4. Selecionar um arquivo válido
5. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 20-05-2000
- Número do CA: 12345
- Arquivo: test.txt

**Resultado esperado:** O sistema deve permitir o cadastro e exibir o funcionário cadastrado na página principal.

---

## CT-002

**Título:** Efetuar cadastro de funcionário ativo com dados válidos

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Clicar no botão para alterar o status do funcionário para ativo
4. Preencher os campos obrigatórios "Nome", "CPF", "RG" e "Data de nascimento" com dados válidos
5. Marcar "O trabalhador não usa EPI."
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 20-05-2000

**Resultado esperado:** O sistema deve permitir o cadastro do funcionário com o status ativo e exibi-lo na página principal.

---

## CT-003

**Título:** Efetuar cadastro de funcionário com idade menor de 18 anos

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios com dados válidos
4. Informar uma data de nascimento correspondente a uma idade menor de 18 anos
5. Marcar "O trabalhador não usa EPI."
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 17-05-2010

**Resultado esperado:** O sistema deve permitir o cadastro do funcionário caso não exista uma regra de idade mínima definida.

---

## CT-004

**Título:** Efetuar cadastro de funcionário com data de nascimento futura

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios com dados válidos
4. Informar uma data de nascimento futura
5. Marcar "O trabalhador não usa EPI."
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 17-05-2030

**Resultado esperado:** O sistema deve rejeitar o cadastro e informar que a data de nascimento não pode ser futura.

---

## CT-005

**Título:** Não permitir cadastro de funcionário com CPF duplicado

**Pré-Condição:** Possuir um funcionário cadastrado com o CPF utilizado no teste.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios com dados válidos utilizando o CPF informado nos dados de teste
4. Marcar "O trabalhador não usa EPI."
5. Clicar em "Salvar"
6. Confirmar que o primeiro funcionário foi cadastrado
7. Clicar novamente em "+Adicionar Funcionário"
8. Preencher os campos obrigatórios com dados válidos utilizando o mesmo CPF
9. Marcar "O trabalhador não usa EPI."
10. Clicar em "Salvar"
11. Verificar se o segundo funcionário foi cadastrado

**Dados de teste:**

*Funcionário 1:*
- Nome: Funcionario 1
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 20-05-2000

*Funcionário 2:*
- Nome: Funcionario 2
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 20-05-2000

**Resultado esperado:** O sistema não deve permitir o cadastro do segundo funcionário utilizando um CPF já cadastrado.

**Status:** Falha conhecida (`@known-issue`). O sistema atualmente permite o cadastro de funcionários com CPF duplicado.

---

## CT-006

**Título:** Validar preenchimento obrigatório do campo Nome

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Deixar o campo "Nome" vazio
4. Preencher os campos "CPF", "RG" e "Data de nascimento" com dados válidos
5. Marcar "O trabalhador não usa EPI."
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Vazio
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 20-05-2000

**Resultado esperado:** O sistema não deve permitir o cadastro e deve exibir a mensagem "Preencha este campo." no campo Nome.

---

## CT-007

**Título:** Validar preenchimento obrigatório do campo CPF

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "RG" e "Data de nascimento" com dados válidos
4. Deixar o campo "CPF" vazio
5. Marcar "O trabalhador não usa EPI."
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: Vazio
- RG: 12345678
- Data de nascimento: 20-05-2000

**Resultado esperado:** O sistema não deve permitir o cadastro e deve exibir a mensagem "Preencha este campo." no campo CPF.

---

## CT-008

**Título:** Validar preenchimento obrigatório do campo RG

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "CPF" e "Data de nascimento" com dados válidos
4. Deixar o campo "RG" vazio
5. Marcar a opção necessária para o cadastro
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: Vazio
- Data de nascimento: 20-05-2000

**Resultado esperado:** O sistema não deve permitir o cadastro e deve exibir a mensagem "Preencha este campo." no campo RG.

---

## CT-009

**Título:** Validar preenchimento obrigatório do campo Data de nascimento

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "CPF" e "RG" com dados válidos
4. Deixar o campo "Data de nascimento" vazio
5. Marcar "O trabalhador não usa EPI."
6. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: Vazio

**Resultado esperado:** O sistema não deve permitir o cadastro e deve exibir a mensagem "Preencha este campo." no campo Data de nascimento.

---

## CT-010

**Título:** Validar preenchimento obrigatório do campo Número do CA

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos "Nome", "CPF", "RG" e "Data de nascimento" com dados válidos
4. Deixar o campo "Número do CA" vazio
5. Clicar em "Salvar"

**Dados de teste:**
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 20-05-2000
- Número do CA: Vazio

**Resultado esperado:** O sistema não deve permitir o cadastro e deve exibir a mensagem "Preencha este campo." no campo Número do CA.

---

## CT-011

**Título:** Validar quantidade mínima de caracteres no campo CPF

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Verificar a configuração de quantidade mínima de caracteres do campo CPF

**Dados de teste:**
- Quantidade mínima esperada: 11 caracteres.

**Resultado esperado:** O campo CPF deve possuir a configuração de quantidade mínima de 11 caracteres.

---

## CT-012

**Título:** Validar inserção de emojis nos campos de cadastro

**Pré-Condição:** Nenhuma.

**Passos:**
1. Entrar em https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Tentar inserir um emoji no campo "Nome"
4. Tentar inserir emojis no campo "CPF"
5. Tentar inserir um emoji no campo "RG"
6. Tentar inserir um emoji no campo "Número do CA"

**Dados de teste:**
- Emoji utilizado: 😂

**Resultado esperado:** O sistema não deve permitir a inserção de emojis em campos que devem aceitar apenas caracteres válidos para os respectivos dados.

**Status:** Falha conhecida (`@known-issue`). O sistema atualmente permite a inserção de emojis nos campos testados.
