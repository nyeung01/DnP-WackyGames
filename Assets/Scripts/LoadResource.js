//Level 1 Obstacle
var firstPass : float = 500;
var secondPass : float = 1000;

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