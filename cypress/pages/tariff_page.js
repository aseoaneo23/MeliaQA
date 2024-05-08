import { tariffPage, searchPage, madridString } from "../constants"
import homePage from './homePage'
require('cypress-xpath')

class TariffPage {
elemments = {
    getSelectHotelBtn : () => cy.get(tariffPage.BOOK_THIS_HOTEL_BTN).should('be.visible'),
    verifyRoomPageUrl : () => cy.url().should('contain', 'booking' ),
    getSelectRoomBtn : () => cy.get(tariffPage.SELECT_A_ROOM_BTN).should('be.visible'),
    verifyTariffPageUrl : () => cy.url().should('contain', 'checkout/step-2' ),
    getTariffButton : () => cy.xpath(tariffPage.TARIFF_SELECTION_BTN).should('be.visible'),
    getContinueButton : () => cy.xpath(tariffPage.CONTINUE_ON_CHECKOUT_BTN).should('be.visible'),
    getReturnButton : () => cy.xpath(tariffPage.RETURN_TO_ROOM_BTN).should('be.visible'),
    verifyDataPage : () => cy.url().should('contain', 'checkout/step-3')
}

visitTariffPage = () => {
    homePage.visitPage(searchPage.MELIA_PAGE)
    homePage.selectCityAndDate(madridString)
    homePage.clickOn(searchPage.BUTTON_SEARCH)
    homePage.hotelList()
    this.clickOnHotel()
    this.clickOnRoom()


}

clickOnHotel = () => this.elemments.getSelectHotelBtn().click()

verifyRoomPage = () => this.elemments.verifyRoomPageUrl()

clickOnRoom = () => this.elemments.getSelectRoomBtn().click()


verifyTariffPage = () => this.elemments.verifyTariffPageUrl()

selectATariff = () => this.elemments.getTariffButton().click()

continueWithSelectedTariff = () =>{
    cy.wait(1500)
    this.elemments.getContinueButton().click()
} 

returnToRooms = () => this.elemments.getReturnButton().click()

verifyDataPage = () => this.elemments.verifyDataPage()

}

module.exports = new TariffPage()
