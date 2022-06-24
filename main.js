SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    

    if(Content == "take my selfie"){
        speak();
    }

}
function speak() {
    synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
setTimeout(function()
{
    takeSnapshot();
    save();
}, 5000);
}
Webcam.set({
    width:360, height: 250, 
    image_format:'png',
     png_quality:90
});
camera = document.getElementById("camera");

function takeSnapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = "<img id='selfie' src='"+ data_url + "'>";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}