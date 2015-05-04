#pragma strict

var speed : float = 5.0;
var initialPosition : Vector3;

function Start() {
	initialPosition= transform.position;
}

function Update () {
	transform.position = Vector3.MoveTowards(transform.position, initialPosition, speed*Time.deltaTime);

}