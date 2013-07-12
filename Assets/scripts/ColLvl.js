//Basic collision detection checking for two differently named objects
function OnCollisionEnter(theCollision : Collision){
 if(theCollision.gameObject.name == "Char1"){
  Debug.Log("Hit the floor");
 }
}