

prediction_1 = "";
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,

})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    { document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";

    
});
}


console.log("ml5 version " , ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/018tYgBpO/model.json", modelready);

function modelready()
{
    console.log("modle loaded");

}

function speak()
    {
        var synth = window.speechSynthesis;
        speak_data= "The Hand Gesture Is " + prediction_1;
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);

    }

    
function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img , gotresults);
}


function gotresults(error,results)
{
if (error)
{
    console.log(error);
}

else
{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
    prediction_1=results[0].label;
    speak();

    
    if (results[0].label == "Best")
    {
        document.getElementById("update_gesture").innerHTML = "&#128077;";
    }

    if (results[0].label == "Amazing")
    {
        document.getElementById("update_gesture").innerHTML = "&#128076;";

    }


    if (results[0].label == "Victory")
    {
        document.getElementById("update_gesture").innerHTML = "&#9996;";
    }
}



}

