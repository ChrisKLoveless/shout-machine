function getAndSetShoutValues() {
    const phraseA = document.getElementById("phraseInput").value;
    document.querySelector("span#phraseA").innerText = phraseA.toUpperCase();
}

function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        console.log("Submit form successfully");
        event.preventDefault();
        getAndSetShoutValues();
        document.querySelector("div#yell").removeAttribute("class");
    }
}

window.onload = function() {
    setFormSubmissionEventHandler();
}