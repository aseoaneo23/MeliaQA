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
        errorCityInvalid : () => cy.get(searchPage.ERROR_CITY_INVALID),
        errorDateEmpty : () => cy.get(searchPage.ERROR_DATE_EMPTY)
    }

    acceptCookies() {
        this.elements.cookies().should('be.visible').click()
    }  

    selectCity (city) {
        this.elements.labelSearch().should('be.visible').click()
        this.elements.inputSearch().should('be.visible').type(city)
        this.elements.firstOptionSearch().should('be.visible').click()
        }

    selectDate () {
        this.elements.dateTwo().should('be.visible').contains('10').click()
        this.elements.dateTwo().should('be.visible').contains('15').click()
    }

    clickSearchButton () {
        this.elements.buttonSearch().click()
    }

    hotelList () {
        this.elements.hotelFound().should('be.visible')
    }

    emptyCity (city) {
        this.elements.labelSearch().should('be.visible').click() 
        if (city !== "") {
            this.elements.inputSearch().clear().type(city).then(() => {
                this.elements.firstOptionSearch().should('be.visible').click({force:true})
            })
        }
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
}


module.exports = new homePage();