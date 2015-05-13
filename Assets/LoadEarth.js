#pragma strict

//Generates an object every time offset. Sets the spawn point either left or right of the player viewport

//Attributes
var prefab : GameObject;
var minOffset : float;
var maxOffset : float;

//For Quaternion Angles

//private var timer = 0.0;
//private var randX : float;
private var randY : float;

function Generate () {
	//if (timer >= timeOffset){
	randY = Random.Range(minOffset,maxOffset);
	//randX = Random.Range(-XOffset,XOffset);
	//Instantiate(prefab, Vector3(transform.position.x - randX, transform.position.y ,  transform.position.z + randZ), Quaternion.Euler(-90, 0, 0));
	//Instantiate(prefab, Vector3(Random.insideUnitSphere.x * xRadius - transform.position.x, transform.position.y - randY, transform.position.z), Quaternion.Euler(xRotation, yRotation, zRotation));
	Instantiate(prefab, Vector3(transform.position.x, transform.position.y - randY, transform.position.z), Quaternion.identity);
	//if (randX < 0) Instantiate(prefab, Vector3(transform.position.x + XOffset, transform.position.y - randY, transform.position.z), Quaternion.identity);
	//timer = 0;
	//}
}

//function Update() {
//	timer += Time.deltaTime;
//}

