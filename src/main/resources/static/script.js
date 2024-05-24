// Oppgave 2
function saveUser() {
    $("#firstnameError").html("");
    $("#lastnameError").html("");
    $("#dateOfBirthError").html("");
    $("#phoneNumberError").html("");
    $("#emailError").html("");
    $("#passwordError").html("");

    const user = {
        firstname : $("#firstname").val(),
        lastname : $("#lastname").val(),
        dateOfBirth : $("#dateOfBirth").val(),
        phoneNumber : $("#phoneNumber").val(),
        email : $("#email").val(),
        password : $("#password").val()
    };

    // Regex valideringer for telefonnr, email og fødselsdato.
    // Resten av feltet er kun validert med != null etter eksamensoppgaven.
    const phoneNumberRegex = /^[0-9]{8}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const fodselsdatoRegex = /^[0-9]{8}$/;

    let valid = true;

    if (user.firstname == null) {
        valid = false;
        $("#firstnameError").html("Input for firstname not valid. Can not be null");
    }
    if (user.lastname == null) {
        valid = false;
        $("#lastnameError").html("Input for lastname not valid. Can not be null");
    }
    if (!fodselsdatoRegex.test(user.dateOfBirth) || user.dateOfBirth > 20060524) {
        valid = false;
        $("#dateOfBirthError").html("Input for date of birth not valid. Please use YEAR/MONTH/DATE format without .");
    }
    if (!phoneNumberRegex.test(user.phoneNumber)) {
        valid = false;
        $("#phoneNumberError").html("Input for phone number not valid. Make sure to only use numbers with a length of 8 digits");
    }
    if (!emailRegex.test(user.email)) {
        valid = false;
        $("#emailError").html("Input for email not valid. Make sure to use a real email with . and @");
    }
    if (user.password == null) {
        valid = false;
        $("#passwordError").html("Input for password not valid. Can not be null");
    }

    if (valid) {
        $.post("/saveUser", user, function (){
            // Logger i konsollen at brukeren ble sendt til server
            console.log("User sent from client to server!");

            // Reset av inputfeltene ved gyldig registrering
            $("#firstname").val("");
            $("#lastname").val("");
            $("#dateOfBirth").val("");
            $("#phoneNumber").val("");
            $("#email").val("");
            $("#password").val("");

            // Reset av feilmldfeltene ved gyldig registrering
            $("#firstnameError").html("");
            $("#lastnameError").html("");
            $("#dateOfBirthError").html("");
            $("#phoneNumberError").html("");
            $("#emailError").html("");
            $("#passwordError").html("");
        });
    }
}

function login() {
    const loginInfo = {
        lastname : $("#lastnameLogin").val(),
        password : $("#passwordLogin").val()
    };
}