nose_x = 0 ;
nose_y = 0 ;

function preload(){
    lipstick_image = loadImage('https://th.bing.com/th/id/R.dac790192c57651627c79e9568bdf842?rik=Sz1ZAr4OkdR9VQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fjix%2f6KB%2fjix6KB79T.png&ehk=oIi2F6V0Ais7ffFmhukAItEeTQgEsv8lhGrqvVA7JlY%3d&risl=&pid=ImgRaw&r=0');
}

function setup(){
    canvas = createCanvas(300, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
if(results.length > 0){

    console.log(results);
    
    nose_x = results[0].pose.nose.x-30;
    nose_y = results[0].pose.nose.y+18;

    console.log("nose_x = " + nose_x);
    console.log("nose_y = " + nose_y);
   }}

   function modelLoaded(){
    console.log("posenet initialised");
   }

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick_image, nose_x, nose_y, 59, 25);
}

function take_snapshot(){
    save('image_filtered.jpg');
}