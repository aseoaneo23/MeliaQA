import { roomDataPage, cities, searchPage } from '../constants'
import homePage from './homePage'

class roomPage {

    elements = {

    }

    searchHotel = () => {
        cy.visit(roomDataPage.A_HOTEL_URL, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'axios/0.27.2'
            }
        })
        homePage.acceptCookies();
        
         //Temporal mientras Pablo hace selectHotelPage.js
    }

    clickOnRewardsFilter = (setActive) => {

        if(setActive === 'true'){
            cy.get(roomDataPage.MELIA_REWARDS_BTN).should('be.visible').click()
        }
        
    }





}

module.exports = new roomPage()