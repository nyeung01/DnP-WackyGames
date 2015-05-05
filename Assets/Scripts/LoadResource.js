//Level 1: firstPass, Level 2: secondPass, Level 3: thirdPass
var firstPass : float = 500;
var secondPass : float = 1000;
var thirdPass : float = 1500;

private var GameOver : boolean = false;

function Start() {
	
}

function Update() {
	if (!GameOver){
		if (GetComponent(TrackDistance).GetDistance() >= firstPass) GetComponent(LoadFirstBatch).Generate();
		if (GetComponent(TrackDistance).GetDistance() >= secondPass) {
			GetComponent(LoadFirstBatch).enabled = false;
			GetComponent(LoadSecondBatch);
		}
	}
}