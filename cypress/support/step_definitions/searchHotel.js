import { searchPage, madridString, invalid, } from "../../constants"
import homePage from "../../pages/homePage"

Given('user visit hotel page', () => {
    homePage.visitPage(searchPage.MELIA_PAGE)
})

When('user enter valid search criteria', () => {
    homePage.selectCityAndDate(madridString)
    homePage.clickOn(searchPage.BUTTON_SEARCH)
})

Then('a list of hotels is shown', () => {
    homePage.hotelList()
})

When('user does not enter search criteria', () => {
    homePage.clickOn(searchPage.BUTTON_SEARCH)
})

Then('error message is displayed', () => {
    homePage.emptyCityError()
}) 

When ('user enter invalid city', () => {
    homePage.selectInvalidCity (invalid)
    homePage.clickOn(searchPage.BUTTON_SEARCH)
})

Then('second error message is displayed', () => {
    homePage.invalidCityError()
})

When('user enter whitout date', () => {
    homePage.selectCity(madridString)
    homePage.clickOn(searchPage.BUTTON_SEARCH)
})

Then('third error message is displayed', () => {
    homePage.emptyDateError()
})