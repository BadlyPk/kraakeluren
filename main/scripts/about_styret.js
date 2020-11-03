function hoverImg(n) {
  var imgId = document.getElementById("board" + n)
  var imgIdH = document.getElementById("boardH" + n)

  imgId.style.display = "none";
  imgIdH.style.display = "block";
}

function hoverOffImg(n) {
  var imgId = document.getElementById("board" + n)
  var imgIdH = document.getElementById("boardH" + n)

  imgId.style.display = "block";
  imgIdH.style.display = "none";
}
