require("cypress-xpath");
import UserDataPage from '../../pages/userdata_page.js';
import { userDataPage, paymentDataPage, commonPage, searchPage} from "../../constants.js"
const DataPage = new UserDataPage();

Given("A user who is on the hotel booking page", () => {
    DataPage.searchAndBookHotel();
}); 
Given('the user entered valid data with {string} as mail, {string} as nacionality , {string} as name, {string} as surname, {string} as 2o surname, {string} as NIF, {string} as Telf. Number', (email, nacionality, name, ap1, ap2, nif, phone) => {                
    DataPage.enterCredentials(email, nacionality, name, ap1, ap2, nif, phone)
});
Given('the user checked the reward checkbox', () => {
    DataPage.enableCheckBox(userDataPage.CHECKBOX_REWARDS)
});
Given('the user checked the privacy policy checkbox', () => {
    DataPage.enableCheckBox(userDataPage.CHECKBOX_CONDITIONS)
});


When('the user clicks on the access button', () => {
    DataPage.getXpathElement(userDataPage.SUBMIT_BUTTON).click();
});

Then('is redirected to the payment page', () => {
    cy.wait(1000);
    DataPage.checkRedirectionPage(paymentDataPage.PAYMENTDATA_URL);
});


When('the user entered invalid data with {string} as mail, {string} as nacionality , {string} as name, {string} as surname, {string} as 2o surname, {string} as NIF, {string} as Telf. Number', (email, nacionality, name, ap1, ap2, nif, phone) => {                
    DataPage.enterCredentials(email, nacionality, name, ap1, ap2, nif, phone)
});

Then('invalid inputs fields show: {string} is displayed', function (error) {
    DataPage.checkError(error, userDataPage.ERROR_INPUT);
});