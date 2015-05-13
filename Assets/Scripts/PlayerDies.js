#pragma strict

var explosion : GameObject; 
private var timer = 10.0;
function OnCollisionEnter (collision) {
	Destroy(gameObject);
	//Instantiate(explosion,transform.position,Quaternion.Euler(-90,0,0));
	//explosion.GetComponent.<ParticleAnimator>().autodestruct = true;
	for(var i=0; i < timer; i++){
	Instantiate(explosion,transform.position,Quaternion.Euler(-90,0,0));
	}

}

//function Update()
//{
//	timer += Time.deltaTime;
//}

//function OnGUI(){
//	GUI.Button(Rect(10,200,150,25), timer);
//}