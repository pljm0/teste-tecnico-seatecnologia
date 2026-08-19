# Casos de Teste - SeaTecnologia

**Sistema:** Cadastro de Funcionários (Web)  
**Ambiente:** Navegador Chrome / Windows 11  
**Aplicação:** https://analista-teste.seatecnologia.com.br

---

## Resumo

| ID | Título | Observação |
|---|---|---|
| [WEB-CT-001](#web-ct-001) | Efetuar cadastro de funcionário com dados válidos | @Smoke / @Regression |
| [WEB-CT-002](#web-ct-002) | Efetuar cadastro de funcionário ativo com dados válidos | @Regression |
| [WEB-CT-003](#web-ct-003) | Efetuar cadastro de funcionário com idade menor de 18 anos | @Known-issue |
| [WEB-CT-004](#web-ct-004) | Efetuar cadastro de funcionário com data de nascimento futura | @Known-issue |
| [WEB-CT-005](#web-ct-005) | Não permitir cadastro de funcionário com CPF duplicado | @Known-issue |
| [WEB-CT-006](#web-ct-006) | Validar preenchimento obrigatório do campo Nome | @Regression |
| [WEB-CT-007](#web-ct-007) | Validar preenchimento obrigatório do campo CPF | @Regression |
| [WEB-CT-008](#web-ct-008) | Validar preenchimento obrigatório do campo RG | @Regression |
| [WEB-CT-009](#web-ct-009) | Validar preenchimento obrigatório do campo Data de nascimento | @Regression |
| [WEB-CT-010](#web-ct-010) | Validar preenchimento obrigatório do campo Número do CA | @Regression |
| [WEB-CT-011](#web-ct-011) | Validar quantidade mínima de caracteres no campo CPF | @Regression |
| [WEB-CT-012](#web-ct-012) | Validar inserção de emojis nos campos de cadastro | @Know-issue |

---

## WEB-CT-001

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

## WEB-CT-002

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

## WEB-CT-003

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

## WEB-CT-004

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

## WEB-CT-005

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

## WEB-CT-006

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

## WEB-CT-007

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

## WEB-CT-008

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

## WEB-CT-009

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

## WEB-CT-010

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

## WEB-CT-011

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

## WEB-CT-012

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
