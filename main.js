

var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();


function start()
{
    recognition.start();
    
    
} 

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    
    if(Content == "take my selfie"){
        console.log("taking selfie in 5 seconds")
        speak();
    }
} 
    


function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    
    
    setTimeout(function(){
        image_id = "selfie1";
        take_snapshot();
        speak_data = "Taking selfie in 2 seconds";
        var Utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(Utterthis);
        
    
    }, 5000);
    
    setTimeout(function()
    {
        image_id = "selfie2";
        take_snapshot();
        speak_data = "Taking selfie in 10 seconds";
        var Utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(Utterthis);
    
    }, 10000);
    setTimeout(function()
    {
        image_id = "selfie3";
        take_snapshot();
        
    
    
    }, 15000);
    
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");


function take_snapshot()
{
    console.log(image_id);

    Webcam.snap(function(data_uri){
        if(image_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(image_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(image_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }


    });
}

