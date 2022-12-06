class Checkout{

    get CheckoutBtn() {
        return ('#checkout')}

    get FirstName() { 
        return ('#first-name')}

    get LastName() { 
        return ('#last-name')}

    get ZipCode() { 
        return ('#postal-code')}

    get ContinueBtn(){
         return('#continue')}

    get FinishBtn() { 
        return ('#finish')}

    get itemDescriptionName() {
        return ('.inventory_item_name')
    }
    get itemPrice() {
        return ('.inventory_item_price')
    }
    get itemQuantityNumber() {
        return ('.cart_quantity')
    }
  
    get completeMessage() {
        return ('.title')
    }
    get thankYouMessage() {
        return ('.complete-header')
    }
    get backHomeButton() {
        return ('#back-to-products')
    }

    Checkout (FirstName, LastName, ZipCode){
        cy.get(this.CheckoutBtn).should('be.visible')
        cy.get(this.CheckoutBtn).click()
        cy.get(this.FirstName).type(FirstName)
        cy.get(this.LastName).type(LastName)
        cy.get(this.ZipCode).type(ZipCode)
        cy.get(this.ContinueBtn).should('be.visible')
       cy.get(this.ContinueBtn).click()


        
    }
    completeCheckOut() {
        cy.get(this.FinishBtn).should('be.visible')
        cy.get(this.FinishBtn).click()
    }

}
export default new Checkout()