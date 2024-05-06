import { searchPage } from "../constants"

class homePage {

    elements = {
        labelSearch : () => cy.get(searchPage.LABEL_SEARCH),
        inputSearch : () => cy.get(searchPage.INPUT_SEARCH),
        firstOptionSearch : () => cy.get(searchPage.FIRST_OPTION_SEARCH),
        dateOne : () => cy.get(searchPage.FIRST_CALENDAR),
        dateTwo : () => cy.get(searchPage.SECOND_CALENDAR),
        hotelFound : () => cy.get(searchPage.HOTEL_FOUND),
        errorCityEmpty : () => cy.get(searchPage.ERROR_CITY_EMPTY),
        errorCityInvalid : () => cy.get(searchPage.ERROR_CITY_INVALID),
        errorDateEmpty : () => cy.get(searchPage.ERROR_DATE_EMPTY)
    }

    visitPage (page) {
        cy.visit(page, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'axios/0.27.2'
            }
        })
        this.clickOn(searchPage.ACCEPT_COOKIES)
    }
    
    selectCity (city) {
        this.elements.labelSearch().should('be.visible').click()
        this.elements.inputSearch().should('be.visible').type(city, { parseSpecialCharSequences: false })
        this.elements.firstOptionSearch().should('be.visible').click()
        }

     
    selectDate () {
        this.elements.dateTwo().should('be.visible').contains('10').click()
        this.elements.dateTwo().should('be.visible').contains('15').click()
    }

    selectCityAndDate (city) {
        this.selectCity(city, { parseSpecialCharSequences: false })
        this.selectDate()
    }

    hotelList () {
        cy.wait(5000)
        this.elements.hotelFound().should('be.visible')
    }

    selectInvalidCity (city) {
        this.elements.labelSearch().should('be.visible').click()
        this.elements.inputSearch().should('be.visible').type(city)
    }
    
    emptyCityError () {
        this.elements.errorCityEmpty().contains('Introduce un hotel')
    }

    invalidCityError () {
        this.elements.errorCityInvalid().should('be.visible').contains('Lo sentimos, nuestro sistema no reconoce este nombre')
    }

    emptyDateError () {
        this.elements.errorDateEmpty().should('be.visible').contains('Elige fechas de entrada y salida para iniciar la búsqueda')
    }

    clickOn (button) {
        cy.get(button).should('be.visible').click()
    }
}

module.exports = new homePage();