function OnGUI () {

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (300,200,156,56), "Begin")) {
		Application.LoadLevel (1);
	}
	if (GUI.Button (Rect (300,144,156,56), "Quit")) {
		Application.Quit();
	}
}