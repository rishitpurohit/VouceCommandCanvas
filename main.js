x = 0;
y = 0;
 var screenWidth=0;
var screenHeight=0;
draw_apple = "";
apple="";
speak_data="";
to_number="";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function preload(){
  apple=loadImage("apple.png");
  to_number=Number(content);
  if(Number,isinteger(to_number)){
  console.log("Started drawing apple");
  document.getElementsById("status").innerHTML="Started drawing apple";}
  else{
    console.log("The system has not recognized a number");
    document.getElementsById("status").innerHTML="The system has not recognized a number";  
  }
}



function setup() {
 canvas=createCanvas(300,300)
 canvas.center()
 screen_width =window.innerWidth();
 screen_widthn =height.innerHeight();
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for(vari=1; i<=to_number;i++){
x=Math.floor(Math.random()*700);
y==Math.floor(Math.random()*400)
image(apple,x,y,50,50);
speak()
    }

  }}
  ;

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
