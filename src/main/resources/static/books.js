function saveBook() {
    $("#saveBookMessage").html("");
    $("#ISBNerror").html("");
    $("#titleError").html("");
    $("#authorError").html("");
    $("#releaseYearError").html("");
    $("#ratingError").html("");

    const book = {
        ISBN : $("#ISBN").val(),
        title : $("#title").val(),
        author : $("#author").val(),
        releaseYear : $("#releaseYear").val(),
        rating : $("#rating").val()
    };

    const textRegex = /^[a-zA-Z]{2,20}$/;
    const releaseYearRegex = /^[0-9]{4}$/;

    let validBook = true;

    if (book.ISBN == null) {
        validBook = false;
        $("#ISBNerror").html("Invalid input for ISBN");
    }
    if (book.rating == null) {
        validBook = false;
        $("#ratingError").html("Invalid input for rating");
    }
    if (!textRegex.test(book.title)) {
        validBook = false;
        $("#titleError").html("Invalid input for title");
    }
    if (!textRegex.test(book.author)) {
        validBook = false;
        $("#authorError").html("Invalid input for author");
    }
    if (!releaseYearRegex.test(book.releaseYear)) {
        validBook = false;
        $("#releaseYearError").html("Invalid input for release year");
    }

    if (validBook) {
        $.post("/saveBook", book, function (){
            $("#saveBookMessage").html("Request to save the book was sent to server");
            $("#ISBN").val("");
            $("#title").val("");
            $("#author").val("");
            $("#releaseYear").val("");
            $("#rating").val("");
            console.log(book);
        });
    }
}

function logOut() {
    $.get("/logOut", function (OK){
        if (OK) {
            window.location.href = 'index.html';
            alert("Log out successfull!")
        }
    });
}