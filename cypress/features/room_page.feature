Feature: choose room and modality for a booking

We must let users choose a room and a modality for their bookings

Background: 
    Given an user on the room selection page with at least one result

Scenario Outline: The user uses filters to choose a room and a modality, and continues
    Given an user that sets Melia Rewards in "<setActive>"
    And configures a sort by "<sortMethod>"
    And chooses a currency: "<currency>"
    And selects a room modality 
    When user continues to tariff
    Then the user is redirected to tariff page

Examples: 

| setActive | sortMethod    | currency |
| true      | lowest price  | USD      |
| false     | highest price | EUR      |
| true      | lowest price  | GBP      |
