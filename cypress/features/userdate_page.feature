Feature: Personal Information Page
    A page where the user fill their personal information.


Background:
    Given A user who is on the hotel booking page


    Scenario Outline: Successfull inputs with valid data 
        Given the user entered valid data with "<EMAIL>" as mail, "<NACIONALITY>" as nacionality , "<NAME>" as name, "<AP1>" as surname, "<AP2>" as 2o surname, "<NIF>" as NIF, "<PHONE>" as Telf. Number
        And the user checked the reward checkbox
        And the user checked the privacy policy checkbox
        When the user clicks on the access button 
        Then is redirected to the payment page
        Examples:
            | EMAIL           | NACIONALITY | NAME  | AP1       | AP2      | NIF        | PHONE      |
            | jorge@gmail.com | ESPAÑA      | Jorge | Fernández | Gonzalez | 34239787E  | 633448944  |

    @focus
    Scenario Outline: Invalid data entered by the user
        When the user entered invalid data with "<EMAIL>" as mail, "<NACIONALITY>" as nacionality , "<NAME>" as name, "<AP1>" as surname, "<AP2>" as 2o surname, "<NIF>" as NIF, "<PHONE>" as Telf. Number
        Then invalid inputs fields show: "<ERROR>" is displayed 

        Examples:
            | EMAIL           | NACIONALITY | NAME  | AP1       | AP2      | NIF      | PHONE     | ERROR                                           |
            | jorgegmailcom   | ESPAÑA      | Jorge | Fernández | Gonzalez | 4920478E | 644556985 | El formato del correo electrónico no es válido. |
            | jorge@gmail.com | ESPAÑA      | Jorge | Fernández | Gonzalez | 4920478E | A45687764 | Número de teléfono incorrecto                   |

