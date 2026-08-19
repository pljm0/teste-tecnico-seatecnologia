# Nota de Estratégia — SeaTecnologia

## Priorização

- **Fluxos principais da aplicação:** cadastro e visualização de funcionários.  
- **CRUD da API:** POST, GET, PUT e DELETE.  
- **Validação de campos:** principalmente campos com regras de negócio e restrições.  
- **CPF como dado crítico:** priorizei validações como tamanho inválido e duplicidade, por ser um identificador importante e um dado sensível do funcionário.  
- **Integração Web × API:** validei se os dados cadastrados pela interface chegam corretamente à API e se alterações feitas pela API são refletidas na interface.  
- **Testes positivos e negativos:** não testei apenas o caminho feliz, também busquei testar comportamentos inválidos e bugs.  
- **Smoke e Regression:** separei os fluxos essenciais dos cenários mais completos.  

## O que ficou de fora

- Alguns cenários de borda e combinações de validação de campos.  
- Validação do campo RG, devido à ausência de clareza sobre a regra de negócio esperada.  
- Uma cobertura mais ampla de testes negativos.  
- Testes de desempenho/carga da API.  
- Testes de segurança.  
- Compatibilidade entre navegadores.  
- Cenários adicionais de integração, além dos fluxos prioritários.  

## Melhorias futuras

- Ampliar a cobertura de cenários de borda e testes negativos.  
- Adicionar testes de compatibilidade em diferentes navegadores.  
- Integrar a execução dos testes a um pipeline de CI/CD para execução automatizada.  
- Utilizar o padrão Page Object Model (POM) para melhorar a organização, reutilização e manutenção do código de automação.  
- Utilizar fixtures para centralizar e organizar os dados de teste.  
