import { userDataPage, paymentDataPage} from "../constants.js"

class UserDataPage {
    visitPage(url){
        cy.visit(url, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'axios/0.27.2'
            }
        })
    };
    checkRedirection = expectedUrl => cy.url().should('include', expectedUrl);
    getElement(element) {
        const isXpath = element.startsWith('//');
        return (isXpath ? cy.xpath(element).should('be.visible') : cy.get(element).should('be.visible'));
    }
    enterCredentials(field) {
        if (field === 'empty') {
            this.clickButton(userDataPage.SUBMIT_BUTTON);
        } else {
            cy.fixture('userData.json').then((data) => {
                this.getElement(userDataPage.EMAIL_INPUT).clear().type(field === userDataPage.EMAIL_INPUT ? data.invalidUser.EMAIL : data.validUser.EMAIL);
                this.getElement(userDataPage.NACIONALITY_SELECT).select(data.validUser.NACIONALITY_SELECT);
                this.getElement(userDataPage.NAME_INPUT).clear().type(data.validUser.NAME);
                this.getElement(userDataPage.AP1_INPUT).clear().type(data.validUser.AP1);
                this.getElement(userDataPage.AP2_INPUT).clear().type(data.validUser.AP2);
                this.getElement(userDataPage.NIF_INPUT).clear().type(field === userDataPage.NIF_INPUT ? data.invalidUser.NIF : data.validUser.NIF);
                this.getElement(userDataPage.COUNTRY_SELECT).select(date.validUser.NACIONALITY_SELECT);
                this.getElement(userDataPage.POPULATION_INPUT).clear().type(data.validUser.POPULATION);
                this.getElement(userDataPage.PROVINCE_SELECT).select(data.validUser.POPULATION);
                this.getElement(userDataPage.ADDRESS_INPUT).clear().type(data.validUser.ADDRESS_INPUT)
                this.getElement(userDataPage.PHONE_INPUT).clear().type(field === userDataPage.PHONE_INPUT ? data.invalidUser.PHONE : data.validUser.PHONE);
                this.getElement(userDataPage.ZIPCODE_INPUT).clear().type(field === userDataPage.ZIPCODE_INPUT ? data.invalidUser.ZIPCODE : data.validUser.ZIPCODE);
            });
        }
    }
    enableCheckBoxes(...checkboxes) {
        checkboxes.forEach(checkbox => {
            this.getElement(checkbox).check();
        });
    }
    checkError(error){
        const regex = /errortext/g;
        userDataPage.ERROR_INPUT = userDataPage.ERROR_INPUT.replace(regex, error);
        this.getElement(userDataPage.ERROR_INPUT).should('contain', error);
    }

    clickButton(button) {
        this.getElement(button).click({force: true});
    }
    
}
export default UserDataPage;