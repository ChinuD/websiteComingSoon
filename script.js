let countDownDate = new Date("Nov 15, 2024 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / 1000);

    let d = days<10 ? "0"+days : days;
    let h = hours<10 ? "0"+hours : hours;
    let m = hours<10 ? "0"+minutes : minutes;
    let s = hours<10 ? "0"+seconds : seconds;
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
},1000);
