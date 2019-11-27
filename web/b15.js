'use strict'
const e = document.getElementById('x');
e.addEventListener('click', () => { this.location = 'web15.html'; });
const ne = document.getElementById('n');
ne.addEventListener('click', () => { this.location = 'web17.html'; });

const mv = document.getElementById('me');
mv.addEventListener('ended', () => {
    let g = confirm('reproducir siguente video')
    if (g) {
        mn.play();
    }
})

const mn = document.getElementById('ne');
mn.addEventListener('ended', () => {
    let g = confirm('reproducir siguente video')
    if (g) {
        mx.play();
    }
})
const mx = document.getElementById('cr');
mx.addEventListener('ended', () => {
    let g = confirm('reproducir siguente video')
    if (g) {
        ma.play();
    }
})

const ma = document.getElementById('a');
ma.addEventListener('ended', () => {
    let g = confirm('reproducir el siguente video toque aceptar o cancelar para el anterior?')
    if (g) {
        md.play();
    } else {
        mx.play();
    }
})

const md = document.getElementById('p');
md.addEventListener('ended', () => {
    let g = confirm('reproducir el siguente video toque aceptar o cancelar para el anterior?')
    if (g) {
        mf.play();
    } else {
        ma.play();
    }
})

const mf = document.getElementById('o');