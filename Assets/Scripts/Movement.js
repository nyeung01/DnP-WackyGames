#pragma strict

var speed : float = 5.0;
var initialPosition : Vector3;
var moveSpeed : float = 20;

var choice : boolean = false;

function randomBoolean ():boolean
{
    if (Random.value >= 0.5)
    {
        choice = true;
    }
    choice = false;
}

function Start() {
	initialPosition = transform.position;
	
	randomBoolean();
	
}

function Update () {
	transform.position = Vector3.MoveTowards(transform.position, initialPosition, speed*Time.deltaTime);
	
	if(choice == false)
	{
	transform.position += Vector3.left * Time.deltaTime * moveSpeed;
	}
	
	if(choice == true)
	{
	transform.position += Vector3.right * Time.deltaTime * moveSpeed;
	}

}