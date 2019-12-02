function on(imageName) {
  document.getElementById("currentimg").src = "../img/" + imageName;
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
