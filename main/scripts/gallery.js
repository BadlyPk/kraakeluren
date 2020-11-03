/* Part of the following JavaScript code in inspired by
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
  and
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
  We have used a combination of clickable dots and an automatic change in image. */

var counter = 0;
var rerun;
changeImg(counter, 0);

/* Update the counter when clicking a dot */
function changeImgOnclick(n) {
  counter = n;
  changeImg(counter, 1);
}

function changeImg(counter, click) {

  /* This function changes the image in the carousel once */

  var images = document.getElementsByClassName("cImg");

  /* Set all images to display:none */
  var i;
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  var dots = document.getElementsByClassName("dot");

  var j;
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" currentDot", "");
  }

  /* Show the image with index of the counter, update style of the dots and update the counter */
  images[counter].style.display = "block";
  dots[counter].className += " currentDot";
  counter += 1;

  /* Check that the counter does not index non-existent images and set to 0 (start over again) if it does */
  if (counter > images.length - 1) {
    counter = 0;
  }

  /* If the user clicks a dot, it will stop the rerun so that the function does not run several times at once (without this we would have the images change seemingly random and not with 3 seconds between) */
  if (click === 1) {
    clearTimeout(rerun);
  }

  /* Run the carousel function again after 3 seconds */
  rerun = setTimeout(function() { changeImg(counter, 0); }, 3000);

}
