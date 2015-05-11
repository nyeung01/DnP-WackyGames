//Level 1: firstPass, Level 2: secondPass, Level 3: thirdPass
var firstPass : float = 500;
var secondPass : float = 1000;
var thirdPass : float = 1500;

private var GameOver : boolean = false;
private var nextIndex;
private var batches;

function Start() {
	batches = GetComponents(LoadFirstBatch);
	nextIndex = 0;
}

function Update() {
	if (!GameOver){
		for(var obstacle in batches) {
			obstacle.enabled = true;
		}
		batches[nextIndex].Generate();
		if (GetComponent(TrackDistance).GetDistance() >= firstPass) {
			nextIndex = 1;
			batches[nextIndex].Generate();
			//GetComponent(LoadFirstBatch).Generate();
		}
		if (GetComponent(TrackDistance).GetDistance() >= secondPass) {
			batches[nextIndex].enabled = false;
			nextIndex = 2;
			//GetComponent().Generate();
		}
	}
}