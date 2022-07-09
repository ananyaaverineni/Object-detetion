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
if(status1!=""){
    for(var i=0;i<object.length;i++){
objectname=object[i].label
objectx=object[i].x
objecty=object[i].y
objectwidth=object[i].width
objectheight=object[i].height
objectconfidence=floor(object[i].confidence*100)
fill("#4b0082")
textSize(20)
text(objectname,370,100)
noFill()
stroke("red")
rect(objectx,objecty,objectwidth,objectheight)
}}
}
