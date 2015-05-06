#pragma strict

//var camera1;
//var camera2;
var cam1 : Camera; 

var cam2 : Camera;

function Start() { cam1.enabled = true; cam2.enabled = false; }

function Update() {

 if (Input.GetKeyDown(KeyCode.C)) {
     cam1.enabled = false;
     cam2.enabled = true;
     }
 }