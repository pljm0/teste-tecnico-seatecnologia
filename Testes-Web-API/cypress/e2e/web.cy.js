  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'Vite + React + TS')
  })

  const employeeData = { nome: 'Teste325', cpf: '12345678912', rg: '12345678', dataNasc: '2000-05-20', caNumb: '12345'}

describe('Seatecnologia - Cadastro', () => {

  afterEach(() => {
    cy.request({
      method: 'GET',
      url: '/employees'
    }).then((response) => {
      expect(response.status).to.eq(200)
      const employee = response.body.filter(employee => employee.state.employee.cpf === employeeData.cpf)

      
      employee.forEach(employee => {
      cy.request({
        method: 'DELETE',
        url: `/employees/${employee.id}`
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
})

  it('WEB-CT-001 - Efetuar cadastro de funcionário com dados válidos', { tags: ['@smoke', '@regression'] }, () => { // Cadastro de funcionário via Web
    cy.get('.c-kUQtTK').click()
    cy.get('[name="name"]').type(employeeData.nome)
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
    cy.get('[name="caNumber"]').type(employeeData.caNumb)
    cy.get('.c-iQPyMC').selectFile('cypress/fixtures/test.txt')
    cy.get('.save').click()
    cy.get('.c-bXqUbA').find('span', 'Teste325').should('be.visible')

  })

  it('WEB-CT-002 - Efetuar cadastro de funcionário ativo com dados válidos', { tags: '@regression' }, () => { // Cadastro de funcionário ativo via Web
    cy.get('.c-kUQtTK').click()
    cy.get('.ant-switch').click()
    cy.get('[name="name"]').type(employeeData.nome)
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
    cy.get('.ant-checkbox-input').check()
    cy.get('.save').click()
    cy.get('.c-hfAyug').click()
    cy.get('.c-bXqUbA').find('span', 'Teste325').should('be.visible')

  })

  it('WEB-CT-003 - Efetuar cadastro de funcionário com idade menor de 18 anos', { tags: '@known-issue' }, () => { // Cadastro de funcionário com idade menor de 18 anos via Web
    cy.get('.c-kUQtTK').click()
    cy.get('.ant-switch').click()
    cy.get('[name="name"]').type(employeeData.nome)
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type('2010-05-17')
    cy.get('.ant-checkbox-input').check()
    cy.get('.save').click()
    cy.get('.c-hfAyug').click()
    cy.get('.c-bXqUbA').should('not.contain', 'Teste325')

  })

  it('WEB-CT-004 - Efetuar cadastro de funcionário com data de nascimento futura', { tags: '@known-issue' }, () => {  // Cadastro de funcionário com data de nascimento futura via Web
    cy.get('.c-kUQtTK').click()
    cy.get('.ant-switch').click()
    cy.get('[name="name"]').type(employeeData.nome)
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type('2030-05-17')
    cy.get('.ant-checkbox-input').check()
    cy.get('.save').click()
    cy.get('.c-hfAyug').click()
    cy.get('.c-bXqUbA').find('span', 'Teste325').should('not.exist')

  })

  it('WEB-CT-005 - Não permitir cadastro de funcionário com CPF duplicado', { tags: '@known-issue' }, () => {  // Cadastro de funcionário com CPF duplicado via Web
    cy.get('.c-kUQtTK').click() // Cadastro do primeiro funcionário
    cy.get('[name="name"]').type('Funcionario 1')
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
    cy.get('.ant-checkbox-input').check()
    cy.get('.save').click()
    cy.get('.c-hfAyug').click()
    cy.get('.c-bXqUbA').find('span', 'Funcionario 1').should('be.visible')

    cy.get('.c-kUQtTK').click() // Cadastro do segundo funcionário com CPF duplicado
    cy.get('[name="name"]').type('Funcionario 2')
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
    cy.get('.ant-checkbox-input').check()
    cy.get('.save').click()
    cy.get('.c-hfAyug').click()
    cy.get('.c-bXqUbA').find('span', 'Funcionario 2').should('not.exist')

  })
})

describe('Seatecnologia - Validação', () => {

  it('WEB-CT-006 - Validar preenchimento obrigatório do campo Nome', { tags: '@regression' }, () => { // Validação do preenchimento obrigatório do campo Nome via Web
  cy.get('.c-kUQtTK').click()  
  cy.get('[name="cpf"]').type(employeeData.cpf)
  cy.get('[name="rg"]').type(employeeData.rg)
  cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
  cy.get('.ant-checkbox-input').check()
  cy.get('.save').click()
  cy.get('input[name="name"]').should('have.prop', 'validationMessage').and('equal', 'Preencha este campo.')

  })

  it('WEB-CT-007 - Validar preenchimento obrigatório do campo CPF', { tags: '@regression' }, () => { // Validação do preenchimento obrigatório do campo CPF via Web
  cy.get('.c-kUQtTK').click()  
  cy.get('[name="name"]').type(employeeData.nome)
  cy.get('[name="rg"]').type(employeeData.rg)
  cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
  cy.get('.ant-checkbox-input').check()
  cy.get('.save').click()
  cy.get('input[name="cpf"]').should('have.prop', 'validationMessage').and('equal', 'Preencha este campo.')

  })

  it('WEB-CT-008 - Validar preenchimento obrigatório do campo RG', { tags: '@regression' }, () => { // Validação do preenchimento obrigatório do campo RG via Web
  cy.get('.c-kUQtTK').click()  
  cy.get('[name="name"]').type(employeeData.nome)
  cy.get('[name="cpf"]').type(employeeData.cpf)
  cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
  cy.get('.ant-checkbox-input').check()
  cy.get('.save').click()
  cy.get('input[name="rg"]').should('have.prop', 'validationMessage').and('equal', 'Preencha este campo.')

  })

  it('WEB-CT-009 - Validar preenchimento obrigatório do campo Data de nascimento', { tags: '@regression' } ,() => { // Validação do preenchimento obrigatório do campo Data de nascimento via Web
  cy.get('.c-kUQtTK').click()  
  cy.get('[name="name"]').type(employeeData.nome)
  cy.get('[name="cpf"]').type(employeeData.cpf)
  cy.get('[name="rg"]').type(employeeData.rg)
  cy.get('.ant-checkbox-input').check()
  cy.get('.save').click()
  cy.get('input[name="birthDay"]').should('have.prop', 'validationMessage').and('equal', 'Preencha este campo.')

  })

  it('WEB-CT-010 - Validar preenchimento obrigatório do campo Número do CA', { tags: '@regression' }, () => { // Validação do preenchimento obrigatório do campo Número do CA via Web
  cy.get('.c-kUQtTK').click()  
  cy.get('[name="name"]').type(employeeData.nome)
  cy.get('[name="cpf"]').type(employeeData.cpf)
  cy.get('[name="rg"]').type(employeeData.rg)
  cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
  cy.get('.save').click()
  cy.get('input[name="caNumber"]').should('have.prop', 'validationMessage').and('equal', 'Preencha este campo.')

  })

  it('WEB-CT-011 - Validar quantidade mínima de caracteres no campo CPF', { tags: '@regression' }, () => { // Validação da quantidade mínima de caracteres no campo CPF via Web
  cy.get('.c-kUQtTK').click()  
  cy.get('[name="cpf"]').should('have.attr', 'minlength', '11')

  })

  it('WEB-CT-012 - Validar inserção de emojis nos campos de cadastro', { tags: '@known-issue' }, () => { // Validação da inserção de emojis nos campos de cadastro via Web
    cy.get('.c-kUQtTK').click()
    cy.get('.ant-switch').click()
    cy.get('[name="name"]').type('😂')
    cy.get('[name="name"]').should('not.have.value', '😂')
    cy.get('[name="cpf"]').type('😂😂😂😂😂1')
    cy.get('[name="cpf"]').should('not.have.value', '😂')
    cy.get('[name="rg"]').type('😂')
    cy.get('[name="rg"]').should('not.have.value', '😂')
    cy.get('[name="caNumber"]').type('😂')
    cy.get('[name="caNumber"]').should('not.have.value', '😂')

  })
})