
import Authentication from '../page/login.page'


describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        Authentication.login('standard_user','secret_sauce')
        cy.get(Authentication.itemNames).should('be.visible')
       

       
    })
})