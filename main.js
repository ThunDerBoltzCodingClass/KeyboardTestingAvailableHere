canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

nasa_img_array_pictures= ["nasa_img_1.jpg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];

random_number= Math.floor(Math.random() * 4);
console.log(random_number)

background_img= nasa_img_array_pictures[random_number];
rover_img= "rover.png";
rover_x= 10;
rover_y= 10;
rover_height= 90;
rover_width= 100;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadbackground;
    background_imgTag.src= background_img;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src= rover_img;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed= e.keyCode;
    if(keyPressed=='37'){
left();
console.log("left")
    }
    if(keyPressed=='39'){
        right();
        console.log("right")
            }

if(keyPressed=='38'){
    up();
    console.log("up")
        }

        if(keyPressed=='40'){
            down();
            console.log("down")
                }
    }

    function up(){
        if(rover_y >=0){
            rover_y =rover_y - 10;
            console.log("When Up Arrow is Pressed: x- " + rover_x + " y- " + rover_y);
        uploadbackground();
        uploadrover();
        }
    }

    function down(){
        if(rover_y <=500){
            rover_y =rover_y + 10;
            console.log("When Up Arrow is Pressed: x- " + rover_x + " y- " + rover_y);
        uploadbackground();
        uploadrover();
        }
    }

    function right(){
        if(rover_x <=700){
            rover_x =rover_x + 10;
            console.log("When Up Arrow is Pressed: x- " + rover_x + " y- " + rover_y);
        uploadbackground();
        uploadrover();
        }
    }

    function left(){
        if(rover_x >=0){
            rover_x =rover_x - 10;
            console.log("When Up Arrow is Pressed: x- " + rover_x + " y- " + rover_y);
        uploadbackground();
        uploadrover();
        }
    }