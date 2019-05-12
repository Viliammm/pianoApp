alert("Hi, the app is quite messy right now. Currently I am trying to figure out a functionality for switching between multiple octaves. For now, only one octave is working. Sorry);

var c1 = new Audio ("sounds_new/1.C1.mp3");
var cis1 = new Audio ("sounds_new/2.Cis1.mp3");
var d1 = new Audio ("sounds_new/3.D1.mp3");
var dis1 = new Audio ("sounds_new/4.Dis1.mp3");
var e1 = new Audio ("sounds_new/5.E1.mp3");
var f1 = new Audio ("sounds_new/6.F1.mp3");
var fis1 = new Audio ("sounds_new/7.Fis1.mp3");
var g1 = new Audio ("sounds_new/8.G1.mp3");
var gis1 = new Audio ("sounds_new/9.Gis1.mp3");
var a1 = new Audio ("sounds_new/10.A1.mp3");
var ais1 = new Audio ("sounds_new/11.Ais1.mp3");
var b1 = new Audio ("sounds_new/12.B1.mp3")
var c2 = new Audio ("sounds_new/13.C2.mp3");
var cis2 = new Audio ("sounds_new/14.Cis2.mp3");
var d2 = new Audio ("sounds_new/15.D2.mp3");
var dis2 = new Audio ("sounds_new/16.Dis2.mp3");
var e2 = new Audio ("sounds_new/17.E2.mp3");
var f2 = new Audio ("sounds_new/18.F2.mp3");
var fis2 = new Audio ("sounds_new/19.Fis2.mp3");
var g2 = new Audio ("sounds_new/20.G2.mp3");
var gis2 = new Audio ("sounds_new/21.Gis2.mp3");
var a2 = new Audio ("sounds_new/22.A2.mp3");
var ais2 = new Audio ("sounds_new/23.Ais2.mp3");
var b2 = new Audio ("sounds_new/24.B2.mp3");

var octave1 = [c1, cis1, d1, dis1, e1, f1, fis1, g1, gis1, a1, ais1, b1];
var octave2 = [c2, cis2, d2, dis2, e2, f2, fis2, g2, gis2, a2, ais2, b2];
//var octave3 = [c3, cis3, d3, dis3, e3, f3, fis3, g3, gis3, a3, ais3, b3];
var keycodesSounds = [65, 87, 83, 69, 68, 70, 84, 71, 90, 72, 85, 74];   
var keycodesOctaves = [89, 88, 67, 86, 66, 78, 77]
var keys = document.querySelectorAll(".key");
var keyboard = document.querySelector("#keyboard");
var playOctave = 0;

function playPiano(){
  //chooseOctave();
  $(document).on("keydown",function(event){

    console.log(event.which)
    for (var i = 0; i < keycodesSounds.length; i++) {
      // if pressed key corresponds to one of the assigned keys
      if(event.which === keycodesSounds[i]){
        //play corresponding tone of the octave3
        octave1[i].play();
        //visually press the key
        $(keys[i]).addClass("pressed")
      }
    }
  }
)};

playPiano();      


function chooseOctave(){
  
  $(document).on("keydown",function(event){
    for (var i = 0; i < keycodesOctaves.length; i++) {

      //recognize that a key to choose octave was pressed;
      if (event.which === keycodesOctaves) {

      }
      // Variable to store the number of the octave pressed
      var octaveNum = keycodesOctaves.indexOf(keycodesOctaves[i]);
      //Variable to concatenate octave + octaveNum variable
      return octaveNum+1;
      }  

  })
}


chooseOctave();




function reset(){
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  }); 
}










function removeShadow(){
  document.addEventListener("keyup", function(){
    for (var i = 0; i < keycodesSounds.length; i++) {
      if(event.which === keycodesSounds[i]){
        $(keys[i]).removeClass("pressed");     
      }
    }
  });   
};

removeShadow();                                                                






//-------------------
// function playPiano(){
//   $(document).on("keydown",function(event){
//     console.log(event.which)
//     for (var i = 0; i < keycodes.length; i++) {
//       if(event.which === keycodes[i]){
//         octave3[i].play();
//         $(keys[i]).addClass("pressed")



//       }
//     }
//   }
// )};


//    playPiano();      


//    document.addEventListener("keyup", function(){
//   for (var i = 0; i < keycodes.length; i++) {
//     if(event.which === keycodes[i]){
//       $(keys[i]).removeClass("pressed");     
//     }
//   }
// });
