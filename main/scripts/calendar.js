var current = new Date();
var currentYear = current.getFullYear();
var currentMonth = current.getMonth() + 1;
var currentDate = current.getDate();

var y = currentYear;
var m = currentMonth;

const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
document.getElementById("year").innerHTML = currentYear;
document.getElementById("month").innerHTML = months[currentMonth - 1];

//Event format:
//yr: yyyy
//mo: mm
//da: d / dd
//event: Kort beskrivelse av aktivitet
//description: lang beskrivelse av aktivitet for popup
var events = [
{
  yr: 2020,
  mo: 9,
  da: 7,
  event: "Åpning av identitetsarealet for LUR",
  description: ""
},
{
  yr: 2020,
  mo: 9,
  da: 9,
  event: "Semesterets første Kråkeøving",
  description: ""
},
{
  yr: 2020,
  mo: 9,
  da: 11,
  event: "Spanskrørets opptakstur",
  description: ""
},
{
  yr: 2020,
  mo: 9,
  da: 17,
  event: "Semesterets andre Kråkeøving",
  description: ""
},
{
  yr: 2020,
  mo: 9,
  da: 19,
  event: "Spanskrørets immatrikuleringsball 2020",
  description: ""
},
{
  yr: 2020,
  mo: 9,
  da: 26,
  event: "Kråkelurens Lavvotur 2020",
  description: ""
},
{
  yr: 2020,
  mo: 10,
  da: 8,
  event: "Semesterets første kjellerøving",
  description: ""
},
{
  yr: 2020,
  mo: 10,
  da: 11,
  event: "Spanskrøret idrett 10-års jubileum",
  description: ""
},
{
  yr: 2020,
  mo: 10,
  da: 21,
  event: "Semesterets andre kjellerøving",
  description: ""
},
{
  yr: 2020,
  mo: 10,
  da: 30,
  event: "XYZ-faktor 2020",
  description: ""
},
{
  yr: 2020,
  mo: 11,
  da: 7,
  event: "Julekos med Spanskrøret",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu quam, aliquam non tortor et, pharetra placerat sem. Morbi posuere ultrices hendrerit. Aliquam felis massa, tincidunt in tortor quis, porttitor porta tellus. Mauris vel diam at dui semper vulputate. Curabitur consequat, lectus quis dictum laoreet, nulla arcu ultricies sapien, euismod."
}
];

//Sjekker om året er skuddår, funnet her "https://www.geeksforgeeks.org/program-check-given-year-leap-year/"
function isLeap(y){
  if(y % 400 === 0){
    return true;
  } else if (y % 100 === 0){
    return false;
  } else if (y % 4 === 0){
    return true;
  }
  return false;
}

//Lager kalendermåned basert på globale variable y og m
function createCalendar(){
  var timestampString = m.toString() + " " + "01" + " " + y.toString();
  var timestamp = Date.parse(timestampString);
  var d = new Date(timestamp);
  var fdom = (d.getDay() + 6) % 7;  //First day of month, 0=Mon 1=Tue, 2=Wed ...
  var ldom = 0;                     //Last date of month

  if (m == 2){                      //Oppdater ldom basert på måned og skuddår
    if (isLeap(y)){
      ldom = 29;
    } else {
      ldom = 28;
    }
  } else if (m < 8 && m % 2 === 1 || m > 7 && m % 2 === 0){
    ldom = 31;
  } else {
    ldom = 30;
  }

  var eiM = events.filter(e => e.yr === y && e.mo === m);   //Finner alle event objects i denne måneden

  var i = 1;
  while(i <= ldom){                                        //Itererer over alle dagene i måneden
    var r = document.createElement("div");                 //En rad for hver uke
    r.className = "fixedRow";

    var j;
    for (j = 0; j < 7; j++){                              //Itererer over alle dagene i en uke
      var cdb = document.createElement("div");            //En boks for hver dato
      cdb.className = "calendarDateBox";
      if (j == fdom && i <= ldom){                        //Legger bare til ting i boksene etter dato stemmer med dagen den skal være på og før siste dato
        if (y === currentYear && m === currentMonth && i === currentDate){    //Styler nådagen litt annerledes
          cdb.style.backgroundColor = "#AABBFF";
          cdb.style.border = "2px solid #000000";
          cdb.style.borderRadius = "6px";
        }

        var db = document.createElement("div");           //Boks for datotallet
        db.className = "dateBox";
        db.innerHTML = i.toString();
        cdb.appendChild(db);

        var ed = eiM.find(e => e.da === i);               //Finner dagens event object
        if (ed != undefined){
          cdb.style.cursor = "pointer";                   //Gir boks popupfunksjon og pointer pga event
          cdb.setAttribute("onclick","popUp(this);");

          var eb = document.createElement("div");         //Boks for kort beskrivelse av event
          eb.className = "eventBox";
          eb.innerHTML = ed.event;
          cdb.appendChild(eb);
        }

        i++;                        //Neste dag
        fdom = (fdom + 1) % 7;      //For å holde lik med j
      }
      r.appendChild(cdb);           //Legg boks til i rad
    }
    document.getElementById("calendarContainer").appendChild(r);  //Legg til rad i kalender
  }
}

//Funksjon for å oppdatere kalender for neste måned
function nextMonth(){
  if (m === 12){        //Overflow til neste år
    m = 1;
    y++;
    document.getElementById("year").innerHTML = y;
  } else {
    m++;
  }
  document.getElementById("month").innerHTML = months[m - 1];
  document.getElementById("calendarContainer").innerHTML = "";  //Fjerner forrige kalendermåned
  createCalendar();                                             //Lager ny
}

//Funksjon for å oppdatere kalender for forrige måned
function prevMonth(){
  if (m === 1){
    m = 12;
    y--;
    document.getElementById("year").innerHTML = y;
  } else {
    m--;
  }
  document.getElementById("month").innerHTML = months[m - 1];
  document.getElementById("calendarContainer").innerHTML = "";
  createCalendar();
}

//Funksjon for å lage popup boks når man klikker på en dato med en event
function popUp(box){
  var cover = document.createElement("div");    //Lager div som dekker kalenderen så man ikke kan klikke på ting i kalenderen
  cover.id = "screenCover";
  cover.onmousedown = function(e){              //Fjerner popup når man klikker utfor boksen
    if (e.target.id === "screenCover"){
      this.remove();
    }
  }

  var popup = document.createElement("div");    //Boks for popup
  popup.className = "calendarDescription";

  var title = document.createElement("div");    //Boks for dato + tittel på event
  title.className = "fixedRow";
  title.style.justifyContent = "space-between";

  var d = box.children[0].innerHTML;            //Henter igjen dato for å finne riktig event
  var dayEvent = events.find(e => e.yr === y && e.mo === m && e.da == d);   //Henter event objekt

  var h = document.createElement("H2");         //h2 tag for dato + tittel
  h.style.margin = "auto";
  var t = "";
  if (parseInt(d) < 10){    //Legger på 0 før dato mellom 1-9 -> eks: 05 for den femte
    t = "0";
  }
  t = t + d + "/" + dayEvent.mo + "-" + dayEvent.yr;        //Fullfører date
  h.appendChild(document.createTextNode(t));                //legger til dato
  h.appendChild(document.createElement("BR"));              //Lineshift
  h.appendChild(document.createTextNode(dayEvent.event))    //Tittel
  title.appendChild(h);

  var i = document.createElement("I");                      //I tag for å holde kryssicon
  i.className = "fa fa-times fa-3x cross";                  //Kryss fra font awesome
  i.onclick = function(){                                   //Legger på onclick funksjon på kryss for å fjerne popup
    document.getElementById("screenCover").remove();
  }
  title.appendChild(i);
  popup.appendChild(title);                                 //Legger tittel til popupboks

  //Lager boks for lengre beskrivelse av event
  var desc = document.createElement("div");
  desc.className = "fixedRow";
  var p = document.createElement("P");
  p.innerHTML = dayEvent.description;
  p.style.margin = "15px";
  desc.appendChild(p);
  popup.appendChild(desc);

  //Fest popup på cover og cover på body
  cover.appendChild(popup);
  document.body.appendChild(cover);
}

//Lager initial kalender for nådagen
createCalendar();
