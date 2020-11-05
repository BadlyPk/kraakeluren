var boardImages = document.getElementsByClassName("boardMemImg");

/* Set background image of all the divs that will show the board members */
var i;
for (i = 1; i < boardImages.length + 1; i++) {
  var imgId = document.getElementById("board" + i);
  imgId.style.backgroundImage = "url('img/picStyre" + i + ".jpg')";
}

/* Change background image onmouseover (hover) */
function hoverImg(n) {
  var imgId = document.getElementById("board" + n);
  imgId.style.backgroundImage = "url('img/picStyre" + n + "H.jpg')";
}

/* Change back to the other background image onmouseover (hover) */
function hoverOffImg(n) {
  var imgId = document.getElementById("board" + n);
  imgId.style.backgroundImage = "url('img/picStyre" + n + ".jpg')";
}
