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
    EMAIL_INPUT : "//input[contains(@name,'email')]",
    NACIONALITY_SELECT : "//select[contains(@name,'nationality')]",
    NAME_INPUT : "//input[@name='name']",
    AP1_INPUT : "//input[contains(@name,'surname1')]",
    AP2_INPUT : "//input[contains(@name,'surname2')]",
    NIF_INPUT : "//input[contains(@name,'nif')]",
    COUNTRY_SELECT : "//select[contains(@name,'country')]",
    POPULATION_INPUT : "//input[contains(@name,'city')]",
    ZIPCODE_INPUT : "//input[contains(@name,'postcode')]",
    PROVINCE_SELECT : "//input[contains(@name,'postcode')]",
    ADDRESS_INPUT : "//input[contains(@name,'address')]",
    TELFPREFIX_SELECT : "//span[contains(@class,'select-wrapper___2t9AO')]",
    TELF_INPUT : "//input[contains(@name,'phoneNumber')]",
    CHECKBOX_REWARDS : "//label[contains(@for,'rewards')]",
    CHECKBOX_CONDITIONS : "//label[contains(@for,'checkboxConditions')]",
    SUBMIT_BUTTON : "//button[@class='c-button___2XZmD'][contains(.,'Continuar')]",
    ERROR_INPUT : "//p[@class='error___3B9Tw'][contains(., 'errortext')]",
    USERDATA_URL : "/checkout/step-3"
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