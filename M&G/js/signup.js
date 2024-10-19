const userFullName = document.getElementById("userFullName");
const userEmail = document.getElementById("userEmail")
const userPassword = document.getElementById("userPassword")
const userConPassword = document.getElementById("userConPassword")
const submitSignup = document.getElementById("submitSignup") ///Sign Up Button
const signupForm = document.getElementById("signupForm") /// Global Form
const formControl = document.getElementsByClassName("form-Control")
const error = document.querySelector(".error") /// Span Error Message


signupForm.onsubmit = (e) => {
    e.preventDefault()
    checkInputs()
}

///////////////////////////////////////////
//////////////// Name /////////////////////
////////////////////////////////////////////
userFullName.addEventListener("change", (e) => {
    e.preventDefault()
    const correcticon = document.querySelector(".namecorrectIcon")
    const errorIcon = document.querySelector(".nameerrorIcon")


    let nameValue = userFullName.value

    const nameRegEx = new RegExp(/^[^\W\s][\w]{3,}(\s)[\w]{3,}(\s?[\w]{3,}?)*[^\W\s]$/, "gm")
    const SpecialCh = new RegExp(/^[\W]$/, "gm")

    // 

    if (nameValue.match(nameRegEx)) {

        console.log("name matched")
        setSuccessFor(userFullName)
        correcticon.style.display = "flex"
    } else if (nameValue.match(SpecialCh)) {
        setErrorFor(userFullName, "Cannot Write Special Character In User Name ")
        errorIcon.style.display = "flex"
    } else {
        setErrorFor(userFullName, "Username cannot be Blank")
        errorIcon.style.display = "flex"
    }
})

userEmail.addEventListener("change", (e) => {
    e.preventDefault()
    const correcticon = document.querySelector(".emailcorrectIcon")
    const errorIcon = document.querySelector(".emailerrorIcon")


    let emailValue = JSON.stringify(userEmail.value)
    const emailRegEx = new RegExp(/\w+([\.-]?\w+)*@\w+(\.)(com|net|edu|org)\.(eg)/, 'gm')

    if (emailValue.match(emailRegEx)) {
        setSuccessFor(userEmail)
        correcticon.style.display = "flex"
    } else {
        setErrorFor(userEmail, "Username cannot be Blank")
        errorIcon.style.display = "flex"
    }
})
///////////////////////////////

// 
function checkInputs() {
    ///Get the user input
    const nameValue = userFullName.value.trim()
    const passwordValue = userPassword.value.trim()
    const confirmValue = userConPassword.value.trim()

    ///////////////////////
    //////// Name Value ////
    ////////////////////////

    ///////////////////////
    //////// Email Address Value ////
    ////////////////////////


}

function setErrorFor(input, message) {
    error.innerHTML = message
    input.classList.add("failed")

}


function setSuccessFor(input) {
    const inputclasslist = input.classList

    for (let inputclass of inputclasslist) {
        if (inputclass == "failed") {
            input.classList.remove("failed")

            error.innerHTML = ""
            input.classList.add("success")

        }

    }
    input.classList.add("success")



}