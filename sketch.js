//1. Create an array of all the colors
var colors = ["voilet","indigo","blue","green","yellow","orange","red" ];
var currentColor;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
}


function draw() {
  var y =0; 
  for (i = 0; i < colors.length; i++){
    //make an object for each color box:
     currentColor = new Band( 0,y,400,60,colors [i]);
     currentColor.appear();

     y = y + 50;
 }
}
