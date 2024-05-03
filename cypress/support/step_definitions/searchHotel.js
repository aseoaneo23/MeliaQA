import { searchPage, cities } from "../../constants"
import homePage from "../../pages/homePage"

Given('user visit hotel page', () => {
    cy.visit(searchPage.MELIA_PAGE, {
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'axios/0.27.2'
        }
    })
    homePage.acceptCookies()
})

When('user enter valid search criteria', () => {
    homePage.selectCity(cities[0])
    homePage.selectDate()
    homePage.clickSearchButton()
})

Then('a list of hotels is shown', () => {
    cy.wait(5000)
    homePage.hotelList()
})

When('user does not enter search criteria', () => {
    homePage.emptyCity(cities[4])
    homePage.clickSearchButton()
})

Then('error message is displayed', () => {
    homePage.emptyCityError()
}) 

When ('user enter invalid city', () => {
    homePage.selectInvalidCity(cities[3])
    homePage.clickSearchButton()
})

Then('second error message is displayed', () => {
    homePage.invalidCityError()
})

When('user enter whitout date', () => {
    homePage.selectCity(cities[0])
    homePage.clickSearchButton()
})

Then('third error message is displayed', () => {
    homePage.emptyDateError()
})