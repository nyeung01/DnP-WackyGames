#pragma strict

var timer : float = 20;

//var increase : float = 0;
function Start () {

}

function Update () {
	//timer++;
	//if(timer == 400)
	//{
	//GameObject.Destroy()
	//}
	
	Destroy (gameObject, timer);
}