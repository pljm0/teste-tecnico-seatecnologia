# Diário de uso de IA

Durante o desenvolvimento do teste técnico, utilizei IA como apoio principalmente para tirar dúvidas e me ajudar em alguns pontos do projeto.

Usei para esclarecer dúvidas sobre QA, Cypress e testes de API, principalmente sobre alguns comandos, assertions, organização dos testes e utilização de tags como @smoke, @regression e @known-issue.

Também pedi ajuda para revisar e melhorar a escrita dos casos de teste, bug reports e da estratégia de testes. Em alguns momentos, também utilizei para discutir quais cenários fariam mais sentido priorizar.

Nem todas as sugestões funcionaram de primeira. Um exemplo foi na configuração do @cypress/grep para excluir os testes marcados como @known-issue. Algumas sugestões de configuração não funcionaram como esperado e precisei testar e ajustar a configuração no projeto.

Usei bastante também para revisar o que eu escrevia antes de finalizar, e para debugar coisas técnicas. Teve alguns momentos de confusão de conceito que a IA me ajudou a esclarecer, tipo quando eu confundi "container" com dropdown, ou quando não sabia a diferença entre risco de produto e impedimento de execução, ou ainda quando achei que Unicode era só emoji e não sabia que letra acentuada também entra ali. Isso ajudou bastante a eu escrever os bug reports com mais precisão técnica.

Teve também um caso de payload de teste com variável não isolada: numa sugestão de teste de API pra CPF inválido, o payload sugerido também tinha data de nascimento futura e campos obrigatórios vazios junto. Foi apontado depois que isso invalidava o teste, porque eu não saberia dizer se a rejeição, caso acontecesse, seria por causa do CPF ou dos outros campos errados junto. Corrigi isolando só a variável que eu queria testar de cada vez.

Também tive contato com alguns comandos que eu não conhecia, como um `.find` combinado com `span` pra localizar texto dentro de um elemento, e um `.filter` pra buscar o funcionário certo pelo CPF numa resposta da API e conseguir pegar o id dele pra deletar depois no cleanup dos testes.

Também aconteceram situações em que a sugestão de código não correspondia exatamente ao comportamento da aplicação. Nesses casos, fui testando, entendendo o que estava acontecendo e adaptando o código conforme necessário.
