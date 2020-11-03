var d = new Date();
const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
var year = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
var day = d.getDay();

document.getElementById("year").innerHTML = year;
document.getElementById("month").innerHTML = months[month];

var first = day;
var last = 0;
var i = date;
while(i > 0){
  i--;
  first = (((first - 1) % 7) + 7) % 7;
}

function isLeap(y){
  if(y % 400 == 0){
    return True;
  } else if (y % 100 == 0){
    return False;
  } else if (y % 4 == 0){
    return True;
  }
  return False;
}

function createCalendar(y, m, d, first){
  if (m == 1){
    if (isLeap(y)){

    }
  }
  while(ref > )
  var r1 = document.createElement("div");
}
