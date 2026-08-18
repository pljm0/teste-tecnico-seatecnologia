describe('Seatecnologia - API', () => {

  const funcionario = {
    state: {
      employee: {
        isActive: false,
        name: 'Teste325',
        gender: 'masculino',
        cpf: '12345678912',
        birthDay: '2000-08-12',
        rg: '213456',
        role: '',
        usesEpi: true,
        caNumber: '12345'
      }
    }
  }

  it('API-CT-001 - Validar retorno da lista de funcionários', { tags: ['@smoke', '@regression'] }, () => {

    cy.request({            //Teste Principal - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.state.employee.name).to.eq('Teste325')
      expect(response.body.state.employee.cpf).to.eq('12345678912')
      expect(response.body.state.employee.birthDay).to.eq('2000-08-12')
      expect(response.body.state.employee.rg).to.eq('213456')
      expect(response.body.state.employee.caNumber).to.eq('12345')

      const employeeId = response.body.id

      cy.request({           //Cleanup - DELETE (Deleta o funcionário via API)
        method: 'DELETE',
        url: `/employees/${employeeId}`
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })


  it('API-CT-002 - Validar cadastro de funcionário', { tags: ['@smoke', '@regression'] }, () => {

    cy.request({                     // Setup - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)
      const employeeId = response.body.id

      cy.request({                   //Teste Principal GET - Valida o retorno da lista de funcionários via API
        method: 'GET',
        url: '/employees'
      }).then((response) => {

        expect(response.status).to.eq(200)

        const employee = response.body.find(employee => employee.id === employeeId)
        const prop = ['isActive', 'name', 'gender', 'cpf', 'birthDay', 'rg', 'role', 'usesEpi', 'caNumber']

        expect(employee).to.have.property('state')
        expect(employee).to.have.property('id')
        expect(employee.state).to.have.property('employee')

        prop.forEach(property => {
          expect(employee.state.employee).to.have.property(property)
        })

        cy.request({           //Cleanup - DELETE (Deleta o funcionário via API)
          method: 'DELETE',
          url: `/employees/${employeeId}`
        }).then((response) => {
          expect(response.status).to.eq(200)
        })

      })
    })
  })


  it('API-CT-003 - Validar edição de funcionário', { tags: '@regression' }, () => {

    cy.request({                     // Setup - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)
      const employeeId = response.body.id

      cy.request({                    // Teste Principal - PUT (Alteração de funcionário via API)
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
        expect(response.body.state.employee.name).to.eq('Teste285')

        cy.request({                  //Cleanup - DELETE (Deleta o funcionário via API)
          method: 'DELETE',
          url: `/employees/${employeeId}`
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })
  })


  it('API-CT-004 - Validar exclusão de funcionário', { tags: '@regression' }, () => {

    cy.request({                     // Setup - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      expect(response.status).to.eq(201)

      const employeeId = response.body.id

      cy.request({                    // Teste Principal - DELETE (Exclusão de funcionário via API)
        method: 'DELETE',
        url: `/employees/${employeeId}`
      }).then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(employeeId)

      })
    })
  })


  it('API-CT-005 - Validar cadastro de funcionário com CPF duplicado', { tags: '@known-issue' }, () => {

    cy.request({                     // Teste Principal - POST 1 (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      const employeeId = response.body.id

      funcionario.state.employee.name = 'Teste892'

      cy.request({                     // Teste Principal - POST 2 (Cadastro de funcionário via API)
        method: 'POST',
        url: '/employees',
        body: funcionario
      }).then((response) => {

        const employeeId2 = response.body.id

        cy.request({           // Cleanup - DELETE (Deleta o funcionário 1 via API)
          method: 'DELETE',
          url: `/employees/${employeeId}`
        }).then((deleteResponse) => {

          expect(deleteResponse.status).to.eq(200)
        })

        cy.request({           // Cleanup - DELETE (Deleta o funcionário 2 via API)
          method: 'DELETE',
          url: `/employees/${employeeId2}`
        }).then((deleteResponse) => {

          expect(deleteResponse.status).to.eq(200)
          expect(response.status).to.eq(400)
        })
      })
    })
  })


  it('API-CT-006 - Validar cadastro de funcionário com CPF inferior a 11 caracteres', { tags: '@known-issue' }, () => {

    funcionario.state.employee.cpf = '12345'

    cy.request({                     // Teste Principal - POST (Cadastro de funcionário via API)
      method: 'POST',
      url: '/employees',
      body: funcionario
    }).then((response) => {

      const employeeId = response.body.id

      cy.request({                   // Cleanup - DELETE (Deleta o funcionário via API)
        method: 'DELETE',
        url: `/employees/${employeeId}`
      }).then((deleteResponse) => {

        expect(deleteResponse.status).to.eq(200)
        expect(response.status).to.eq(400)
      })

    })
  })

})