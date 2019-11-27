'use strict'
const e = document.getElementById('x');
e.addEventListener('click', () => { this.location = 'web12.html'; });
const ne = document.getElementById('n');
ne.addEventListener('click', () => { this.location = 'web14.html'; });

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
        mv.play()
    }
})
const mx = document.getElementById('cr');