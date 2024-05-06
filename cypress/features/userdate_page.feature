Feature: User Data Fill Page
    A page where the user fill the required inputs to book a room on the wesite.


Background:
    Given A user who is on the hotel booking page

    @focus
    Scenario Outline: Successfull inputs with valid data 
        Given the user entered valid data with "<EMAIL>" as mail, "<NACIONALITY>" as nacionality , "<NAME>" as name, "<AP1>" as surname, "<AP2>" as 2o surname, "<NIF>" as NIF, "<ZIPCODE>" as ZipCode, "<PHONE>" as Telf. Number, "<PROVINCE>" as province
        And the user checked the reward checkbox
        And the user checked the privacy policy checkbox
        When the user clicks on the access button 
        Then is redirected to the payment page
        Examples:
            | EMAIL           | NACIONALITY | NAME  | AP1       | AP2      | NIF        | ZIPCODE | PROVINCE  | PHONEPREFIX | PHONE      |
            | jorge@gmail.com | ESPAÑA      | Jorge | Fernández | Gonzalez | 34239787E  | 15000   | LA CORUÑA | +34         | 633448944  |

    Scenario Outline: Invalid data entered by the user
        When the user entered invalid data with "<EMAIL>" as mail, "<NACIONALITY>" as nacionality , "<NAME>" as name, "<AP1>" as surname, "<AP2>" as 2o surname, "<NIF>" as NIF, "<ZIPCODE>" as ZipCode, "<PHONE>" as Telf. Number, "<PROVINCE>" as province 
        Then invalid inputs fields show a error: "<ERROR>"

        Examples:
            | EMAIL           | NACIONALITY | NAME  | AP1       | AP2        | NIF           | ZIPCODE | PROVINCE  | PHONE       | ERROR                                               |
            | jorgegmailcom   | ESPAÑA      | Jorge | Fernández | Gonzalez   | 4920478E      | 15001   | LA CORUÑA | 644556985   | El formato del correo electrónico no es válido.     |
            | jorge@gmail.com | ESPAÑA      | Jorge | Fernández | Gonzalez   | 4920478E      | 15001   | LA CORUÑA | A4568776452 | Número de teléfono incorrecto                       |
            | jorge@gmail.com | ESPAÑA      | Jorge | Fernández | Gonzalez   | 3423978232A7E | 15001   | LA CORUÑA | 644556985   | El formato del documento de identidad no es válido. |
            | empty           | ESPAÑA      | Jorge | Fernández | Gonzalez   | 3423978232A7E | empty   | LA CORUÑA | empty       | Campo requerido                                     |
            | jorge@gmailcom  | ESPAÑA      | Jorge | Fernández | Gonzalez   | 4920478E      | ABCSDE  | LA CORUÑA | 644556985   | El formato del código postal no es válido.          |


