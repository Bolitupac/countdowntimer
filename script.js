
var targetDate = new Date();
targetDate.setDate(targetDate.getDate()+ 9);
var x = setInterval(function() {
    const currentDate = new Date();
    var now = new Date().getTime();
    var distance = targetDate - currentDate;
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
},1000); 

const futureDate = new Date (currentDate);
futureDate.setDate(currentDate.getDate() + 9);
const options = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric' };
const formattedDate = futureDate.toLocaleDateString('en-US', options);

