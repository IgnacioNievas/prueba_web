'use strict'
const e = document.getElementById('g');
e.addEventListener('click', () => { this.location = 'web5.html'; });
const ne = document.getElementById('v');
ne.addEventListener('click', () => { this.location = 'web7.html'; });

const mv = document.getElementById('m');
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
const mx = document.getElementById('c');
mx.addEventListener('ended', () => {
    let g = confirm('reproducir el siguente video toque aceptar o cancelar para el anterior?')
    if (g) {
        ma.play();
    } else {
        mn.play()
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