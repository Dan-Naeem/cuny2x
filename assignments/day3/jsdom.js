function js_style() {
  document.getElementById("para").style.fontSize = "14pt";
  document.getElementById("para").style.color = "#ff0000";
}

function myFunction() {
    document.getElementById("myH2").style.color = "#ff0000";
    document.getElementById("myP").style.color = "magenta";
    document.getElementById("myP2").style.color = "blue";
    document.getElementById("myDiv").innerHTML = "stuff";
    alert("I am an alert box!");
}

function getName() {
  var firstName = document.getElementById("nameFirst");
  var lastname = document.getElementById("nameLast");
  alert(firstName.value + " " + lastname.value);
}
