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
}

function Album() {
  var allPhotos = [];
}

Album.prototype.add = function(Photo) {
  this.allPhotos.push(aPic);
}

Album.prototype.display = function() {
  for (i = 0; i < this.list.length; i++) {
    console.log(allPhotos[i]);
  }
}

let pic1 = new Photo("thur", "park");
let pic2 = new Photo("fri", "school");
console.log(pic1.name + " : " + pic1.location);
console.log(pic2.name + " : " + pic2.location);

let album1 = new Album();
album1.add(pic1);
album1.add(pic2);
album1.display;
