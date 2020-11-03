var current = new Date();
var currentYear = current.getFullYear();
var currentMonth = current.getMonth();
var currentDay = current.getDay();
const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

document.getElementById("year").innerHTML = currentYear;
document.getElementById("month").innerHTML = months[currentMonth];

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

  var i = 1;
  while(i <= ldom){
    var r = document.createElement("div");
    r.className = "fixedRow";

    var j;
    for (j = 0; j < 7; j++){
      var cdb = document.createElement("div");
      cdb.className = "calendarDateBox";
      if (j == fdom && i <= ldom){
        cdb.innerHTML = i.toString();
        i++;
        fdom = (fdom + 1) % 7;
      }
      r.appendChild(cdb);
    }
    document.getElementById("calendarContainer").appendChild(r);
  }
}

createCalendar(currentYear, currentMonth);
