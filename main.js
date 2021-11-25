Webcam.attach('#camera');
camera= document.getElementById("camera");
Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality:90
});
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
});
}
console.log('ml5 version;', ml5.version);

//add your teachable machine link
classifier= ml5.imageClassifier(' ',modelLoaded);

function modelLoaded(){
    console.log('model loaded');
}
function check(){
     var image= document.getElementById("captured_image");
    classifier.classify(image,gotresult);

}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_member_name").innerHTML=//results[0].label;
        document.getElementById("result_member_accuracy").innerHTML=//Number(results[0].confidence.toFixed(3))*100;
        console.log(results[0].confidence.toFixed(3));
        
    }

}