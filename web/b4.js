'use strict'
const e = document.getElementById('m');
e.addEventListener('click', () => { window.location = 'web4.html'; });
const ne = document.getElementById('c');
ne.addEventListener('click', () => { window.location = 'web6.html'; });

const mv = document.getElementById('me');
mv.addEventListener('ended', () => {
    let g = confirm('reproducir siguente video')
    if (g) {
        mn.play();
    }
})

const mn = document.getElementById('ne');
mn.addEventListener('ended', () => {
    let g = confirm('reproducir el siguente video toque aceptar o cancelar para el anterior?')
    if (g) {
        mx.play();
    } else {
        mv.play();
    }
})
const mx = document.getElementById('cr');