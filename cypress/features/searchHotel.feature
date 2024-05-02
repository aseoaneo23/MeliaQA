Feature: Hotel search

    As a user I want to search for hotels by location, dates and number of people to find available acommodation options

    Background:
      Given user visit hotel page

    Scenario: Successful search with valid criteria
      When user enter valid search criteria
      Then a list of hotels is shown