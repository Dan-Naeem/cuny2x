//create a constructor for the photo object
function Photo(name, location){
  this.name = name;
  this.name = location;
}

Photo.prototype.details = function() {
  return this.name + " " + this.location;
  //
}
