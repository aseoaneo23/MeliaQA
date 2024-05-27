import { userDataPage, paymentDataPage, commonPage, searchPage} from "../constants";

class UserDataPage {

    visitPage(url){
        cy.visit(url);
        this.clickButton(commonPage.REJECTCOOKIES);
    };
    checkRedirection = expectedUrl => cy.url().should('include', expectedUrl);
    checkRedirectionPage(expectedUrl){
        cy.origin('https://www.meliapayments.com/', { args: { expectedUrl } }, ({ expectedUrl }) => {
            cy.url().should('contain', expectedUrl);
            console.log(cy.url())
        })}
        
    getElement = element => cy.get(element).first().should('be.visible');
    getXpathElement = element => cy.xpath(element).first().should('be.visible');
    getElementByForAttribute = forValue => cy.get(`label[for=${forValue}]`);
    scroll = scroll => cy.scrollTo(scroll);
    search(){
        this.clickButton(searchPage.LABEL_SEARCH)
        this.getElement(searchPage.INPUT_SEARCH).click().type('vigo').then(() => {
            this.getElement(searchPage.FIRST_OPTION_SEARCH).click();
        })
        this.getElement(searchPage.SECOND_CALENDAR).contains('16').click();
        this.getElement(searchPage.SECOND_CALENDAR).contains('24').click();
        this.clickButton(searchPage.BUTTON_SEARCH)
        this.getXpathElement(userDataPage.RESERVE_BUTTON).click({force:true})

    }
    enterCredentials(email, nacionality, name, ap1, ap2, nif, phone) {
        this.checkRedirection(userDataPage.USERDATA_URL);
        this.getElement(userDataPage.EMAIL_INPUT).type(email);
        this.getElement(userDataPage.NACIONALITY_SELECT).select(nacionality);
        this.getElement(userDataPage.NAME_INPUT).type(name);
        this.getElement(userDataPage.AP1_INPUT).type(ap1);
        this.getElement(userDataPage.TELF_INPUT).type(phone)
        this.getElement(userDataPage.AP2_INPUT).type(ap2);
        this.getElement(userDataPage.NIF_INPUT).type(nif);
    }
    searchAndBookHotel(){
        this.visitPage('/');
        this.search();
        this.getElement(userDataPage.TARIFF_BUTTON).scrollIntoView();
        this.clickButton(userDataPage.TARIFF_BUTTON);
        this.checkRedirection(userDataPage.TARIFF_URL);
        cy.wait(5000);
        this.getElementByForAttribute(userDataPage.MELIA_PAY).click({force: true});
        this.getXpathElement(userDataPage.SUBMIT_BUTTON).click();
    }
    enableCheckBox(checkbox) {
        this.getElement(checkbox).click({force:true});
    }
    checkError(error, errorInput){
        const regex = /errortext/g
        let updatedErrorInput = errorInput.replace(regex, error);
        console.log(updatedErrorInput);
        this.getXpathElement(updatedErrorInput).should('contain', error);
    }

    clickButton(button) {
        this.getElement(button).click({force: true});
    }
    
}
export default UserDataPage;