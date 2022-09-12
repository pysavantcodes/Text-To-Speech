// CodeWithCollins - Text To Speech Logic

const inputVal = document.getElementById("text").value;
const spin = document.querySelector(".spin");

function sound() {
    spin.style.display = "block";

    responsiveVoice.speak(inputVal);
    //console.log(inputVal);
    if (responsiveVoice.isPlaying()) {
        spin.style.display = "none";

    }




}