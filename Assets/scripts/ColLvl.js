//Basic collision detection checking for two differently named objects
function OnCollisionEnter(girl : Collision){
 if(girl.gameObject.name == "char1"){
  Application.LoadLevel (0);
 }
}