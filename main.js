var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    console.log("startclick")
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
     if(content == "take my selfie"){
        console.log("taking selfie in 5 seconds")
        speak();
        setTimeout(
            function(){
             takesnapshot();
             save();
            }
         
         ,5000);
     }
    
}
function speak(){
    var synth = window.speechSynthesis 
    speakdata = "taking selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
}
Webcam.set({
    width:320,
    height:320,
    image_format:'png',
    png_quality:50

});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takesnapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = "<img id='selfie_img'src='"+data_uri+"'>"

    })


    
}

function save(){

link = document.getElementById("link");
image = document.getElementById ("selfie_img").src;
link.href = image;
link.click();
}


