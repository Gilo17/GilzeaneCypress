
import Authentication from '../page/login.page'
import addToCart from '../page/addToCart.page'

describe('Remove Item', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should remove Sauce Labs Bolt T-shirt from the cart', () => {
        Authentication.login('standard_user', 'secret_sauce')
        cy.get(Authentication.itemNames).should('be.visible')

        addToCart.addCart()
        cy.get(addToCart.cartNumber).should('have.text', 1)
        cy.get(addToCart.removeSauceLabBoltButton).should('be.visible')
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-Shirt')

        addToCart.removeItemFromCart()
        cy.get(addToCart.cartItemName).should('not.exist')


    })
    it('should remove Sauce Labs Bolt T-shirt from the product page', () => {
        Authentication.login('standard_user', 'secret_sauce')
        cy.get(Authentication.itemNames).should('be.visible')

        addToCart.removeItemFromProductPage()
        cy.get(addToCart.addCartButton).should('be.visible')

        addToCart.navigateToCart()
        cy.get(addToCart.cartItemName).should('not.exist')

    })
})