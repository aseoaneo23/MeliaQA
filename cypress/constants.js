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

export const roomDataPage = {
    A_HOTEL_URL : 'https://www.melia.com/es/booking?search=%7B%22destination%22%3A%7B%22city%22%3A%22Madrid%22%2C%22country%22%3A%22Espa%C3%B1a%22%2C%22hotel%22%3A%22Palacio%20de%20los%20Duques%20Gran%20Meli%C3%A1%22%2C%22id%22%3A%222810%22%7D%2C%22occupation%22%3A%5B%7B%22adults%22%3A2%7D%5D%2C%22calendar%22%3A%7B%22dates%22%3A%5B1718841600000%2C1719273600000%5D%2C%22locale%22%3A%22es%22%7D%2C%22hotels%22%3A%5B%222810%22%5D%2C%22promoCode%22%3A%7B%7D%2C%22blockId%22%3Anull%7D' ,
    BOOK_HOTEL_BTN : '.filter-bar-item-toggle___z3xyN > .c-toggle___cHe-6 > .switch___38jXy > label > .toggle-icon___h6pnV' //Temporal mientras Pablo hace selectHotelPage.js
}