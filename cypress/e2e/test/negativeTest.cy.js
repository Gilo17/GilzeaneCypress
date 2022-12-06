import Authentication from '../page/login.page'


describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
      })

it('Should not login with a invalid password', () => {
    Authentication.login('standard_user','secret_sauc')
    cy.get(Authentication.errorMessage).should('be.visible')
   

   
}) 
})

