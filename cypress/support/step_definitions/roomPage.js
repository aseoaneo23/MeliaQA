import {roomDataPage} from '../../constants'
import roomPage from "../../pages/roomSelectionPage"


Given('an user on the room selection page with at least one result', () =>{
     roomPage.searchHotel();
})

Given('an user that sets Melia Rewards in {string}', (isActive) =>{
    cy.get(roomDataPage.MELIA_REWARDS_BTN).should('be.visible').click()  
})

Given('configures a sort by {string}', () =>{
    
})

Given('chooses a currency: {string}', () =>{
    
})

Given('selects a room modality', () =>{
    
})


When('user continues to tariff', () =>{
    
})

Then('the user is redirected to tariff page', () =>{
    
})