const buttonSubmit = document.querySelector("button[type= 'submit']");
const inputs = document.querySelectorAll("input");

buttonSubmit.addEventListener("click", e => {
    e.preventDefault();
    inputs.forEach(input => {
        if (input.value) {
            input.parentElement.classList.remove("error");
        }
        else {
            input.parentElement.classList.add("error");
        }
        if (validateEmail(inputs[2].value)) {
            inputs[2].parentElement.classList.remove("error");
        } else inputs[2].parentElement.classList.add("error");
    }
    )
})

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

