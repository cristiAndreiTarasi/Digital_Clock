
const hour   = document.querySelector('.fore .hour'),
    minute   = document.querySelector('.fore .minute'),
    second   = document.querySelector('.fore .second'),
    clock    = document.querySelector('.clock'),
    screen   = document.querySelector('.screen');

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

//swap css  sheets  at pressing on the theme swap button
 document.getElementById('theme').addEventListener('click', () => {
    let  sheet = document.styleSheets[1];
    sheet.disabled ? sheet.disabled  =  false : sheet.disabled = true;
}, false);


