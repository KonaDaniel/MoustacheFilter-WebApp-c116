noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is ready!")
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(moustache, noseX - 50, noseY - 5, 100, 45);
}

function take_pic(){
    save('Moustache Pic.png');
}