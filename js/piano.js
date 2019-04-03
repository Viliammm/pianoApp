var c1 = new Audio ("sounds/13.C1.mp3");
var c3 = new Audio ("sounds/1.C3.mp3");
var cis3 = new Audio ("sounds/2.Cis3.mp3");
var d3 = new Audio ("sounds/3.D3.mp3");
var dis3 = new Audio ("sounds/4.Dis3.mp3");
var e3 = new Audio ("sounds/5.E3.mp3");
var f3 = new Audio ("sounds/6.F3.mp3");
var fis3 = new Audio ("sounds/7.Fis3.mp3");
var g3 = new Audio ("sounds/8.G3.mp3");
var gis3 = new Audio ("sounds/9.Gis3.mp3");
var a3 = new Audio ("sounds/10.A3.mp3");
var ais3 = new Audio ("sounds/11.Ais3.mp3");
var b3 = new Audio ("sounds/12.B3.mp3");

var octave1 = c1
var octave3 = [c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3];
var keycodes = [65, 87, 83, 69, 68, 70, 84, 71, 90, 72, 85, 74];   
var keys = document.querySelectorAll(".key");
var keyboard = document.querySelector("#keyboard");

function playPiano(){
  $(document).on("keydown",function(event){
    console.log(event.which)
    for (var i = 0; i < keycodes.length; i++) {
      if(event.which === keycodes[i]){
        octave3[i].play();
        $(keys[i]).addClass("pressed")



      }
    }
  }
)};


   playPiano();      


   document.addEventListener("keyup", function(){
  for (var i = 0; i < keycodes.length; i++) {
    if(event.which === keycodes[i]){
      $(keys[i]).removeClass("pressed");     
    }
  }
});
                                                                                                 