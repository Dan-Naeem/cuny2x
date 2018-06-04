/*

Implement an object model that allows you to store strings that represent a Photo.

Your model should include an Album object that can contain many Photo objects in its photos attribute.

Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added.

Each Photo should tell you the photo's file name and the location the photo was taken in.

Create instances of each object defined to prove that your object model works.

*/

//create a constructor for the photo object
function Photo(name, location){
  this.name = name;
  this.location = location;
  this.info = function() {
    console.log(this.name + " : " + this.location);
  }
}

function Album() {
  this.allPhotos = new Array();
}

Album.prototype.add = function(Photo) {
  this.allPhotos.push(Photo);
}

Album.prototype.display = function() {
  for (i = 0; i < this.allPhotos.length; i++) {
    this.allPhotos[i].info();
  }
}

let pic1 = new Photo("thur", "park");
let pic2 = new Photo("fri", "school");

let album1 = new Album();
album1.add(pic1);
album1.add(pic2);
album1.display();
