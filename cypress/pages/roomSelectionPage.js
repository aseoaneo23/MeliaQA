import { roomDataPage, cities, searchPage } from '../constants'
import homePage from './homePage'

class roomPage {

    elements = {
        getRewardsButton: () => cy.get(roomDataPage.MELIA_REWARDS_BTN),
        getSortByButton: () => cy.get(roomDataPage.SORT_BY_DROPDOWN_BTN),
        getByLowestButton: () => cy.get(roomDataPage.BY_LOWEST_BTN),
        getByHighestButton: () => cy.get(roomDataPage.BY_HIGHEST_BTN),
        getCurrencyButton: () => cy.get(roomDataPage.CURRENCY_DROPDOWN_BTN),
        getCurrencyInput: () => cy.get(roomDataPage.CURRENCY_INPUT),
        getCurrencyResult: () => cy.get(roomDataPage.CURRENCY_RESULT_BTN),
        getModalityButton: () => cy.get(roomDataPage.ROOM_MODALITY_BTN),
        getContinueToTariffButton: () => cy.get(roomDataPage.CONTINUE_TO_TARIFF_BTN),
        getTriffPageUrl: () => cy.url()
    }

    searchHotel = () => {
        cy.visit(roomDataPage.A_HOTEL_URL, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'axios/0.27.2'
            }
        })
        homePage.acceptCookies();
    }

    clickOnRewardsFilter = (setActive) => {

        if(setActive === 'false'){
            this.elements.getRewardsButton().should('be.visible').click()
        }
        
    }

    setOrderBy = (sortMehtod) => {

        this.elements.getSortByButton().should('be.visible').click()

        if (sortMehtod === 'highest price'){
            this.elements.getByHighestButton().should('be.visible').click()
        } else {
            this.elements.getByLowestButton().should('be.visible').click()
        }
    }

    setCurrency = (currency) => {
        this.elements.getCurrencyButton().should('be.visible').click()
        this.elements.getCurrencyInput().should('be.visible').type(currency)
        this.elements.getCurrencyResult().should('be.visible').click({force:true})
    }

    selectRoomModality = () => this.elements.getModalityButton().should('be.visible').click({force:true})
    
    continueToTariff = () => this.elements.getContinueToTariffButton().should('be.visible').click()

    checkRedirection = () =>{
        this.elements.getTriffPageUrl().should('include', 'checkout')
    }




}

module.exports = new roomPage()