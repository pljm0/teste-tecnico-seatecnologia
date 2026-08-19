# Casos de Teste - Integração Web x API - SeaTecnologia

**Sistema:** Cadastro de Funcionários (Web + API)  
**Aplicação Web:** https://analista-teste.seatecnologia.com.br  
**Endpoint base:** https://analista-teste.seatecnologia.com.br/employees

---

## Resumo

| ID | Título | Observação |
|---|---|---|
| [WEB-API-CT-001](#web-api-ct-001) | Validar cadastro de funcionário realizado pela Web na API | @Smoke / @Regression |
| [WEB-API-CT-002](#web-api-ct-002) | Validar cadastro de funcionário realizado pela API na Web | @Smoke / @Regression |
| [WEB-API-CT-003](#web-api-ct-003) | Validar edição de funcionário realizada pela API na Web | @Regression | 
| [WEB-API-CT-004](#web-api-ct-004) | Validar exclusão de funcionário realizada pela API na Web | @Regression | 

---

## WEB-API-CT-001

**Título:** Validar cadastro de funcionário realizado pela Web na API

**Pré-Condição:** Possuir acesso à aplicação Web e à API.

**Passos:**
1. Acessar a aplicação Web
2. Acessar a tela de cadastro de funcionário
3. Preencher os campos do funcionário com dados válidos
4. Realizar o cadastro do funcionário
5. Realizar uma requisição GET para o endpoint /employees
6. Localizar na resposta da API o funcionário cadastrado utilizando seu CPF
7. Comparar os dados cadastrados na Web com os dados retornados pela API

**Dados de teste:**
- Método: GET
- Endpoint: /employees
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 2000-05-20
- CA: 12345

**Resultado esperado:** A API deve retornar o funcionário cadastrado pela Web, apresentando os mesmos dados informados no cadastro.

---

## WEB-API-CT-002

**Título:** Validar cadastro de funcionário realizado pela API na Web

**Pré-Condição:** Possuir acesso à aplicação Web e à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees com dados válidos
2. Validar o status code da resposta
3. Acessar a aplicação Web
4. Localizar o funcionário cadastrado
5. Validar se o funcionário está visível na interface

**Dados de teste:**
- Método: POST
- Endpoint: /employees
- Nome: Teste325
- CPF: 12345678912
- RG: 12345678
- Data de nascimento: 2000-08-12

**Resultado esperado:** A API deve retornar o status code 201 e o funcionário cadastrado pela API deve estar disponível e visível na interface Web.

---

## WEB-API-CT-003

**Título:** Validar edição de funcionário realizada pela API na Web

**Pré-Condição:** Possuir acesso à aplicação Web e à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees para cadastrar um funcionário
2. Validar o status code da resposta
3. Armazenar o ID do funcionário cadastrado
4. Realizar uma requisição PUT para o endpoint /employees/{id} com os dados atualizados
5. Validar o status code da resposta
6. Acessar a aplicação Web
7. Localizar o funcionário editado
8. Validar se o nome atualizado está visível na interface

**Dados de teste:**
- Método: POST e PUT
- Endpoint: /employees e /employees/{id}
- Nome original: Teste325
- Nome atualizado: Teste285
- CPF: 12345678912
- RG: 213456
- Cargo: Desenvolvedor
- CA: 12345

**Resultado esperado:** A API deve retornar o status code 201 no cadastro e 200 na edição. A interface Web deve apresentar o funcionário com o nome atualizado para Teste285.

---

## WEB-API-CT-004

**Título:** Validar exclusão de funcionário realizada pela API na Web

**Pré-Condição:** Possuir acesso à aplicação Web e à API.

**Passos:**
1. Realizar uma requisição POST para o endpoint /employees para cadastrar um funcionário
2. Validar o status code da resposta
3. Armazenar o ID do funcionário cadastrado
4. Realizar uma requisição DELETE para o endpoint /employees/{id}
5. Validar o status code da resposta
6. Acessar a aplicação Web
7. Validar se o funcionário excluído não está mais presente na interface

**Dados de teste:**
- Método: POST e DELETE
- Endpoint: /employees e /employees/{id}
- Nome: Teste325
- CPF: 12345678912

**Resultado esperado:** A API deve retornar o status code 201 no cadastro e 200 na exclusão. O funcionário excluído pela API não deve estar presente na interface Web.
