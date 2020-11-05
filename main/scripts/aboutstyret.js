function showimage(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display="block";
  var i;
  var galcolumn = document.getElementsByClassName('galcolumn');
  for (var i = 0; i < galcolumn.length; ++i) {
      galcolumn[i].style.visibility="hidden";
    }
  var bildetxt=document.getElementsByTagName("p")
  for (var i = 0; i < bildetxt.length; ++i) {
      if(imgs.alt==bildetxt[i].id){
        imgText.innerHTML = imgs.alt +"<br />" +"<br />"+bildetxt[i].textContent
      }
    }
}

function backtogal(){
  var oldgallery = document.getElementsByClassName('galcolumn');
  for (var i = 0; i < oldgallery.length; ++i) {
      oldgallery[i].style.visibility="visible";
    }
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.parentElement.style.display="none";
  imgText.parentElement.style.display="none";
}
