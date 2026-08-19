# Relatório de Defeitos - SeaTecnologia  

**Sistema:** Cadastro e listagem de Funcionários (Web)  
**Ambiente:** Navegador Chrome / Windows 11  
**Aplicação:** https://analista-teste.seatecnologia.com.br  

---

## Resumo

| ID | Título | Severidade | Prioridade |
|---|---|---|---|
| [BUG-001](#BUG-001) | Campo "CPF" aceita formato inválido sem validação | Alta | Alta |
| [BUG-002](#BUG-002) | Campo "CPF" aceita duplicação sem validação | Alta | Alta |
| [BUG-003](#BUG-003) | Campo "CPF" não valida autenticidade do documento | Alta | Alta |
| [BUG-004](#BUG-004) | Campos de preenchimento aceitam emoji sem validação | Média | Baixa |
| [BUG-005](#BUG-005) | Campo "CPF" aceita emoji, não valida tipo de dado | Alta | Alta |
| [BUG-006](#BUG-006) | Sistema aceita cadastro com data de nascimento menor que 18 anos | Alta | Alta |
| [BUG-007](#BUG-007) | Sistema aceita cadastro com data de nascimento futura | Alta | Alta |
| [BUG-008](#BUG-008) | Ausência de rolagem impede visualização de 5+ funcionários | Alta | Alta |
| [BUG-009](#BUG-009) | Cargo "Cargo 1" não é exibido corretamente na listagem | Média | Baixa |
| [BUG-010](#BUG-010) | Atividade "Ativid 1" não é exibida corretamente na listagem | Média | Baixa |
| [BUG-011](#BUG-011) | Seção "A etapa está concluída?" sobrepõe a listagem | Média | Baixa |
| [BUG-012](#BUG-012) | Botão "Adicionar EPI" não executa nenhuma ação | Média | Média |
| [BUG-013](#BUG-013) | Botão "Adicionar outra atividade" salva o cadastro (comportamento do "Salvar") | Alta | Alta |
| [BUG-014](#BUG-014) | API aceita criação de funcionário com CPF em formato inválido. | Alta | Alta |
| [BUG-015](#BUG-015) | API aceita criação de funcionário com CPF já cadastrado. | Alta | Alta |
| [BUG-016](#BUG-016) | API aceita criação de funcionário com campos obrigatórios vazios. | Alta | Alta |
| [BUG-017](#BUG-017) | API aceita criação de funcionário com data de nascimento em formato inválido. | Alta | Alta |
| [BUG-018](#BUG-018) | API não exige autenticação/token para acessar e manipular dados de funcionários. | Alta | Alta |
| [BUG-019](#BUG-019) | API aceita criação de funcionário com payload incorreto fazendo com que a interface web quebre. | Alta | Alta |

---

## BUG-001

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
| Alta | Alta | `SEATECNOLOGIA_BUG-001_2026-08-17.mp4` |

---

## BUG-002

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
| Alta | Alta | `SEATECNOLOGIA_BUG-002_2026-08-17.mp4` |

---

## BUG-003

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
| Alta | Alta | `SEATECNOLOGIA_BUG-003_2026-08-17.mp4` |

---

## BUG-004

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
| Média | Baixa | `SEATECNOLOGIA_BUG-004_2026-08-17.mp4` |

---

## BUG-005

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
| Alta | Alta | `SEATECNOLOGIA_BUG-005_2026-08-17.mp4` |

---

## BUG-006

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
| Alta | Alta | `SEATECNOLOGIA_BUG-006_2026-08-17.mp4` |

---

## BUG-007

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
| Alta | Alta | `SEATECNOLOGIA_BUG-007_2026-08-17.mp4` |

---

## BUG-008

**Título:** Ausência de rolagem na listagem impede visualização de funcionários a partir do 5º cadastrado

**Pré-condições:** Devem existir 5 ou mais funcionários cadastrados. Sistema disponível e estável.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Verificar a listagem de funcionários

**Esperado:** O sistema deve permitir a visualização de todos os funcionários cadastrados.

**Obtido:** O sistema não permite visualizar os demais funcionários por falta de uma barra de rolagem ou caixa de pesquisa.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-008_2026-08-17.png` |

---

## BUG-009

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
| Média | Baixa | `SEATECNOLOGIA_BUG-009_2026-08-17.png` |

---

## BUG-010

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
| Média | Baixa | `SEATECNOLOGIA_BUG-010_2026-08-17.png` |

---

## BUG-011

**Título:** Seção "A etapa está concluída?" sobrepõe a listagem de funcionários quando 4 ou mais funcionários são cadastrados

**Pré-condições:** Devem existir pelo menos 4 funcionários cadastrados. Sistema disponível e estável.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Visualizar a seção "A etapa está concluída?" na listagem de funcionários cadastrados

**Esperado:** A seção "A etapa está concluída?" não deve sobrepor a listagem de funcionários, permanecendo visível e legível independente da quantidade de registros.

**Obtido:** A seção "A etapa está concluída?" é exibida sobrepondo a lista de funcionários.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Baixa | `SEATECNOLOGIA_BUG-011_2026-08-17.png` |

---

## BUG-012

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
| Média | Média | `SEATECNOLOGIA_BUG-012_2026-08-17.mp4` |

---

## BUG-013

**Título:** Botão "Adicionar outra atividade" finaliza e salva o cadastro do funcionário, com o mesmo comportamento do botão "Salvar"

**Pré-condições:** Sistema disponível e estável para cadastro de funcionário.

**Passos:**
1. Acessar https://analista-teste.seatecnologia.com.br
2. Clicar em "+Adicionar Funcionário"
3. Preencher os campos obrigatórios
4. Clicar no botão "Adicionar outra atividade"

**Esperado:** O botão "Adicionar outra atividade" deve executar uma ação para permitir adicionar mais uma atividade ao cadastro do funcionário, sem finalizar/salvar o cadastro.

**Obtido:** O funcionário é cadastrado (com apenas a atividade já selecionada) e a página é redirecionada para a listagem de funcionários. Comportamento idêntico ao botão "Salvar".

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-013_2026-08-17.mp4` |

## BUG-014

**Título:** API aceita criação de funcionário com CPF em formato inválido.

**Pré-condições:** API disponível e estável.

**Passos:**
1. Realizar requisição POST para o endpoint /employees com o seguinte payload:
  
    {  
        "state": {  
            "employee": {  
                "isActive": false,  
                "name": "Teste2",  
                "gender": "masculino",  
                "cpf": "123.4567890",  
                "birthDay": "2000-08-12",  
                "rg": "1234567",  
                "role": "",  
                "usesEpi": true,  
                "caNumber": "12345"  
            }  
        }  
    }  
  
2. Realizar requisição GET para o endpoint /employees para visualizar os funcionários cadastrados.

**Esperado:** A API não deve permitir o cadastro de funcionários com CPF em formato inválido.

**Obtido:** A API retorna 201 (Created) A API permitindo o cadastro de funcionário utilizando um CPF com formato inválido e não houve nenhuma validação. A requisição GET /employees confirma que o registro foi persistido com o CPF "123.4567890" exatamente como enviado.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-014_2026-08-17.mp4` |

## BUG-015

**Título:** API aceita criação de funcionário com CPF já cadastrado.

**Pré-condições:** API disponível e estável.

**Passos:**
1. Realizar requisição POST para o endpoint /employees com o seguinte payload:
  
    {  
        "state": {  
            "employee": {  
                "isActive": false,  
                "name": "Teste2",  
                "gender": "masculino",  
                "cpf": "12324567890",  
                "birthDay": "2000-08-12",  
                "rg": "1234567",  
                "role": "",  
                "usesEpi": true,  
                "caNumber": "12345"  
            }  
        }  
    }
     
3. Realizar requisição POST para o endpoint /employees com o seguinte payload:
  
    {  
        "state": {  
            "employee": {  
                "isActive": false,  
                "name": "Teste3",  
                "gender": "masculino",  
                "cpf": "12324567890",  
                "birthDay": "2000-08-12",  
                "rg": "1234567",  
                "role": "",  
                "usesEpi": true,  
                "caNumber": "12345"  
            }  
        }  
    }  
  
4. Realizar requisição GET para o endpoint /employees para visualizar os funcionários cadastrados.

**Esperado:** A API não deve permitir o cadastro de funcionários com CPF já cadastrado no sistema.

**Obtido:** A API retorna 201 (Created) A API permitindo o cadastro de funcionário utilizando um CPF já cadastrado e não houve nenhuma validação. A requisição GET /employees confirma que o registro foi persistido com o CPF "12324567890" exatamente como enviado em dois funcionários cadastrados.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-015_2026-08-17.mp4` |

## BUG-016

**Título:** API aceita criação de funcionário com campos obrigatórios vazios.

**Pré-condições:** API disponível e estável.

**Passos:**
1. Realizar requisição POST para o endpoint /employees com o seguinte payload:
  
    {  
        "state": {  
            "employee": {   
                "isActive": false,  
                "name": "",  
                "gender": "masculino",  
                "cpf": "",  
                "birthDay": "2000-08-12",  
                "rg": "",  
                "role": "",  
                "usesEpi": true,  
                "caNumber": "12345"  
            }  
        }  
    }  
  
2. Realizar requisição GET para o endpoint /employees para visualizar o funcionário cadastrado.

**Esperado:** A API não deve permitir o cadastro de funcionários com campos obrigatórios vazios.

**Obtido:** A API retorna 201 (Created) A API permitindo o cadastro de funcionário com campos obrigatórios não preenchidos e não houve nenhuma validação. A requisição GET /employees confirma que o registro foi persistido exatamente como enviado.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-016_2026-08-17.mp4` |

## BUG-017

**Título:** API aceita criação de funcionário com data de nascimento em formato inválido.

**Pré-condições:** API disponível e estável.

**Passos:**
1. Realizar requisição POST para o endpoint /employees com o seguinte payload:
  
    {  
        "state": {  
            "employee": {  
                "isActive": false,  
                "name": "Teste2",  
                "gender": "masculino",  
                "cpf": "12345678912",  
                "birthDay": "2000.08/12",  
                "rg": "213456",  
                "role": "",  
                "usesEpi": true,  
                "caNumber": "12345"  
            }  
        }  
    }  
  
2. Realizar requisição GET para o endpoint /employees para visualizar o funcionário cadastrado.

**Esperado:** A API não deve permitir o cadastro de funcionários com data de nascimento em formato inválido.

**Obtido:** A API retorna 201 (Created) A API permitindo o cadastro de funcionário com a data de nascimento em formato inválido e não houve nenhuma validação. A requisição GET /employees confirma que o registro foi persistido exatamente como enviado.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-017_2026-08-17.mp4` |

## BUG-018

**Título:** API não exige autenticação/token para acessar e manipular dados de funcionários.

**Pré-condições:** API disponível e estável.

**Passos:**
1. Realizar requisição GET para o endpoint /employees, sem incluir nenhum header de autenticação (Authorization/Bearer Token)

2. Observar a resposta.

**Esperado:** A API deve retornar erro 401 (Unauthorized) ou 403 (Forbidden), rejeitando o acesso sem autenticação.

**Obtido:** A API retorna 200 (OK) com os dados completos de todos os funcionários cadastrados, incluindo CPF, sem exigir nenhum token ou credencial. O mesmo para as requisições POST, PUT e DELETE.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-018_2026-08-17.mp4` |

## BUG-019

**Título:** API aceita criação de funcionário com payload incorreto fazendo com que a interface web quebre.

**Pré-condições:** API disponível e estável.

**Passos:**
1. Realizar requisição POST para o endpoint /employees com o seguinte payload:
  
    {  
            "employee": {  
                "isActive": false,  
                "name": "Teste2",  
                "gender": "masculino",  
                "cpf": "12345678912",  
                "birthDay": "2000.08/12",  
                "rg": "213456",  
                "role": "",  
                "usesEpi": true,  
                "caNumber": "12345"  
            }  
        }  
  
2. Acessar https://analista-teste.seatecnologia.com.br

**Esperado:** A API deve retornar erro 400 (Bad Request), rejeitando a criação do funcionário com payload incorreto.

**Obtido:** A API retorna 201 (Created) cadastrando o funcionário com o payload em formato incorreto e quebrando a interface web (tela cinza).

| Severidade | Prioridade | Evidência |
|---|---|---|
| Alta | Alta | `SEATECNOLOGIA_BUG-019_2026-08-17.mp4` |

## BUG-020

**Título:** Divergência Web × API: atributo usesEpi permanece como true após selecionar "O trabalhador não usa EPI" no cadastro pela interface Web.

**Pré-condições:** API disponível e estável.

**Passos:**

1. Acessar a aplicação Web.
2. Acessar a tela de cadastro de funcionário.
3. Preencher os campos obrigatórios com dados válidos.
4. Selecionar a opção "O trabalhador não usa EPI".
5. Realizar o cadastro do funcionário.
6. Consultar o funcionário cadastrado por meio da API.
7. Verificar o valor retornado no atributo usesEpi.

**Esperado:** A API deve alterar o atributo usesEpi para false após selecionar "O trabalhador não usa EPI" durante o cadastro.

**Obtido:** O atributo usesEpi é mantido como true mesmo após selecionar "O trabalhador não usa EPI" no cadastro. É possível conferir o cruzamento de dados ao enviar uma requisição GET para a API.

| Severidade | Prioridade | Evidência |
|---|---|---|
| Média | Média | `SEATECNOLOGIA_BUG-020_2026-08-18.mp4` |
