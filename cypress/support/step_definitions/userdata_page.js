require("cypress-xpath");
import UserDataPage from '../../pages/userdata_page.js';
import { userDataPage, paymentDataPage, commonPage, searchPage} from "../../constants.js"
const DataPage = new UserDataPage();

Given("A user who is on the hotel booking page", () => {
    DataPage.searchAndBookHotel();
}); 
Given('the user entered valid data with {string} as mail, {string} as nacionality , {string} as name, {string} as surname, {string} as 2o surname, {string} as NIF, {string} as ZipCode, {string} as Telf. Number, {string} as province', (email, nacionality, name, ap1, ap2, nif, zipcode, phone, province) => {                
    DataPage.enterCredentials(email, nacionality, name, ap1, ap2, nif, province, zipcode, phone)
});
Given('the user checked the reward checkbox', () => {
    DataPage.getElement(userDataPage.CHECKBOX_REWARDS).click({force:true})
});
Given('the user checked the privacy policy checkbox', () => {
    DataPage.getElement(userDataPage.CHECKBOX_CONDITIONS).click({force:true})
});


When('the user clicks on the access button', () => {
    DataPage.getXpathElement(userDataPage.SUBMIT_BUTTON).click();
});

Then('is redirected to the payment page', () => {
    DataPage.checkRedirection(paymentDataPage.PAYMENTDATA_URL);
});


When('the user entered invalid data with {string} as mail, {string} as nacionality , {string} as name, {string} as surname, {string} as 2o surname, {string} as NIF, {string} as ZipCode, {string} as Telf. Number, {string} as province', (email, nacionality, name, ap1, ap2, nif, zipcode, phone, province) => {                
    DataPage.enterCredentials(email, nacionality, name, ap1, ap2, nif, province, zipcode, phone)
});

Then('invalid inputs fields show a error: {string}', (err) => {
    DataPage.checkError(err);
});