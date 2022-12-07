import Authentication from '../page/login.page'
import Product from '../page/Product.page'
import ProductData from '../data/sort.data'
import addToCart from '../page/addToCart.page'
import Checkout from '../page/Checkout.page'


describe('Sorting items names and prices', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('should sort products from A-Z', () => {
        Authentication.login('standard_user', 'secret_sauce')
        ProductData.products.sort()
        cy.get(addToCart.cartItemName).each(($elem, index) => {
            expect($elem.text()).equal(ProductData.products[index].name)
        })

    })
    it('should sort products from price low to high', () => {
        Authentication.login('standard_user', 'secret_sauce')
        Product.sortProducts(ProductsData.sort['Low to High'])
        ProductData.products.sort((a, b) => a.price - b.price)
        cy.get(Checkout.itemPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${ProductData.products[index].price}`)
        })

    })

})
