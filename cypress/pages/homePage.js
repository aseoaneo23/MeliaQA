import { searchPage } from "../constants"

class homePage {

    elements = {
        cookies : () => cy.get(searchPage.ACCEPT_COOKIES),
        labelSearch : () => cy.get(searchPage.LABEL_SEARCH),
        inputSearch : () => cy.get(searchPage.INPUT_SEARCH),
        firstOptionSearch : () => cy.get(searchPage.FIRST_OPTION_SEARCH),
        dateOne : () => cy.get(searchPage.FIRST_CALENDAR),
        dateTwo : () => cy.get(searchPage.SECOND_CALENDAR),
        buttonSearch : () => cy.get(searchPage.BUTTON_SEARCH),
        hotelFound : () => cy.get(searchPage.HOTEL_FOUND),
        errorCityEmpty : () => cy.get(searchPage.ERROR_CITY_EMPTY),
        errorCityInvalid : () => cy.get(searchPage.ERROR_CITY_INVALID)
    }

    acceptCookies() {
        this.elements.cookies().should('be.visible').click()
    }  

    selectCity (city) {
        this.elements.labelSearch().should('be.visible').click()
        this.elements.inputSearch().type(city).then(() => {
            this.elements.firstOptionSearch().should('be.visible').click()
        })
    }

    selectDate () {
        this.elements.dateTwo().should('be.visible').contains('20').click({force:true})
        this.elements.dateTwo().should('be.visible').contains('25').click({force:true})
    }

    clickSearchButton () {
        this.elements.buttonSearch().click()
    }

    hotelList () {
        this.elements.hotelFound().should('be.visible')
    }
}

module.exports = new homePage(); 