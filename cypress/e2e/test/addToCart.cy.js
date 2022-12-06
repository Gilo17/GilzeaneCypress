
import Authentication from '../page/login.page'
import addToCart from '../page/addToCart.page'
import Checkout from '../page/Checkout.page'

describe('Adding an item to cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should add Sauce Labs Bolt T-shirt item to cart', () => {
        Authentication.login('standard_user','secret_sauce')
        cy.get(Authentication.itemNames).should('be.visible')
       

        addToCart.addCart()
        cy.get(addToCart.cartNumber).should('have.text', 1)
        cy.get(addToCart.removeSauceLabBoltButton).should('be.visible')
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-Shirt')

        Checkout.Checkout('Rughey', 'Gilzeane', '123456')
        cy.get(Checkout.itemDescriptionName).should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get(Checkout.itemPrice).should('have.text', '$15.99')

        Checkout.completeCheckOut()
        cy.get(Checkout.completeMessage).should('have.text', 'Checkout: Complete!')
        cy.get(Checkout.thankYouMessage).should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get(Checkout.backHomeButton).should('be.visible')
        cy.get(Checkout.backHomeButton).click()
        cy.url().should('contain', 'inventory')

        addToCart.navigateToCart()
        cy.get(addToCart.cartItemName).should('not.exist')

    })

    
})
