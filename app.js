
const hour   = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function clockMechanism() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let addZero = (i) => { 
        if(i < 10) i = '0' + i
        return i;
    }

    h = addZero(h);
    m = addZero(m);
    s = addZero(s);

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    setInterval(clockMechanism, 1000)
}



