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
    ERROR_CITY_INVALID : '.text___O5noN',
    ERROR_DATE_EMPTY : '.c-notification___23xB1'
}

export let cities = {
    Madrid: {name: "Madrid"},
    Barcelona: {name: "Barcelona"},
    ACoruña: {name: "A Coruña"},
    Invalid: {name: "Granja"},
}

export let madridString = cities.Madrid.name
export let barcelonaString = cities.Barcelona.name
export let aCoruna = cities.ACoruña.name
export let invalid = cities.Invalid.name