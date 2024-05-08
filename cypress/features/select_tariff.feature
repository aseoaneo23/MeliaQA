Feature: tariff selection

We must let users select an available tariff

Background:
    Given an user who has selected a room and modality

Scenario: the tariff selection is completed
    Given an user on the tariff page
    And the user selects a tariff
    When the user continues 
    Then the user is redirected to user data page

Scenario: the tariff selection isn't completed because user returns to room page
    Given an user on the tariff page
    When user decides to return 
    Then the user is redirected to room page