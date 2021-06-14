canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";


nasa_array=["mars1.jpeg","mars2.jpeg","mars 3.jpeg","mars4.jpeg"];
random_number=Math.floor(Math.random()*4);
background_image=nasa_array[random_number];
function add() {
    background_img1=new Image();
    background_img1.onload=UploadBackground;
    background_img1.src=background_image;

    rover_img1=new Image();
    rover_img1.onload=Uploadrover;
   rover_img1.src=rover_image;
}

function UploadBackground(){

    ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);
    
}

function Uploadrover(){

    ctx.drawImage(rover_img1,rover_x,rover_y,rover_width,rover_height);
    
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
keypressed=e.keyCode;
console.log(keypressed);

if (keypressed =="37")  {
    console.log("left");
    left();
}

if (keypressed =="38")  {
    console.log("up");
    up();
}

if (keypressed =="39")  {
    console.log("right");
    right();
}

if (keypressed =="40")  {
    console.log("down");
    down();
}
}
//When you move the rover up,the y value will decrease.
function up(){
if(rover_y>=0){
    rover_y=rover_y-10;//rover_y-=10
    UploadBackground();
    Uploadrover();
}
}

//When you move the rover down,the y value will increase.
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;//rover_y+=10
        UploadBackground();
        Uploadrover();
    }
}
    //When you move the rover left,the x value will deacrease.
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;//rover_x-=10
        UploadBackground();
        Uploadrover();
    }
}
//When you move the rover right,the x value will increase.
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;//rover_x+=10
        UploadBackground();
        Uploadrover();
    }
}

