//From https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp (with some of our changes)

window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
  document.getElementById("navbar").style.padding = "30px 10px";
  document.getElementById("Logo").style.width = '100px';
  document.getElementById("Logo").style.height = '100px';
  } else {
  document.getElementById("navbar").style.padding = "80px 10px";
  document.getElementById("Logo").style.width = '150px';
  document.getElementById("Logo").style.height = '150px';
  }
}
