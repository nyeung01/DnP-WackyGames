#pragma strict

//Generates an object every time offset. Sets the spawn point either left or right of the player viewport

//Attributes
var prefab : GameObject;
var minOffset : float;
var maxOffset : float;
var XOffset : float;
var xRadius : float = 5;
var yRadius : float = 5;
var zRadius : float = 5;
var timeOffset  : float = 5;

//For Quaternion Angles
var xRotation : float = 0;
var yRotation : float = 0;
var zRotation : float = 0;

private var timer = 0.0;
private var randX : float;
private var randY : float;

function Generate () {
	if (timer >= timeOffset){
	randY = Random.Range(minOffset,maxOffset);
	randX = Random.Range(-XOffset,XOffset);
	//Instantiate(prefab, Vector3(transform.position.x - randX, transform.position.y ,  transform.position.z + randZ), Quaternion.Euler(-90, 0, 0));
	//Instantiate(prefab, Vector3(Random.insideUnitSphere.x * xRadius - transform.position.x, transform.position.y - randY, transform.position.z), Quaternion.Euler(xRotation, yRotation, zRotation));
	if (randX > 0) Instantiate(prefab, Vector3(transform.position.x - XOffset, transform.position.y - randY, transform.position.z), Quaternion.Euler(xRotation, yRotation, zRotation));
	if (randX < 0) Instantiate(prefab, Vector3(transform.position.x + XOffset, transform.position.y - randY, transform.position.z), Quaternion.Euler(xRotation, -yRotation, zRotation));
	timer = 0;
	}
}

function Update() {
	timer += Time.deltaTime;
}

