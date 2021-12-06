darkside = "";
harry_potter = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position(520, 190);


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
     console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){
    darkside = loadSound("darkside.mp3");
}

function play(){
    darkside.play()
    darkside.setVolume(1);
    darkside.rate(1);
}

function gotPoses(results)
{
     if(results.length > 0)
     {
         console.log(results);
        
         leftwristX = results[0].pose.leftWrist.x;
         leftwristY = results[0].pose.leftWrist.y;
         console.log("leftWristX = " + leftwristX + "leftWristY = " + leftwristY);
         
         rightwristX = results[0].pose.rightWrist.x;
         rightwristY = results[0].pose.rightWrist.y;
         console.log("rightWristX =" + rightwristX + "rightWristY = " + rightwristY);   
    }
}