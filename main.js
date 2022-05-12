function preload(){
    song = loadSound("music.mp3")
    song = loadSound("music2.mp3")
}


function setup(){
    canvas=createCanvas(400,320);
    canvas.position(400,200);
    video=createCapture(VIDEO);
     video.hide();
}


function draw(){
image(video,0,0,400,320,)
}