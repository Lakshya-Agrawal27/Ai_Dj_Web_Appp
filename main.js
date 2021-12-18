darkside = "";
harry_potter = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreleftwristX ="";
song1status = harry_potter.isPlaying();

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
    canvas = createCanvas(600, 500);

    image(video, 0, 0, 600, 500);


    fill('blue');
    stroke('cyan');

    if(scoreleftwristX > 0.01){
        circle(leftwristX, leftwristY, 20);
        darkside.stop();
        if(song1status = false){
            harry_potter.play();
            document.getElementById("song_name").innerHTML = "PLaying song - Harry Potter Theme Song";
        }
    }
}

function preload(){
    darkside = loadSound("darkside.mp3");
    harry_potter = loadSound("music.mp3");
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
         scoreleftwristX = results[0].pose.keypoints[9].score;
         console.log("scoreleftwristX = " + scoreleftwristX);
        
         leftwristX = results[0].pose.leftWrist.x;
         leftwristY = results[0].pose.leftWrist.y;
         console.log("leftWristX = " + leftwristX + "leftWristY = " + leftwristY);
         
         rightwristX = results[0].pose.rightWrist.x;
         rightwristY = results[0].pose.rightWrist.y;
         console.log("rightWristX =" + rightwristX + "rightWristY = " + rightwristY);   
    }
}