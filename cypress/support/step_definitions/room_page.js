import {roomDataPage} from '../../constants'
import RoomPage from '../../pages/room_selection_page'


Given('an user on the room selection page with at least one result', () =>{
    RoomPage.searchHotel()
})

Given('an user that sets Melia Rewards in {string}', (setActive) =>{
    RoomPage.clickOnRewardsFilter(setActive)
})

Given('configures a sort by {string}', (sortMethod) =>{
    RoomPage.setOrderBy(sortMethod)

})

Given('chooses a currency: {string}', (currency) =>{
    RoomPage.setCurrency(currency)
})

Given('selects a room modality', () =>{
    RoomPage.selectRoomModality()
})


When('user continues to tariff', () =>{
    RoomPage.continueToTariff()
})

Then('the user is redirected to tariff page', () =>{
    RoomPage.checkRedirection()    
})

