/* This is a quite simple function to "buy" items. The code lets the user add to cart, view the cart and order. To order the user have to enter their email-address. In reality we would then want the person who manages the shop to get an email about the order, and he/she will see the email address the items are ordered from so he/she can contact the buyer about payment/delivery. This is outside the curriculum, but we have implemented almost the full code; we store the values (number of items and which ones, and email address) in an array without sending the information further. */

/* An empty cart to add items to later */
var handlekurv = [
  ["Lerke", 0],
  ["Pin", 0],
  ["Dalje", 0],
  ["Epost", 0]
]

/* The number of different items in the cart */
var lerkeNum = 0;
var pinNum = 0;
var daljeNum = 0;

/* Variable for the price so that we can display it for the user */
var pris = 0;

/* Get the empty paragraphs and divs, to add stuff later */
var lerkeT = document.getElementById("lerkeT");
var pinT = document.getElementById("pinT");
var daljeT = document.getElementById("daljeT");
var prisT = document.getElementById("totalPris");

var textBox = document.getElementById("textBox");
var kontaktInfo = document.getElementById("kontaktInfo");
var takk = document.getElementById("takk");

/* The following code decides what happens when the uses clicks to add an item to cart */

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

/* Set all values to 0 and remove all blocks if the user wants to empty the cart */
var slettBestilling = document.getElementById("slettBestilling");
slettBestilling.addEventListener("click", function() {
  textBox.style.display = "none";
  takk.style.display = "none";
  kontaktInfo.style.display = "none";
  validateTekst.style.display = "none";

  lerkeNum = 0;
  pinNum = 0;
  daljeNum = 0;
  pris = 0;

  lerkeT.innerHTML = "Lerke: " + lerkeNum;
  pinT.innerHTML = "Pin: " + pinNum;
  daljeT.innerHTML = "Dalje: " + daljeNum;

  handlekurv = [
    ["Lerke", 0],
    ["Pin", 0],
    ["Dalje", 0],
    ["Epost", 0]
  ];
});

/* Let the user enter their email and order */
var videre = document.getElementById("videre");
videre.addEventListener("click", function() {
  kontaktInfo.style.display = "block";
});

/* Validate email and let user order */
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
