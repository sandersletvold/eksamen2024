function saveBook() {
    $("#titleError").html("");
    $("#authorError").html("");
    $("#releaseYearError").html("");
    $("#ratingError").html("");

    const book = {
        title : $("#title").val(),
        author : $("#author").val(),
        releaseYear : $("#releaseYear").val(),
        rating : $("#rating").val()
    };

    // Regex valideringer for telefonnr, email og fødselsdato.
    // Resten av feltet er kun validert med != null etter eksamensoppgaven.
    const textRegex = /^[A-Za-z]+$/;
    const releaseYearRegex = /^[0-9]{4}$/;
    const ratingRegex = /^[0-9,.]$/;

    let valid = true;

    if (!textRegex.test(book.title)) {
        valid = false;
        $("#titleError").html("Input for title not valid. Only use letters between A-Z");
    }
    if (!textRegex.test(book.author)) {
        valid = false;
        $("#authorError").html("Input for author not valid. Only use letters between A-Z");
    }
    if (!releaseYearRegex.test(book.releaseYear)) {
        valid = false;
        $("#releaseYearError").html("Input for release year not valid. Use a 4 didget number");
    }
    if (!ratingRegex.test(book.rating)) {
        valid = false;
        $("#ratingError").html("Input for rating not valid. Use a number, could be decimals aswell");
    }

    if (valid) {
        $.post("/saveBook", book, function (){
            // Logger i konsollen at brukeren ble sendt til server
            console.log("Book sent from client to server!");

            // Reset av inputfeltene ved gyldig registrering
            $("#title").val("");
            $("#author").val("");
            $("#releaseYear").val("");
            $("#rating").val("");

            // Reset av feilmldfeltene ved gyldig registrering
            $("#titleError").html("");
            $("#authorError").html("");
            $("#releaseYearError").html("");
            $("#ratingError").html("");
        });
    }
}