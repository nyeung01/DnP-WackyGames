#pragma strict

function Start(){
 InvokeRepeating("EachSecond",1.0,1.0);
 }
 
 var score: int = 0;
 var addscore = 7;
 
 function EachSecond()
 {
 score=score+addscore;
 }
 
 function OnGUI(){
 GUI.Box(Rect(Screen.width*0.5,20,100,25), score.ToString());
 }