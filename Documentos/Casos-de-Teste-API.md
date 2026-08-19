# Casos de Teste — API — SeaTecnologia

**Sistema:** Cadastro de Funcionários (API)    
**Endpoint base:** https://analista-teste.seatecnologia.com.br/employees  

---

## Resumo

| ID | Título | Observação |
|---|---|---|
| [API-CT-001](#api-ct-001) | Validar retorno da lista de funcionários | @Smoke / @Regression |
| [API-CT-002](#api-ct-002) | Validar cadastro de funcionário | @Smoke / @Regression |
| [API-CT-003](#api-ct-003) | Validar edição de funcionário | @Regression |
| [API-CT-004](#api-ct-004) | Validar exclusão de funcionário | @Regression |
| [API-CT-005](#api-ct-005) | Validar cadastro de funcionário com CPF duplicado | @Known-Issue |
| [API-CT-006](#api-ct-006) | Validar cadastro de funcionário com CPF inferior a 11 caracteres | @Known-Issue |

---

## API-CT-001

**Título:** Validar retorno da lista de funcionários

**Pré-Condição:** Possuir acesso à API.

**Passos:**
1. Realizar uma requisição GET para o endpoint /employees
2. Validar o status code da resposta
3. Validar se o payload retornado possui a estrutura esperada

**Dados de teste:**
- Método: GET
- Endpoint: /employees

**Resultado esperado:** A API deve retornar o status code 200 e uma lista de funcionários contendo a estrutura esperada.

---

## API-CT-002

**Título:** Validar cadastro e presença do funcionário na listagem

**Pré-Condição:** Possuir acesso à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees para cadastrar um funcionário
2. Validar o status code da resposta
3. Realizar uma requisição GET para o endpoint /employees
4. Validar o status code da resposta
5. Localizar na lista retornada o funcionário cadastrado utilizando seu ID
6. Validar se o funcionário possui as propriedades `state` e `id`
7. Validar se o objeto `employee` possui as propriedades esperadas

**Dados de teste:**
- Método: POST, GET e DELETE
- Endpoint: /employees e /employees/{id}

**Resultado esperado:** A API deve retornar o status code 201 no cadastro, 200 na consulta e 200 na exclusão. O funcionário cadastrado deve estar presente na lista retornada pelo GET e possuir a estrutura esperada.

---

## API-CT-003

**Título:** Validar edição de funcionário

**Pré-Condição:** Possuir acesso à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees para cadastrar um funcionário
2. Validar o status code da resposta
3. Armazenar o ID do funcionário cadastrado
4. Realizar uma requisição PUT para o endpoint /employees/{id} com os dados atualizados
5. Validar o status code da resposta
6. Validar se o nome do funcionário foi atualizado

**Dados de teste:**
- Método: POST, PUT e DELETE
- Endpoint: /employees e /employees/{id}

**Resultado esperado:** A API deve retornar o status code 201 no cadastro, 200 na edição e 200 na exclusão. Os dados do funcionário devem ser atualizados conforme os valores enviados na requisição PUT.

---

## API-CT-004

**Título:** Validar exclusão de funcionário

**Pré-Condição:** Possuir acesso à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees para cadastrar um funcionário
2. Validar o status code da resposta
3. Armazenar o ID do funcionário cadastrado
4. Realizar uma requisição DELETE para o endpoint /employees/{id}
5. Validar o status code da resposta
6. Validar se o ID retornado na resposta corresponde ao ID do funcionário excluído

**Dados de teste:**
- Método: POST e DELETE
- Endpoint: /employees e /employees/{id}

**Resultado esperado:** A API deve retornar o status code 201 no cadastro e 200 na exclusão. A resposta da exclusão deve retornar o ID correspondente ao funcionário excluído.

---

## API-CT-005

**Título:** Validar cadastro de funcionário com CPF duplicado

**Pré-Condição:** Possuir acesso à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees para cadastrar um funcionário
2. Armazenar o ID do funcionário cadastrado
3. Alterar o nome do funcionário, mantendo o mesmo CPF
4. Realizar uma segunda requisição POST para o endpoint /employees utilizando o CPF já cadastrado
5. Validar o comportamento da API diante do cadastro de CPF duplicado

**Dados de teste:**
- Método: POST e DELETE
- Endpoint: /employees e /employees/{id}
- CPF: 12345678912

**Resultado esperado:** A API deve impedir o cadastro de um funcionário utilizando um CPF já cadastrado, retornando o status code 400. Os funcionários criados durante o teste devem ser excluídos ao final da execução.

**Observação:** Caso de teste classificado como Known Issue.

---

## API-CT-006

**Título:** Validar cadastro de funcionário com CPF inferior a 11 caracteres

**Pré-Condição:** Possuir acesso à API.

**Passos:**
1. Alterar o CPF do funcionário para um valor com menos de 11 caracteres
2. Realizar uma requisição POST para o endpoint /employees
3. Validar o comportamento da API diante do CPF inválido

**Dados de teste:**
- Método: POST e DELETE
- Endpoint: /employees e /employees/{id}
- CPF: 12345

**Resultado esperado:** A API deve impedir o cadastro de um funcionário com CPF inferior a 11 caracteres, retornando o status code 400.

**Observação:** Caso de teste classificado como Known Issue.
