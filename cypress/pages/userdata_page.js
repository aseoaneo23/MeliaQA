import { userDataPage, paymentDataPage, commonPage, searchPage} from "../constants";

class UserDataPage {

    visitPage(url){
        cy.visit(url);
        this.clickButton(commonPage.REJECTCOOKIES);
    };
    checkRedirection = expectedUrl => cy.url().should('include', expectedUrl);
    getElement = element => cy.get(element).first().should('be.visible');
    getXpathElement = element => cy.xpath(element).first().should('be.visible');

    scroll = scroll => cy.scrollTo(scroll);
    search(){
        this.clickButton(searchPage.LABEL_SEARCH)
        this.getElement(searchPage.INPUT_SEARCH).click().type('coruña').then(() => {
            this.getElement(searchPage.FIRST_OPTION_SEARCH).click();
        })
        this.getElement(searchPage.FIRST_CALENDAR).contains('23').click();
        this.getElement(searchPage.FIRST_CALENDAR).contains('28').click();
        this.clickButton(searchPage.BUTTON_SEARCH)
        this.getXpathElement(userDataPage.RESERVE_BUTTON).click({force:true})

    }
    enterCredentials(email, nacionality, name, ap1, ap2, nif, province, zipcode, phone) {
        this.checkRedirection(userDataPage.USERDATA_URL);
        this.getElement(userDataPage.EMAIL_INPUT).type(email);
        this.getElement(userDataPage.NACIONALITY_SELECT).select(nacionality);
        this.getElement(userDataPage.NAME_INPUT).type(name);
        this.getElement(userDataPage.AP1_INPUT).type(ap1);
        this.getElement(userDataPage.AP2_INPUT).type(ap2);
        this.getElement(userDataPage.NIF_INPUT).type(nif);
        this.getElement(userDataPage.COUNTRY_SELECT).select(nacionality);
        this.getElement(userDataPage.POPULATION_INPUT).type(province);
        this.getElement(userDataPage.ZIPCODE_INPUT).type(zipcode);
        this.getElement(userDataPage.PROVINCE_SELECT).select(province);
        this.getElement(userDataPage.TELF_INPUT).type(phone);
        this.getElement(userDataPage.ADDRESS_INPUT).type(province);
    }
    searchAndBookHotel(){
        this.visitPage('/');
        this.search()
        this.getElement(userDataPage.TARIFF_BUTTON).scrollIntoView();
        this.clickButton(userDataPage.TARIFF_BUTTON);
        this.checkRedirection(userDataPage.TARIFF_URL);
        this.getXpathElement(userDataPage.SUBMIT_BUTTON).click();
    }
    enableCheckBox(checkbox) {
        this.getElement(checkbox).click({force:true})
    }
    checkError(error){
        const regex = /errortext/g
        userDataPage.ERROR_INPUT = (userDataPage.ERROR_INPUT).replace(regex, error)
        console.log(userDataPage.ERROR_INPUT)
        this.getXpathElement(userDataPage.ERROR_INPUT).should('contain', error)
    }

    clickButton(button) {
        this.getElement(button).click({force: true});
    }
    
}
export default UserDataPage;