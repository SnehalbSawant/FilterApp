noseX=0;
noseY=0;
var fimg;
function preload(){
    filterImg=loadImage("https://i.postimg.cc/SRfd4y0N/images.png");
}
function home(){
    window.location="home.html"
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

function chasma(){
    filterImg=loadImage("https://i.postimg.cc/SRfd4y0N/images.png");
  fimg="goggle";
}
function moustache(){
    filterImg=loadImage("https://i.postimg.cc/Jhc65cn2/moustache.png");
  fimg="moustache";
}
function crown(){
    fimg="crown";
    filterImg=loadImage("https://i.postimg.cc/KjsN2jpg/crown-removebg-preview.png");
}