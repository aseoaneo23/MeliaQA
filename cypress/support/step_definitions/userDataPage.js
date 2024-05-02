require("cypress-xpath");
import UserDataPage from '../../pages/userDataPage';
import { userDataPage, paymentDataPage} from "../../constants.js"

const DataPage = new UserDataPage();


Given("A user who is on the hotel booking page", () => {
    DataPage.visitPage('/booking?search={"destination"%3A{"city"%3A"Alicante"%2C"country"%3A"España"%2C"hotel"%3A"Hotel Alicante Gran Sol Affiliated by Meliá"%2C"id"%3A"0312"}%2C"occupation"%3A[{"adults"%3A2}]%2C"calendar"%3A{"dates"%3A[1732060800000%2C1732320000000]%2C"locale"%3A"es"}%2C"hotels"%3A["0312"]%2C"promoCode"%3A{}%2C"blockId"%3Anull}')
    DataPage.clickButton("//button[@class='c-button___2XZmD'][contains(.,'Seleccionar tarifa')]").first();
}); 

Given('the user entered valid credentials', () => {
    DataPage.checkRedirection(userDataPage.USERDATA_URL);
    DataPage.enterCredentials('valid')
});
Given('the user checked the reward option and the privacy policy', () => {
    DataPage.enableCheckBoxes(userDataPage.CHECKBOX_REWARDS, userDataPage.CHECKBOX_CONDITIONS)
});

When('the user clicks on the access button', () => {
    DataPage.clickButton(userDataPage.SUBMIT_BUTTON);
});

Then('the user is redirected to the PaymentPage.', () => {
    DataPage.checkRedirection(userDataPage.PAYMENTDATA_URL);
});

Given('the user entered invalid format {string}', (field) => {                
    DataPage.enterCredentials(field)
});

When('the user clicks on the access button', () => {
    DataPage.clickButton(userDataPage.SUBMIT_BUTTON);
});

Then('invalid inputs fields show a error:  {string}', (err) => {
    DataPage.enterCredentials(err)
});