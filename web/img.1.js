'use strict'

function g() {
    if (f.name === 'f1') {
        f.src = 'ftos/foto2.jpg';
        f.name = 'f2';
    } else if (f.name === 'f2') {
        f.src = 'ftos/foto3.jpg';
        f.name = 'f3';
    } else if (f.name === 'f3') {
        f.src = 'ftos/foto4.jpg';
        f.name = 'f4';
    } else {
        f.src = 'ftos/foto1.jpg';
        f.name = 'f1';
    }
}

var f = document.createElement('img')
f.src = 'ftos/foto1.jpg';
f.name = 'f1';
f.width = 400;
document.body.appendChild(f);

var te = setInterval(function() {
    g()
}, 1000)


f.addEventListener('mouseover',
    function() {
        if (f.name === 'f1') {
            f.src = 'ftos/foto2.jpg';
            f.name = 'f2';
            clearInterval(te)
        } else {
            setTimeout(function() {
                g()
            })
        }
    });