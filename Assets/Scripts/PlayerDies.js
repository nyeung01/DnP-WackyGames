#pragma strict

var explosion : GameObject[]; 

function OnCollisionEnter (collision) {
	Destroy(gameObject);
	//Instantiate(explosion,transform.position,Quaternion.Euler(-90,0,0));
	//explosion.GetComponent.<ParticleAnimator>().autodestruct = true;
	for(var i=0; i < explosion.length; i++){
		Instantiate(explosion[i],transform.position,Quaternion.Euler(-90,0,0));
	}

}