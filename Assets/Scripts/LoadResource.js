//Level 1: firstPass, Level 2: secondPass, Level 3: thirdPass
var firstPass : float = 500;
var secondPass : float = 1000;
//var thirdPass : float = 1500;
private var winState : boolean;
var finalDistance : float = 1000;

private var GameOver : boolean = false;
private var nextIndex;
private var batches;

function Start() {
	batches = GetComponents(LoadFirstBatch);
	nextIndex = 0;
	winState = false;
}

function Update() {
	if (!GameOver){
		for(var obstacle in batches) {
		if(winState == false){
			obstacle.enabled = true;
		}
		else{
			obstacle.enabled = false;
		}
		}
		batches[nextIndex].Generate();
		if (GetComponent(TrackDistance).GetDistance() >= firstPass) {
			nextIndex = 1;
			batches[nextIndex].Generate();
			//GetComponent(LoadFirstBatch).Generate();
		}
		if (GetComponent(TrackDistance).GetDistance() >= secondPass) {
			nextIndex = 2;
			batches[nextIndex].Generate();
			//GetComponent().Generate();
		}
//		if (GetComponent(TrackDistance).GetDistance() >= thirdPass) {
//			nextIndex = 3;
//			batches[nextIndex].Generate();
//			//GetComponent().Generate();
//		}
		if (GetComponent(TrackDistance).GetDistance() >= finalDistance) {
			winState = true;
			GetComponent(LoadEarth).Generate();
			//nextIndex = 4;
			//GetComponent().Generate();
		}
//		if (GetComponent(TrackDistance).GetDistance() >= Testing) {
//			batches[nextIndex].enabled = false;
//			nextIndex = 5;
//			//GetComponent().Generate();
//		}
	}
}

function OnGUI(){
	GUI.Box(Rect(250,10,100,25), GetComponent(TrackDistance).ConvertDistance()+" Meters");
	if(winState== false)
	{
		if(nextIndex == 1){
			GUI.backgroundColor = Color.red;
			GUI.Button(Rect(10,10,150,25), "Level 1: Planes!");
		}
		if(nextIndex == 2){
		GUI.backgroundColor = Color.yellow;
			GUI.Button(Rect(10,10,150,25), "Level 2: Birds!");
		}
	}
	else{
		GUI.backgroundColor = Color.green;
		GUI.Button(Rect(10,10,220,25), "Level 3: You forgot the Parachute!");
	}
//	if(nextIndex == 4){
//		GUI.Box(Rect(10,10,100,25), "Good Job Sky Diver!");
//	}
//	if(nextIndex == 5){
//		GUI.Box(Rect(10,10,100,25), "Crash!");
//	}
}
 
 
 
 
 
 
 
 
 
 