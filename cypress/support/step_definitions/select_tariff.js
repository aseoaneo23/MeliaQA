import tariffPage from "../../pages/tariff_page"


Given('an user who has selected a room and modality', () => {
    tariffPage.visitTariffPage()
})

Given('an user on the tariff page', () => {
    tariffPage.verifyTariffPage()
})

Given('the user selects a tariff', () => {
    tariffPage.selectATariff()
})

When('the user continues', () => {
    tariffPage.continueWithSelectedTariff()
})

When('user decides to return', () => {
    tariffPage.returnToRooms()
})


Then('the user is redirected to user data page', () => {
    tariffPage.verifyDataPage()
})

Then('the user is redirected to room page', () => {
    tariffPage.verifyRoomPage()
})