#pragma strict

// Generates an object every time offset. Once the maximum number of objects are reached, disable the script.

var prefab : GameObject;
var minOffset : float;
var maxOffset : float;
//var amount : int = 20;
var xRadius : float = 5;
var yRadius : float = 5;
var zRadius : float = 5;
var timeOffset  : float = 5;

//For spawning
var xRotation : float = 0;
var yRotation : float = 0;
var zRotation : float = 0;

private var timer = 0.0;
//private var count = 0;
private var randY : float;

function Update() {
	timer += Time.deltaTime;
}

function Generate () {
	if (timer >= timeOffset){
	randY = Random.Range(minOffset,maxOffset);
	//randZ = Random.Range(minOffset,maxOffset);
	//Instantiate(prefab, Vector3(transform.position.x - randX, transform.position.y ,  transform.position.z + randZ), Quaternion.Euler(-90, 0, 0));
	Instantiate(prefab, Vector3(Random.insideUnitSphere.x * xRadius + transform.position.x, transform.position.y - randY, Random.insideUnitSphere.z * zRadius + transform.position.z), Quaternion.Euler(xRotation, yRotation, zRotation));
	timer = 0;
	//count += 1;
	}
}

