import Authentication from '../page/login.page'
import addToCart from '../page/addToCart.page'
import Checkout from '../page/Checkout.page'


describe('Adding an item to cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    

    it('should add more than one items to cart', () => {
        Authentication.login('standard_user', 'secret_sauce')
        cy.get(Authentication.itemNames).should('be.visible')

        addToCart.addMultipleCartItems()
        cy.get(addToCart.cartNumber).should('have.text', 3)
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-ShirtSauce Labs BackpackSauce Labs Bike Light')

        Checkout.Checkout('Rughey', 'Gilzeane', '123456')
        cy.get(Checkout.itemDescriptionName).should('have.text', 'Sauce Labs Bolt T-ShirtSauce Labs BackpackSauce Labs Bike Light')
        cy.get(Checkout.itemPrice).should('have.text', '$15.99$29.99$9.99')

        Checkout.completeCheckOut()
        cy.get( Checkout.completeMessage).should('have.text', 'Checkout: Complete!')
        cy.get(Checkout.thankYouMessage).should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get( Checkout.backHomeButton).should('be.visible')
        cy.get(Checkout.backHomeButton).click()
        cy.url().should('contain', 'inventory')

        addToCart.navigateToCart()
        cy.get(addToCart.cartItemName).should('not.exist')

    })
})
