var current = new Date();
var currentYear = current.getFullYear();
var currentMonth = current.getMonth();
var currentDay = current.getDay();
const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

document.getElementById("year").innerHTML = currentYear;
document.getElementById("month").innerHTML = months[currentMonth];

var events = [
{
  yr: 2020,
  mo: 9,
  da: 7,
  event: "Åpning av identitetsarealet for LUR"
},
{
  yr: 2020,
  mo: 9,
  da: 9,
  event: "Semesterets første Kråkeøving"
},
{
  yr: 2020,
  mo: 9,
  da: 11,
  event: "Spanskrørets opptakstur"
},
{
  yr: 2020,
  mo: 9,
  da: 17,
  event: "Semesterets andre Kråkeøving"
},
{
  yr: 2020,
  mo: 9,
  da: 19,
  event: "Spanskrørets immatrikuleringsball 2020"
},
{
  yr: 2020,
  mo: 9,
  da: 26,
  event: "Kråkelurens Lavvotur 2020"
},
{
  yr: 2020,
  mo: 10,
  da: 8,
  event: "Semesterets første kjellerøving"
},
{
  yr: 2020,
  mo: 10,
  da: 11,
  event: "Spanskrøret idrett 10-års jubileum"
},
{
  yr: 2020,
  mo: 10,
  da: 21,
  event: "Semesterets andre kjellerøving"
},
{
  yr: 2020,
  mo: 10,
  da: 30,
  event: "XYZ-faktor 2020"
},
{
  yr: 2020,
  mo: 11,
  da: 7,
  event: "Julekos med Spanskrøret"
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


function createCalendar(y, m){
  var timestampString = (m + 1).toString() + " " + "01" + " " + y.toString();
  var timestamp = Date.parse(timestampString);
  var d = new Date(timestamp);
  var fdom = (d.getDay() + 6) % 7;  //First day of month, 0=Mon 1=Tue, 2=Wed ...
  var ldom = 0;                     //Last date of month

  if (m == 1){                      //Update ldom based on month and leapyear
    if (isLeap(y)){
      ldom = 29;
    } else {
      ldom = 28;
    }
  } else if (m < 7 && m % 2 === 0 || m > 6 && m % 2 === 1){
    ldom = 31;
  } else {
    ldom = 30;
  }

  var eiM = events.filter(e => e.yr === y && e.mo === (m + 1));   //Find all events in this month and year

  var i = 1;
  while(i <= ldom){
    var r = document.createElement("div");
    r.className = "fixedRow";

    var j;
    for (j = 0; j < 7; j++){
      var cdb = document.createElement("div");
      cdb.className = "calendarDateBox";
      if (j == fdom && i <= ldom){
        var db = document.createElement("div");
        db.className = "dateBox";
        db.innerHTML = i.toString();
        cdb.appendChild(db);

        var ed = eiM.find(e => e.da === i);
        if (ed != undefined){
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

createCalendar(currentYear, currentMonth);
