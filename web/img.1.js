'use strict'

function g() {
    if (f.id === 'f1') {
        f.src = 'ftos/foto2.jpg';
        f.id = 'f2';
    } else if (f.id === 'f2') {
        f.src = 'ftos/foto3.jpg';
        f.id = 'f3';
    } else if (f.id === 'f3') {
        f.src = 'ftos/foto4.jpg';
        f.id = 'f4';
    } else {
        f.src = 'ftos/foto1.jpg';
        f.id = 'f1';
    }
}

var f = document.createElement('img')
f.src = 'ftos/foto1.jpg';
f.id = 'f1';
f.width = 400;
document.body.appendChild(f);

var te =
    setInterval(() => {
        g()
    }, 1000)



f.addEventListener('mouseover',
    function() {
        if (f.id === 'f1') {
            f.src = 'ftos/foto2.jpg';
            f.id = 'f2';
            clearInterval(te)
        } else {
            setTimeout(() => {
                g()
            }, 20);
        }
    });