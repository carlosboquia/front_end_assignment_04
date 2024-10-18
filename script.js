// Grabs form 
const formNode = document.querySelector("#form")

// A function to validate form inputs
function validateForm() {
    
    // grabs elements from HTML
    const emailContainerNode = document.querySelector("#email")
    const nameContainerNode = document.querySelector("#name")
    const questionYesNode = document.querySelector("#yes")
    const questionNoNode = document.querySelector("#no")
    const questionIdkNode = document.querySelector("#idk")
    const hansNode = document.querySelector("#hans-gruber")
    const simonNode = document.querySelector("#simon-gruber")
    const colonelNode = document.querySelector("#colonel-stuart")
    const thomasNode = document.querySelector("#thomas-gabriel")
    const sidekickSelectionNode = document.querySelector("#sidekick")
    const inputTextNode = document.querySelector("#fave-moment").value;

    // Determines if input is "true"
    let isValid = true;
    
    // an empty array to grab error message when input is invalid
    let errorMessages = [];

    // name input error message
    function validateName() {
        const inputName = nameContainerNode.value;
        if(inputName.length <= 0) {
            isValid = false;
            errorMessages.push({field: "nameError", message: "Name cannot be empty."});
        }
    }
    
    // email input error message
    function validateEmail() {
        const emailInputValue = emailContainerNode.value;
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
        if(!emailPattern.test(emailInputValue)) {
            isValid = false;
            errorMessages.push({field: "emailError", message: "Please enter a valid email address."});
        }
    }

    // Fave moment input error message
    function validateMoment() {
        if (inputTextNode === "") {
            isValid = false;
            errorMessages.push({field: "faveMomentError", message: "Favorite moment must be filled out"});
        }
    }
   
    // Questioncontainer input error message
    function validateQuestion() {
        if (questionYesNode.checked) {
        } else if(questionNoNode.checked) {
        } else if(questionIdkNode.checked) {
        } else {
            isValid = false;
            errorMessages.push({field: "questionError", message: "You must select a button"});
        }
    }
   
    // Villain container input error message
    function validateVillain() {
        if (hansNode.checked) {
        } else if (simonNode.checked) {
        } else if (colonelNode.checked) {
        } else if (thomasNode.checked) {
        } else {
            isValid = false;
            errorMessages.push({field: "villainError", message: "Please make at least one selection"});
        }
    }
    // Sidekick container input error message
    function validateSidekick() {
        if(sidekickSelectionNode.value === "") {
            isValid = false;
            errorMessages.push({field: "sidekickError", message: "Please select a sidekick"});
        }
    }
    
    // Calls all functions created above
    validateName();
    validateEmail();
    validateMoment();
    validateQuestion();
    validateVillain();
    validateSidekick();
    
    // Returns all messages from above
    return {
        isValid: isValid,
        errorMessages: errorMessages
    };
};

// Returns error message on to form
function displayErrorMessage (field, message) {
    const errorField = document.querySelector(`#${field}`);
    
    if (!errorField) {
        return;
    }

    // clears previous error messages
    errorField.textContent = message;
    errorField.classList.add("error-text");
};

function clearErrors() {
    // clears error messages when inputted is correct
    const errorMessageNodes = document.querySelectorAll(".error-message");
    errorMessageNodes.forEach(node => {
        node.textContent = "";
    });
}

// event listener when clicking submit
formNode.addEventListener("submit", (event) => {
    
    // prevents form from going through when clicking "submit"
    event.preventDefault();

    // calls clearErrors function
    clearErrors();

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


// Pop up message to confirm reset form
function resetAlert() {
    confirm("Are you sure you want to reset your form?");
}