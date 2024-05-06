export const searchPage = {
    MELIA_PAGE : 'https://www.melia.com/',
    ACCEPT_COOKIES : '#didomi-notice-agree-button',
    LABEL_SEARCH : '.destination___YiVIM > .c-popup-opener___2WbuX > .wrapper___1qplQ > .button___1vWAZ > .text___715xJ',
    INPUT_SEARCH : '#suggest-input',
    FIRST_OPTION_SEARCH : ':nth-child(1) > .suggestion-text___2xeQh > .title___eYqNg > b',
    FIRST_CALENDAR : ':nth-child(1) > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days',
    SECOND_CALENDAR : ':nth-child(2) > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days',
    BUTTON_SEARCH : '.submit___3burc > .c-button___2XZmD',
    HOTEL_FOUND : ':nth-child(1) > .c-result-cover___3mtgg > .media-wrapper___1oer_ > .c-swiper___1RTdv > .slides___32sgt > .slides-wrapper___2R5Sk > .active___2ZI2Y > .overlay___2cmrI',
    ERROR_CITY_EMPTY : '.content___10xxT',
    ERROR_CITY_INVALID : '.text___O5noN'
}

export let cities = ["Madrid", "Barcelona", "A Coruña", "Granja", ""]

export const userDataPage  = {
    EMAIL_INPUT : "#email",
    NACIONALITY_SELECT : "#nationality",
    NAME_INPUT : "#name",
    AP1_INPUT : "#surname1",
    AP2_INPUT : "#surname2",
    NIF_INPUT : "#nif",
    COUNTRY_SELECT : "#country",
    POPULATION_INPUT : "#city",
    ZIPCODE_INPUT : "#postcode",
    PROVINCE_SELECT : "#province", 
    ADDRESS_INPUT : "#address",
    TELF_INPUT : "#phoneNumber",
    CHECKBOX_REWARDS : "#rewards",
    CHECKBOX_CONDITIONS : "#checkboxConditions",
    RESERVE_BUTTON : "//button[@class='c-button___2XZmD'][contains(.,'Buscar')]",
    TARIFF_BUTTON : ":nth-child(1) > .c-result-cover___3mtgg > .info-wrapper___34DSy > .content-wrapper___2lIR9 > .info___1cfzX > .actions-wrapper___3x3wS > .actions-background-wrapper___2zGgS > .b-wrapper___3CcRc > :nth-child(1) > :nth-child(1) > :nth-child(2) > .c-button___2XZmD",
    SUBMIT_BUTTON : "//button[contains(@type,'submit')]",
    ERROR_INPUT : "//p[@class='error___3B9Tw'][contains(., 'errortext')]",
    USERDATA_URL : "/checkout/step-3",
    TARIFF_URL : "/checkout/step-2"
}

export const commonPage = {
    REJECTCOOKIES : "#didomi-notice-agree-button"
}

export const paymentDataPage = {
    PAYPAL_TAB :  "//li[@class='list-metodos-pago'][contains(.,'Paypal')]",
    CARDNAME_INPUT : "//input[contains(@name,'cardholder')]",
    CARD_INPUT : "//input[@id='pan']",
    MONTHDATE_SELECT : "//select[contains(@name,'month')]",
    YEARDATE_SELECT : "//select[contains(@name,'year')]",
    CVV_INPUT : "//input[contains(@name,'cvv')]",
    SUBMIT_BUTTON : "//button[@type='button'][contains(.,'Confirmar reserva')]",
    PAYMENTDATA_URL : "https://www.meliapayments.com/payments/form"

}