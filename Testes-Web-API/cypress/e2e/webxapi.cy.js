describe('Testes cruzamento Web -> API', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq', 'Vite + React + TS')
  })

  const employeeData = {
    nome: 'Teste325',
    cpf: '12345678912',
    rg: '12345678',
    dataNasc: '2000-05-20',
    caNumb: '12345'
  }

  it('WEB-API-CT-001 - Validar cadastro de funcionário realizado pela Web na API', { tags: ['@smoke', '@regression'] }, () => {
    cy.get('.c-kUQtTK').click()                                         //Faz o cadastro do funcionário via Web
    cy.get('[name="name"]').type(employeeData.nome)
    cy.get('[name="cpf"]').type(employeeData.cpf)
    cy.get('[name="rg"]').type(employeeData.rg)
    cy.get('input[name="birthDay"]').type(employeeData.dataNasc)
    cy.get('[name="caNumber"]').type(employeeData.caNumb)
    cy.get('.save').click()

    cy.request({                   //Valida o cadastro do funcionário via API
      method: 'GET',
      url: '/employees'
    }).then((response) => {
      const employee = response.body.find(employee => employee.state.employee.cpf === employeeData.cpf)

      expect(employee.state.employee.name).to.eq(employeeData.nome)
      expect(employee.state.employee.cpf).to.eq(employeeData.cpf)
      expect(employee.state.employee.rg).to.eq(employeeData.rg)
      expect(employee.state.employee.birthDay).to.eq(employeeData.dataNasc)
      expect(employee.state.employee.caNumber).to.eq(employeeData.caNumb)

      cy.request({                  //Cleanup - DELETE
        method: 'DELETE',
        url: `/employees/${employee.id}`
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
})


describe('Testes cruzamento API -> Web', () => {

  const funcionario = {
    state: {
      employee: {
        isActive: false,
        name: 'Teste325',
        gender: 'masculino',
        cpf: '12345678912',
        birthDay: '2000-08-12',
        rg: '12345678',
        role: '',
        usesEpi: true,
        caNumber: '12345'
      }
    }
  }

  it('WEB-API-CT-002 - Validar cadastro de funcionário realizado pela API na Web', { tags: ['@smoke', '@regression'] }, () => {
    cy.request({                    //Faz o cadastro do funcionário via API
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)
      cy.visit('/')
      cy.get('.c-bXqUbA').find('span', funcionario.state.nome).should('be.visible')     //Valida o cadastro do funcionário via Web

      const employeeId = response.body.id

      cy.request({                  //Cleanup - DELETE
        method: 'DELETE',
        url: `/employees/${employeeId}`
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })

  it('WEB-API-CT-003 - Validar edição de funcionário realizada pela API na Web', { tags: '@regression' }, () => {
    cy.request({                     // Setup - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)
      const employeeId = response.body.id

      cy.request({                    // Faz a alteração do funcionário via API
        method: 'PUT',
        url: `/employees/${employeeId}`,
        body: {
          state: {
            employee: {
              isActive: true,
              name: 'Teste285',
              gender: 'masculino',
              cpf: '12345678912',
              birthDay: '2000-08-12',
              rg: '213456',
              role: 'Desenvolvedor',
              usesEpi: true,
              caNumber: '12345'
            }
          }
        }
      }).then((response) => {

        expect(response.status).to.eq(200)
        cy.visit('/')
        cy.get('.c-bXqUbA').find('span', response.body.state.employee.name).should('be.visible') //Valida a alteração do funcionário via Web

        cy.request({                //Cleanup - DELETE
          method: 'DELETE',
          url: `/employees/${employeeId}`
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })
  })

  it('WEB-API-CT-004 - Validar exclusão de funcionário realizada pela API na Web', { tags: '@regression' }, () => {
    cy.request({                    // Setup - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)

      const employeeId = response.body.id

      cy.request({                //Deleta o funcionário e valida a exclusão via API
        method: 'DELETE',
        url: `/employees/${employeeId}`
      }).then((response) => {

        expect(response.status).to.eq(200)
        cy.visit('/')
        cy.get('.c-bXqUbA').should('not.contain', funcionario.state.nome)
      })
    })
  })
})