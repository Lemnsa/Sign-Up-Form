function validateForm (pass, old) {
    return pass === old;
}

const password = document.getElementById("password");
const oldPassword = document.getElementById("reppass");
const warningP = document.createElement('span');
const btn = document.querySelector("button");
const inputContainer = document.querySelector("#form-container p:nth-child(6)");

btn.setAttribute("type", "submit");
const warningText = "*Passwords do not match";

warningP.setAttribute("style", "position:relative;")
warningP.setAttribute("style", "color:red; font-size: 12px; font-family: sans-serif; position:absolute; bottom:20px; left:45px;");
warningP.append( warningText);

btn.addEventListener("click", () => {
    let result = validateForm(password.value, oldPassword.value);
    if(result !== true) {
        btn.setAttribute("type", "button");
        password.classList.add("invalid");
        oldPassword.classList.add("invalid");
        inputContainer.appendChild(warningP);
    }
});