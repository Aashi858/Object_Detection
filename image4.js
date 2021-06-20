img4 = "";
status = "";
function preload(){
    img4 = loadImage("image4.jpg");
}
function setup(){
    canvas = createCanvas(550,350);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status").innerHTML = " : Detecting Object";
}
function draw(){
    image(img4,0,0,550,350);
    if(status != ""){
        document.getElementById("status").innerHTML = " : Object Detected";
        for(i = 0 ; i < objects.length; i++){
            fill("#4287f5");
            stroke("#0763f7");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percentage + "%" ,objects[i].x, objects[i].y + 10);
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function model_loaded(){
    console.log("Model is loaded!");
    status = true;
    objectDetector.detect(img4,got_results);
}
function got_results(error,results){
    if(error){
        console.error("Error");
    }
    else if(results){
        console.log(results);
        objects = results;
    }
}
function back(){
    window.location = "index.html";
}