function OnGUI () {

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (50,300,156,56), "Next")) {
		Application.LoadLevel (2);
	}
}