var img="";
Status = "";
objects = [];
function preload(){
    img = loadImage("giraffe34850.png");

}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status:Object Detection Started"

}
function modelLoaded(){
    console.log("Model is loaded ");
Status = "true";
objectDetector.detect(img,gotResult);
}
function gotResult(error, results){
if(error){
console.log(error);
}
else{
    console.log(results);
    objects = results;
}
}
function draw(){
    image(img,0,0,640,420);
    if(Status != ""){
        for(i=0;i<objects.length;i++){
fill("yellow");
percent = floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
noFill();
stroke("purple");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        document.getElementById("status").innerHTML = "Status: Object Detected";
    }
}
