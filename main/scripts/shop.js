var handlekurv = [
  ["Lerke", 0],
  ["Pin", 0],
  ["Dalje", 0],
  ["Epost", 0]
]

var lerkeNum = 0;
var pinNum = 0;
var daljeNum = 0;
var pris = 0;

var lerkeT = document.getElementById("lerkeT");
var pinT = document.getElementById("pinT");
var daljeT = document.getElementById("daljeT");
var prisT = document.getElementById("totalPris");

var textBox = document.getElementById("textBox");
var kontaktInfo = document.getElementById("kontaktInfo");
var takk = document.getElementById("takk");

var lerke = document.getElementById("lerke");
lerke.addEventListener("click", function() {
  textBox.style.display = "block";
  takk.style.display = "none";
  handlekurv[0][1] += 1;
  lerkeNum += 1;
  lerkeT.innerHTML = "Lerke: " + lerkeNum;
  pris += 200;
  prisT.innerHTML = "Totalpris: " + pris + "kr";
});

var pin = document.getElementById("pin");
pin.addEventListener("click", function() {
  textBox.style.display = "block";
  takk.style.display = "none";
  handlekurv[1][1] += 1;
  pinNum += 1;
  pinT.innerHTML = "Pin: " + pinNum;
  pris += 20;
  prisT.innerHTML = "Totalpris: " + pris + "kr";
});

var dalje = document.getElementById("dalje");
dalje.addEventListener("click", function() {
  textBox.style.display = "block";
  takk.style.display = "none";
  handlekurv[2][1] += 1;
  daljeNum += 1;
  daljeT.innerHTML = "Dalje: " + daljeNum;
  pris += 50;
  prisT.innerHTML = "Totalpris: " + pris + "kr";
});

var slettBestilling = document.getElementById("slettBestilling");
slettBestilling.addEventListener("click", function() {
  location.reload();
});

var videre = document.getElementById("videre");
videre.addEventListener("click", function() {
  kontaktInfo.style.display = "block";
});

var validateTekst = document.getElementById("validateTekst");
var bestill = document.getElementById("bestill");
bestill.addEventListener("click", function() {
  var epost = document.getElementById("epost").value;

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(epost)) {
    handlekurv[3][1] = epost;
    kontaktInfo.style.display = "none";
    textBox.style.display = "none";
    takk.style.display = "block";
    validateTekst.style.display = "none";
    console.log(handlekurv);
  } else {
    validateTekst.style.display = "block";
  }
});
