const nameContainerNode = document.querySelector(".nameContainer")
const questionsContainerNode = document.querySelector(".questionsContainer")
const villainContainerNode = document.querySelector(".villainContainer")
const sidekickContainerNode = document.querySelector(".sidekickContainer")
const faveMomentNodeContaineNode = document.querySelector(".fave-moment-container")
const emailContainerNode = document.querySelector(".emailContainer")
const inputContainerNode = document.querySelector(".inputContainer")


formNode.addEventListener("submit", (event) => {
    event.preventDefault();

    const errorMessageNodes = document.querySelectorAll(".error-message");
    errorMessageNodes.forEach(node => {
        node.remove();
    });
    
    const validateObject = validateForm();


    if(!validateObject["isValid"]) {
        const errorMessages = validateObject["errorMessages"];
        errorMessages.forEach(message => {
            displayErrorMessage(formNode, message);
        });
    }
});



function validateform() {


}