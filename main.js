var left_x=0;
var right_x=0;
var left_y=0;
var right_y=0;
var left_score=0;
var right_score=0;
var status="";
function preload(){
    song = loadSound("music.mp3")
    song = loadSound("music2.mp3")
    
}


function setup(){
    canvas=createCanvas(400,320);
    canvas.position(400,200);
    video=createCapture(VIDEO);
     video.hide();
posenet=ml5.poseNet(video,modalready);
posenet.on("pose",gotPoses)
}


function draw(){
image(video,0,0,400,320,)
fill("red");
stroke("blue");
circle(left_x,left_y,30);
circle(right_x,right_y,30);
}

function modalready(){
console.log("success");
}
function gotPoses(result){
if(result.length>0){
    left_x=result[0].pose.leftWrist.x;
    right_x=result[0].pose.rightWrist.x;
    left_y=result[0].pose.leftWrist.y;
    right_y=result[0].pose.rightWrist.y;
    left_score=result[0].pose.keypoints[9].score;
    right_score=result[0].pose.keypoints[10].score;
}
}
