var player : GameObject;
private var DistanceTraveled : float = 0;
private var lastPosition : Vector3;

function Start() {
	lastPosition = player.transform.position;
}

function GetDistance() {
	return DistanceTraveled;
}

function Update() {
	print (DistanceTraveled);
	DistanceTraveled += Vector3.Distance(player.transform.position, lastPosition);
	lastPosition = player.transform.position;
}

function ConvertDistance(){
	var converted = DistanceTraveled/10;
	var rounder = Mathf.RoundToInt(converted);
	return rounder;
}