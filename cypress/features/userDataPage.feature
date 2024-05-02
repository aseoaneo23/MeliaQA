Feature: User Data Fill Page
    A page where the user fill the required inputs to book a room on the wesite.


Background:
    Given A user who is on the hotel booking page

    Scenario: Successfull inputs with valid data 
        Given the user entered valid credentials
        And the user checked the reward option and the privacy policy
        When the user clicks on the access button 
        Then the user is redirected to the PaymentPage.


    Scenario Outline: Invalid data entered by the user
        Given the user entered invalid format "<FIELD>"
        When the user clicks on the access button 
        Then invalid inputs fields show a error: "<ERROR>"

        Examples:
            | FIELD   | ERROR                                               |
            | email   | El formato del correo electrónico no es válido.     |
            | zipcode | El formato del código postal no es válido.          |
            | number  | Número de teléfono incorrecto                       |
            | nif     | El formato del documento de identidad no es válido. |
            | empty   | Campo requerido                                     |

