// Task 1 and 2
function signUp() {
    $("#createUserMessage").html("");
    $("#firstnameError").html("");
    $("#surnameError").html("");
    $("#emailError").html("");
    $("#phoneNumberError").html("");
    $("#birthDateError").html("");
    $("#passwordError").html("");

    const user = {
        firstname : $("#firstname").val(),
        surname : $("#surname").val(),
        phoneNumber : $("#phoneNumber").val(),
        email : $("#email").val(),
        birthDate : $("#birthDate").val(),
        password : $("#password").val(),
    };
    const nameRegex = /^[a-zA-Z]{2,20}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneNumberRegex = /^[0-9]{8}$/;

    let validUser = true;

    if (!nameRegex.test(user.firstname)) {
        validUser = false;
        $("#firstnameError").html("Invalid input for firstname");
    }
    if (!nameRegex.test(user.surname)) {
        validUser = false;
        $("#surnameError").html("Invalid input for surname");
    }
    if (!emailRegex.test(user.email)) {
        validUser = false;
        $("#emailError").html("Invalid input for email");
    }
    if (!phoneNumberRegex.test(user.phoneNumber)) {
        validUser = false;
        $("#phoneNumberError").html("Invalid input for phone number");
    }
    if (user.birthDate == null) {
        validUser = false;
        $("#birthDateError").html("Invalid input for birthdate");
    }
    if (user.password == null) {
        validUser = false;
        $("#passwordError").html("Invalid input for birthdate");
    }

    if (validUser) {
        $.post("/saveUser", user, function (){
            $("#createUserMessage").html("User created successfully");
            $("#firstname").val("");
            $("#surname").val("");
            $("#email").val("");
            $("#phoneNumber").val("");
            $("#birthDate").val("");
            $("#password").val("");
            console.log(user);
        });
    }
}

function logIn() {
    const user = {
        email : $("#logInEmail").val(),
        password : $("#logInPassword").val()
    };

    $.get("/logIn", user, function (OK){
        if (OK) {
            window.location.href = 'books.html';
            $("#logInEmail").val("");
            $("#logInPassword").val("");
        } else {
            $("#logInMessage").html("Wrong email or password");
            $("#logInEmail").val("");
            $("#logInPassword").val("");
        }
    });
}