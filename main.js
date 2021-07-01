noseX=0;
noseY=0;
var fimg;
function preload(){
    filterImg=loadImage("https://s3-whjr-curriculum-uploads.whjr.online/53b5855c-a511-445f-8b36-e88ecf4b9e6e.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        if(fimg=="crown"){
            noseX=results[0].pose.nose.x-45;
            console.log("noseX="+noseX);
            noseY=results[0].pose.nose.y-175;
            console.log("noseY="+noseY);
        }
        else if(fimg=="moustache"){
            noseX=results[0].pose.nose.x-50;
            console.log("noseX="+noseX);
            noseY=results[0].pose.nose.y-25;
            console.log("noseY="+noseY);
        }
        else
        {
            noseX=results[0].pose.nose.x-50;
            console.log("noseX="+noseX);
            noseY=results[0].pose.nose.y-75;
            console.log("noseY="+noseY);
        }
    }
    
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function draw(){
image(video,0,0,300,300)
image(filterImg,noseX,noseY,100,100)
}
function take_snapshot(){
    save("Extremo_Funnyo.png");
}

function goggles(){
    filterImg=loadImage("https://s3-whjr-curriculum-uploads.whjr.online/53b5855c-a511-445f-8b36-e88ecf4b9e6e.png");
  fimg="goggle";
}
function moustache(){
    filterImg=loadImage("https://s3-whjr-curriculum-uploads.whjr.online/cd72d8b2-c565-49bf-9f7c-2213cf74f393.png");
  fimg="moustache";
}
function crown(){
    fimg="crown";
    filterImg=loadImage("https://s3-whjr-curriculum-uploads.whjr.online/d44927b4-9195-4397-ac10-7d37adb4b167.png");
}
