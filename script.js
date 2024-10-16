const formNode = document.querySelector("#form")


formNode.addEventListener("submit", (event) => {
    // prevents form from going through when clicking "submit"
    event.preventDefault();

    // clears error messages when inputted is correct
    const errorMessageNodes = document.querySelectorAll(".error-message");
    errorMessageNodes.forEach(node => {
        node.remove();
    });
    

    
    const validateObject = validateForm();


    if (!validateObject["isValid"]) {
        const errorMessages = validateObject["errorMessages"];
        errorMessages.forEach(message => {
            displayErrorMessage(formNode, message);
        });
    }
});



const validateForm = () => {
    const emailContainerNode = document.querySelector("#email")
    const nameContainerNode = document.querySelector("#name")

    let isValid = true;
    let errorMessages = [];

    // name input error message
    let inputName = nameContainerNode.value;
    if(inputName.length <= 0) {
        isValid = false;
        errorMessages.push("Name cannot be empty.");
    }

    // email input error message
    const emailInputValue = emailContainerNode.value;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;

    if(!emailPattern.test(emailInputValue)) {
        isValid = false;
        errorMessages.push("Please enter a valid email address.")
    }

    // Fave moment input error message
    const inputTextNode = document.querySelector("#fave-moment").value;
    if (inputTextNode === "") {
        isValid = false;
        errorMessages.push("Favorite moment must be filled out")
    }

    return {
        isValid: isValid,
        errorMessages: errorMessages
    };
};

const displayErrorMessage = (displaynode, errorMessage) => {
    const errorTextNode = document.createElement("div");

    errorTextNode.setAttribute("role", "alert");
    errorTextNode.innerText = errorMessage;
    errorTextNode.className = "error-message";

    displaynode.appendChild(errorTextNode);
};


