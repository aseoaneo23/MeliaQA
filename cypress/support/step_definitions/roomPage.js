import {roomDataPage} from '../../constants'
import roomPage from '../../pages/roomSelectionPage'


Given('an user on the room selection page with at least one result', () =>{
     roomPage.searchHotel()
})

Given('an user that sets Melia Rewards in {string}', (setActive) =>{
    roomPage.clickOnRewardsFilter(setActive)
})

Given('configures a sort by {string}', (sortMethod) =>{
    roomPage.setOrderBy(sortMethod)

})

Given('chooses a currency: {string}', (currency) =>{
    roomPage.setCurrency(currency)
})

Given('selects a room modality', () =>{
    roomPage.selectRoomModality()
})


When('user continues to tariff', () =>{
    roomPage.continueToTariff()
})

Then('the user is redirected to tariff page', () =>{
    roomPage.checkRedirection()    
})

