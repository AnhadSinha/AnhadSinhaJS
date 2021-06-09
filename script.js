let upcomingHolidays = [
    { name: "Test Day", date: new Date("May 17, 2021 00:00:00") },
    { name: "Test Day 2", date: new Date("May 20, 2021 00:00:00") },
    { name: "Arfah Day", date: new Date("Jul 19, 2021 00:00:00") },
    { name: "Eid Al Adha", date: new Date("Jul 20, 2021 00:00:00") },
    { name: "Eid Al Adha Holiday", date: new Date("Jul 21, 2021 00:00:00") },
    { name: "Eid Al Adha Holiday", date: new Date("Jul 22, 2021 00:00:00") },
    { name: "Hijri New Year's Day", date: new Date("Aug 12, 2021 00:00:00") },
    { name: "Prophet Muhammed's Birthday", date: new Date("Oct 21, 2021 00:00:00") },
    { name: "Commemoration Day", date: new Date("Dec 01, 2021 00:00:00") },
    { name: "National Day", date: new Date("Dec 02, 2021 00:00:00") },
    { name: "National Day Holiday", date: new Date("Dec 03, 2021 00:00:00") },
]
console.log(upcomingHolidays);
console.log(upcomingHolidays[0])
console.log(upcomingHolidays[0]["date"].getTime())
/* let countdownDate = (upcomingHolidays[0]["date"].getTime())
var date = new Date().getTime()
let diffDate = countdownDate - date;
console.log(diffDate);
if (diffDate < 0){
    
    let countdownDate = upcomingHolidays[1]["date"].getTime()
} */
let counter = 0;
let countdownDate = upcomingHolidays[counter]["date"];
let countdownName = upcomingHolidays[counter]["name"];
let today = new Date();
console.log(today > countdownDate)
while(today > countdownDate){
    counter ++
    countdownDate = upcomingHolidays[counter]["date"];
    countdownName = upcomingHolidays[counter]["name"];

}
console.log(countdownDate)
console.log(counter)
var x = setInterval(function (){
let theTimeNow = new Date().getTime()
let timeLater = countdownDate.getTime()
let difference = timeLater - theTimeNow;
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference % (1000 * 60)) / 1000);

document.getElementById("solution").innerHTML = days +" days " +hours +" hours " + minutes + " minutes " + seconds + " seconds " ;
document.getElementById("nameOfHoliday").innerHTML = "<br/>"+countdownName+ " on " + countdownDate;

if (difference<0){
    clearInterval(x);
    document.getElementById("solution").innerHTML = "EXPIRED";
}

},1000)

