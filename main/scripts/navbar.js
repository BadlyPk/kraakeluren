//From https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp (with some of our changes)
function scrollFunction2() {
  if(window.innerWidth < 1200) {
      document.getElementById("navbar").style.padding = "10px 5px";
      document.getElementById("Logo").style.width = '80px';
      document.getElementById("Logo").style.height = '80px';
  } else {
    window.onscroll = function() {
      scrollFunction()
    };
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("Logo").style.width = '150px';
    document.getElementById("Logo").style.height = '150px';
  }
}

scrollFunction2()

window.onresize = function() {
    scrollFunction2()
};

function scrollFunction() {
  if(window.innerWidth < 1200) {
      document.getElementById("navbar").style.padding = "10px 5px";
  } else if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("Logo").style.width = '90px';
    document.getElementById("Logo").style.height = '90px';
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("Logo").style.width = '150px';
    document.getElementById("Logo").style.height = '150px';
  }
}

function myFunction() {
  var x = document.getElementById("navbar-right");
  if (x.className === "navbar-right") {
    x.className += " responsive";
  } else {
    x.className = "navbar-right";
  }
}
