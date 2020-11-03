var boardImages = document.getElementsByClassName("boardMemImg");

var i;
for (i = 1; i < boardImages.length + 1; i++) {
  var imgId = document.getElementById("board" + i);
  imgId.style.backgroundImage = "url('img/picStyre" + i + ".jpg')";
}

function hoverImg(n) {
  var imgId = document.getElementById("board" + n);
  imgId.style.backgroundImage = "url('img/picStyre" + n + "H.jpg')";
}

function hoverOffImg(n) {
  var imgId = document.getElementById("board" + n);
  imgId.style.backgroundImage = "url('img/picStyre" + n + ".jpg')";
}
