canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_height=100
rover_weidth=100
rover_x=200
rover_y=100
var picutures=["Pic 1.jfif","pic 2.jpg","Pic 3.jpg"];
var random_number= Math.floor (Math.random()*3);
var bg =picutures[random_number]
function add(){
    bg_img=new Image()
    bg_img.onload=uploadbg
    bg_img.src=bg
    rover_img=new Image()
    rover_img.onload=uploadrover
    rover_img.src="rover.png"
}
function uploadbg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_weidth,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    if (keypressed=='38'){
        up();
    }
    if (keypressed=='40'){
        down();
    }
    if (keypressed=='37'){
        left();
    }
    if (keypressed=='39'){
        right();
    }
}
function up(){
    if(rover_y>0){
        rover_y=rover_y-10
        uploadbg()
        uploadrover()
    }
}
function down(){
    if(rover_y<500){
        rover_y=rover_y+10
        uploadbg()
        uploadrover()
    }
}
function left(){
    if(rover_x>0){
        rover_x=rover_x-10
        uploadbg()
        uploadrover()
    }
}
function right(){
    if(rover_x<500){
        rover_x=rover_x+10
        uploadbg()
        uploadrover()
    }
}