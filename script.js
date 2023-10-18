let speech = new SpeechSynthesisUtterance();
speech.lang = "en-us";

document.querySelector("button").addEventListener("click",() =>{
    speech.text = "Hello, welcome to konoha. This project is still under production. We'll contact you once its completed";
    window.speechSynthesis.speak(speech);

});


let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}