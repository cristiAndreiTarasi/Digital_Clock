
const hour   = document.querySelector('.fore .hour'),
minute   = document.querySelector('.fore .minute'),
second   = document.querySelector('.fore .second'),
clock    = document.querySelector('.clock'),
screen   = document.querySelector('.screen');

//Clock
function clockMechanism() {
    //get hour,minute and second
    let d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();

    //add 0 before if less than 10
    let addZero = (i) => {
        if(i < 10) i = '0' + i
        return i;
    }

    //add zero before hour, minute, second
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    //reload the clockMechanism every second
    setInterval(clockMechanism, 1000)
}

//Toggle Theme --> swap css  sheets  at pressing on the theme swap button
document.getElementById('theme').addEventListener('click', () => {
let  sheet = document.styleSheets[1];
sheet.disabled ? sheet.disabled  =  false : sheet.disabled = true;
}, false);

//days highlight functionality
//make the current day take a light color
function currDayColor() {
    //grab every p elem in .days div 
    let  days = document.querySelectorAll('.days > div p');

    //associate every day name in day array with days numbers returned by getDay() method
    //and return the today variable wich holds the getDay() value hence the day it corresponds in the day array
    let date  = new Date();
    let day   = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    let today = day[date.getDay()];

    //find wich day name in .days div matches with the string returned by today variable
    //and change its color
    for(let i = 0, len = days.length; i < len; i++) {
        if(days[i].textContent == today)
            days[i].style.color = '#ddd';
    }
}

//Stopwatch
document.getElementById('stop').addEventListener('click', () => {

}, false);
