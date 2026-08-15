## Sessão Exploratória — SeaTecnologia

### O que foi testado

- Preenchimento com dados válidos
- Campos obrigatórios vazios
- Formatos inválidos (Nome, CPF, RG, caracteres especiais)
- Data de nascimento
- Listagem de funcionários

### Observações

**Nome com formato inválido (ex: Pedro5)**
Sistema aceita sem validar o formato. Não há mensagem de erro.

**CPF com formato inválido (ex: 123.4567891)**
Sistema aceita sem validar o formato. Não há mensagem de erro.

**Campo CPF repetido**
Sistema aceita sem validação. Nenhuma mensagem de erro.

**Campos contendo emoji**
Todos os campos de preenchimento aceitam sem validação. Nenhuma mensagem de erro.

**Data de nascimento aceita menores de 18 anos e datas futuras**
Sistema aceita ambos sem validação. Nenhuma mensagem de erro.

### Resultado da sessão

**Bugs/dúvidas a reportar:**

*Bugs de validação:*
- CPF aceita formato inválido sem validação e repetido.
- Todos os campos aceitam emoji.
- Menores de idade e datas de nascimento futuras são aceitas.

*Bugs funcionais:*
- Quando 5 ou mais funcionários são cadastrados, não há rolagem para verificar os demais funcionários.

*Bugs visuais:*
- Cargo 1 está com bug visual na listagem (não é exibido).
- Ativid 1 está com bug visual na listagem (não é exibido).
- Seção "A etapa está concluída?" é exibida por cima da lista de funcionários quando 4 funcionários são cadastrados.

*Dúvidas:*
- Dúvida no formato do campo de RG referente ao estado. Talvez seja necessário um campo adicional para selecionar o estado do RG.

**Comportamentos confirmados:**
- CPF aceita apenas 11 caracteres ou mais.
- Campos Nome, CPF, RG, Data de Nascimento e Número CA são obrigatórios (caso estejam vazios, a mensagem "Preencha este campo." é exibida).
- Funcionários cadastrados são listados na página principal.
- Ao clicar no botão "Ver apenas ativos", apenas usuários ativos são exibidos.
- Botão "Limpar filtros" funciona corretamente.
