var current = new Date();
var currentYear = current.getFullYear();
var currentMonth = current.getMonth() + 1;
var currentDate = current.getDate();

var y = currentYear;
var m = currentMonth;

const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
document.getElementById("year").innerHTML = currentYear;
document.getElementById("month").innerHTML = months[currentMonth - 1];

//events format:
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
  description: ""
}
];

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


function createCalendar(){
  var timestampString = m.toString() + " " + "01" + " " + y.toString();
  var timestamp = Date.parse(timestampString);
  var d = new Date(timestamp);
  var fdom = (d.getDay() + 6) % 7;  //First day of month, 0=Mon 1=Tue, 2=Wed ...
  var ldom = 0;                     //Last date of month

  if (m == 2){                      //Update ldom based on month and leapyear
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

  var eiM = events.filter(e => e.yr === y && e.mo === m);   //Find all events in this month and year

  var i = 1;
  while(i <= ldom){
    var r = document.createElement("div");
    r.className = "fixedRow";

    var j;
    for (j = 0; j < 7; j++){
      var cdb = document.createElement("div");
      cdb.className = "calendarDateBox";
      if (j == fdom && i <= ldom){
        if (y === currentYear && m === currentMonth && i === currentDate){
          cdb.style.backgroundColor = "#AABBFF";
          cdb.style.border = "2px solid #000000"
        }

        var db = document.createElement("div");
        db.className = "dateBox";
        db.innerHTML = i.toString();
        cdb.appendChild(db);

        var ed = eiM.find(e => e.da === i);
        if (ed != undefined){
          cdb.style.cursor = "pointer";
          cdb.setAttribute("onclick","popUp(this);");
          var eb = document.createElement("div");
          eb.className = "eventBox";
          eb.innerHTML = ed.event;
          cdb.appendChild(eb);
        }

        i++;
        fdom = (fdom + 1) % 7;
      }
      r.appendChild(cdb);
    }
    document.getElementById("calendarContainer").appendChild(r);
  }
}

function nextMonth(){
  if (m === 12){
    m = 1;
    y++;
    document.getElementById("year").innerHTML = y;
  } else {
    m++;
  }
  document.getElementById("month").innerHTML = months[m - 1];
  document.getElementById("calendarContainer").innerHTML = "";
  createCalendar();
}

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

function popUp(box){
  var cover = document.createElement("div");
  cover.id = "screenCover";
  var popup = document.createElement("div");
  popup.className = "calendarDescription";
  var title = document.createElement("div");
  title.className = "fixedRow";
  title.style.justifyContent = "space-between";
  var d = box.children[0].innerHTML;
  var titleEvent = events.find(e => e.yr === y && e.mo === m && e.da == d);

  var h = document.createElement("H2");
  h.style.margin = "15px 10px 1em 10px";
  var t = "";
  if (parseInt(d) < 10){
    t = "0";
  }
  var t = t + d + "/" + titleEvent.mo + "-" + titleEvent.yr + ": " + titleEvent.event;
  h.appendChild(document.createTextNode(t));
  title.appendChild(h);

  var i = document.createElement("I");
  i.className = "fa fa-times fa-3x cross";
  i.onclick = function(){
    document.getElementById("screenCover").remove();
  }
  title.appendChild(i);

  popup.appendChild(title);
  cover.appendChild(popup);
  document.body.appendChild(cover);
}

createCalendar();
