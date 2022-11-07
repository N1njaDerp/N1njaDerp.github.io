function isValid() {
    if (firstName() && lastName() && email() && phone() && userName() && passWord() && addRess() && ciTy() &&zip())
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastName=false;

    //2) read value from HTML
    var lastName = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastName==="null" || lastName==="" || lastName.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastName.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastName = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastName);
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

Phone.addEventListener('blur', phone, false);
function phone(){
    //1) Create variable
    var validPhone=false;

    //2) read value from HTML
     	
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    //3) Do validation
    if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="") {
        errorMessages += "<p>Invalid Phone Number</p>";
        console.log("Phone Number invalid")
    }   else {
            validPhone = true;
            console.log("Phone Number valid")
    }

    //4) Send error message to HTML
    document.getElementById("phone").innerHTML = errorMessages;

    //5) return status of each field
    return (validPhone);
};
UserName.addEventListener('blur', userName, false);
function userName(){
    //1) Create variable
    var validUserName=false;

    //2) read value from HTML
    var userName = document.getElementById("UserName").value;
    var errorMessages = "";

    //3) Do validation
    if (userName==="null" || userName==="" || userName.length > 12 ) {
        errorMessages += "<p>Username is required and cannot be greater than 12 characters</p>";
        console.log("Username invalid")
        } else {
                validUserName = true;
                console.log("Username valid")
        };

    //4) Send error message to HTML
    document.getElementById("uname").innerHTML = errorMessages;

    //5) return status of each field
    return (validUserName);
};
PassWord.addEventListener('blur', passWord, false);
function passWord(){
    //1) Create variable
    var validPassWord=false;

    //2) read value from HTML
    var passWord = document.getElementById("PassWord").value;
    var errorMessages = "";

    //3) Do validation
    if (passWord==="null" || passWord==="" || passWord.length > 7 ) {
        errorMessages += "<p>Password is required and cannot be greater than 7 characters</p>";
        console.log("Password invalid")
        } else {
                validPassWord = true;
                console.log("Password valid")
        };

    //4) Send error message to HTML
    document.getElementById("pswd").innerHTML = errorMessages;

    //5) return status of each field
    return (validPassWord);
};

AddRess.addEventListener('blur', addRess, false);
function addRess(){
    //1) Create variable
    var validAddRess=false;

    //2) read value from HTML
    var addRess = document.getElementById("AddRess").value;
    var errorMessages = "";

    //3) Do validation
    if (addRess==="null" || addRess==="" ) {
        errorMessages += "<p>Address is required</p>";
        console.log("Address invalid")
        } else {
                validAddRess = true;
                console.log("Address valid")
        };

    //4) Send error message to HTML
    document.getElementById("adrs").innerHTML = errorMessages;

    //5) return status of each field
    return (validAddRess);
};

CiTy.addEventListener('blur', ciTy, false);
function ciTy(){
    //1) Create variable
    var validCiTy=false;

    //2) read value from HTML
    var ciTy = document.getElementById("CiTy").value;
    var errorMessages = "";

    //3) Do validation
    if (ciTy==="null" || ciTy==="" ) {
        errorMessages += "<p>City is required</p>";
        console.log("City invalid")
        } else {
                validCiTy = true;
                console.log("City valid")
        };

    //4) Send error message to HTML
    document.getElementById("city").innerHTML = errorMessages;

    //5) return status of each field
    return (validCiTy);
};


    

Zip.addEventListener('blur', zip, false);
Zip.addEventListener('blur', country, false);
function zip(){
    var zipVal = document.getElementById("Zip").value;
    var errorMessages = "";
    var validZip = false;
    var country = document.getElementById("country").value;
    if (country === "USA"){
        if (zipVal==="null" || zipVal=="" || zipVal.length > 5){
            errorMessages += "<p>Zip is invalid</p>";
            console.log("Zip invalid")
        } else {
            validZip = true;
            console.log("Zip valid")
        }
    } else {
        validZip = true;
        console.log("Zip valid")
        }
    document.getElementById("Zip").innerHTML = errorMessages;

    return (validZip);
    
};