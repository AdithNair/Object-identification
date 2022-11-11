img = "";
status = "";

function preload(){
    img = loadImage('background.jpg');
}


function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Cat", 45, 75);
    noFill();
    stroke("#ffa500");
    rect(300, 90, 270, 320 );
  
    fill("#FF0000");
    text("Dog", 320, 120);
    noFill();
    stroke("green");
    rect(30, 60, 450, 350 );
  }