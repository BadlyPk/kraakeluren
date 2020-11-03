var d = new Date();
const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
var year = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
var day = d.getDay();

document.getElementById("year").innerHTML = year;
document.getElementById("month").innerHTML = months[month];

var ref = day;
var i = date;
while(i > 0){
  i--;
  ref = (((ref - 1) % 7) + 7) % 7;
}
function createCalendar(y, m, d, ref){  
  var r1 = document.createElement("div");
}
