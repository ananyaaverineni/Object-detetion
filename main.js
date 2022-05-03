image1=""
status1=""
object=[]
function setup(){
canvas=createCanvas(600,400);
canvas.position(400,220)
objectDetector=ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML="status:dectecting objects"
}
function modelloaded(){
console.log("model is loaded") 
objectDetector.detect(image1,gotresult)   
}
function preload(){
image1=loadImage("BUNNY.jpg")
}
function gotresult(error,result){
if(error)
{console.log(error)}
else{
console.log(result)
status1=true;
object=result;    
}
}
function draw (){
image(image1,0,0,600,400)   
fill("#4b0082")
textSize(40)
text("Bunny",370,100)
noFill()
stroke("#4b0082")
rect(285,100,250,200)
if(status1!=""){
objectname=object[0].label
objectx=object[0].x
objecty=object[0].y
objectwidth=object[0].width
objectheight=object[0].height
objectconfidence=floor(object[0].confidence*100)
}
}
