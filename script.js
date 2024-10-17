const formNode = document.querySelector("#form")

formNode.addEventListener("submit", (event) => {
    // prevents form from going through when clicking "submit"
    event.preventDefault();

    // clears error messages when inputted is correct
    const errorMessageNodes = document.querySelectorAll(".error-message");
    errorMessageNodes.forEach(node => {
        node.textContent = "";
    });
    
    // Validates form and captures inputs
    const validateObject = validateForm();

    // displays corresponding error messages
    if (!validateObject["isValid"]) {
        const errorMessages = validateObject["errorMessages"];
        errorMessages.forEach(({field, message}) => { 
            displayErrorMessage(field, message); 
        });
    }
});

// A function to validate form inputs
const validateForm = () => {
    const emailContainerNode = document.querySelector("#email")
    const nameContainerNode = document.querySelector("#name")
    const questionYesNode = document.querySelector("#yes")
    const questionNoNode = document.querySelector("#no")
    const hansNode = document.querySelector("#hans-gruber")
    const simonNode = document.querySelector("#simon-gruber")
    const colonelNode = document.querySelector("#colonel-stuart")
    const thomasNode = document.querySelector("#thomas-gabriel")
    const sidekickSelectionNode = document.querySelector("#sidekick")

    let isValid = true;
    let errorMessages = [];

    // name input error message
    let inputName = nameContainerNode.value;
    if(inputName.length <= 0) {
        isValid = false;
        errorMessages.push({field: "nameError", message: "Name cannot be empty."});
    }

    // email input error message
    const emailInputValue = emailContainerNode.value;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;

    if(!emailPattern.test(emailInputValue)) {
        isValid = false;
        errorMessages.push({field: "emailError", message: "Please enter a valid email address."});
    }

    // Fave moment input error message
    const inputTextNode = document.querySelector("#fave-moment").value;
    if (inputTextNode === "") {
        isValid = false;
        errorMessages.push({field: "faveMomentError", message: "Favorite moment must be filled out"});
    }

    // Questioncontainer input

    if (questionYesNode.checked) {
    } else if(questionNoNode.checked) {
    } else {
        isValid = false;
        errorMessages.push({field: "questionError", message: "You must select a button"});
    }

    // Villain container
    if (hansNode.checked) {
    } else if (simonNode.checked) {
    } else if (colonelNode.checked) {
    } else if (thomasNode.checked) {
    } else {
        isValid = false;
        errorMessages.push({field: "villainError", message: "Please make at least one selection"});
    }

    // Sidekick container
    if(sidekickSelectionNode.value === "") {
        isValid = false;
        errorMessages.push({field: "sidekickError", message: "Please select a sidekick"});
    }

    // Returns all messages
    return {
        isValid: isValid,
        errorMessages: errorMessages
    };
};

// Returns error message on to form
const displayErrorMessage = (field, message) => {
    const errorField = document.querySelector(`#${field}`);
    
    if (!errorField) {
        return;
    }

    
    errorField.textContent = message;
    errorField.classList.add("error-text");
};
