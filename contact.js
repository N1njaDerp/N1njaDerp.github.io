function isValid() {
    if (name() && email())
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

Name.addEventListener('blur', name, false);
function name(){
    //1) Create variable
    var validname=false;

    //2) read value from HTML
    var name = document.getElementById("Name").value;
    var errorMessages = "";

    //3) Do validation
    if (name==="null" || name==="" || name.length > 20 ) {
        errorMessages += "<p>The name field is required and cannot be greater than 20 characters</p>";
        console.log("Name invalid — length")
        } else if (name.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Name invalid — bad characters")
        } else {
                validname = true;
                console.log("Name valid")
        };

    //4) Send error message to HTML
    document.getElementById("name").innerHTML = errorMessages;

    //5) return status of each field
    return (validname);
};

Email.addEventListener('blur', email, false);
function email(){
    //1) Create variable
    var validEmail=false;

    //2) read value from HTML
     	
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    //3) Do validation
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        errorMessages += "<p>Invalid Email</p>";
        console.log("Email invalid")
        } else {
                validEmail = true;
                console.log("Email valid")
        };

    //4) Send error message to HTML
    document.getElementById("email").innerHTML = errorMessages;

    //5) return status of each field
    return (validEmail);
};