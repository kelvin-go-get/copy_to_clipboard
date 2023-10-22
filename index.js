$(document).ready(function () {
    //make two functions to add and remove the class in span
    function add (){
        $(".copied").addClass("bounce-effect");
    }

    function remove (){
        $(".copied").removeClass("bounce-effect");
    }

    //call the functions and copy the text on button click 
  // Function to copy text to the clipboard
function copyToClipboard() {
    const textField = document.getElementById("textField");
    textField.select();

    try {
        // Attempt to copy the selected text
        const successful = document.execCommand("copy");

        if (successful) {
            console.log("Text copied to clipboard");
        } else {
            console.error("Unable to copy text to clipboard");
        }
    } catch (err) {
        console.error("Error copying text to clipboard", err);
    }
}

// Event listener for the copy button
document.querySelector(".copy-btn").addEventListener("click", copyToClipboard);

})