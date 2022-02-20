
function Email(EmailAddress) {
    const Regex = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/ ;
    return Regex.test(EmailAddress) ;
}

// Cara menggunakan fungsi di atas

if (Email("anisafsp.email.com")) {
    console.log("Email valid");
} else {
    console.log("Email tidak valid") ;
}


/*
const checkEmail = (email) => {
    let regex = new RegExp('[a-z0-9]+@stackabuse.com');
    let testEmails = ["notanemail.com", "workingexample@stackabuse.com", "not_working@stackabuse.org"];
    testEmails.forEach((email) => {
    console.log(regex.test(address))
})
} */