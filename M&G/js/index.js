////////////////////////////////
///////// Discount Timer ///////
//////////////////////////////


var countdown = new Date("sep 20, 2022 00:00:00").getTime();

function count() {
    let now = new Date().getTime();
    let count = countdown - now;
    var days = Math.floor(count / (1000 * 60 * 60 * 24));
    var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((count % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("secounds").innerHTML = seconds;
}
setInterval(count, 1000)