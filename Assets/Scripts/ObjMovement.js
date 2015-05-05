#pragma strict

var speed : float = 5.0;
var initialPosition : Vector3;
var moveSpeed : float = 20;

var choice : boolean;
//private var choiceBool = Random.value;

function Start() {
	initialPosition = transform.position;
	randomBool();
}

// function randomBool (){
// 	if (choiceBool > 0.5) choice = true;
// 	else choice = false;
// }

function randomBool (){
	if (transform.position.x < 0) choice = true;
	else choice = false;
}

function Update () {
	print (choice);
	transform.position = Vector3.MoveTowards(transform.position, initialPosition, speed*Time.deltaTime);
	if(choice == false)	transform.position += Vector3.left * Time.deltaTime * moveSpeed;
	else transform.position += Vector3.right * Time.deltaTime * moveSpeed;
}