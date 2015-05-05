#pragma strict

class Boundary
{
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
}

var speed : float;
var tilt : float;
var boundary : Boundary;

function FixedUpdate () { 
	var horizontal = Input.GetAxis("Horizontal") * speed * Time.deltaTime; 
	var vertical = Input.GetAxis("Vertical") * speed * Time.deltaTime;
	var pos : Vector3 = transform.position;
	// pos.x = Mathf.Clamp(pos.x + horizontal, boundary.xMin, boundary.xMax);
	// pos.z = Mathf.Clamp(pos.z + vertical, boundary.zMin, boundary.zMax);
	transform.position = pos;
}

    //GetComponent.<Rigidbody>().rotation = Quaternion.Euler (0.0f, 0.0f, GetComponent.<Rigidbody>().velocity.x * -tilt);