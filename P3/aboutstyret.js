function showimage(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  var imags = document.getElementsByTagName("img");
  var i;
  for (i=0; i<imags.length-1; i++){
    imags[i].style.visibility="hidden";
  }
  imgText.parentElement.style.visibility= "visible";
}
