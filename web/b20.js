'use strict'
const e = document.getElementById('g');
e.addEventListener('click', () => { this.location = 'web20.html'; });
const ne = document.getElementById('v');
ne.addEventListener('click', () => { this.location = 'web2.html'; });

const mv = document.getElementById('me');
mv.addEventListener('ended', () => {
    let g = confirm('reproducir siguente video')
    if (g) {
        mn.play();
    }
})

const mn = document.getElementById('ne');
mn.addEventListener('ended',
    () => {
        let g = prompt('que te a parecido el curso?, \n alguna sugerencia?', 'respuesta');
        if (g == null || g == '') {
            console.log('el forro no quiso comentar')
        } else {
            console.log('el comentario fue', g)
        }
    })