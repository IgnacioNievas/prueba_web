'use strict'
var cont = document.getElementById('banderas');
//botones
// *boton Ver video:
const v = document.getElementById('on');
v.addEventListener('click', () => { window.location = 'https://www.youtube.com/watch?v=8lp20JFiB4s'; })
    // *boton Cambiar el contenido :
const ver = document.getElementById('o');
ver.addEventListener('click', () => { this.location = 'web2.html'; });
// *boton Programación Web Full Stack :
const ve = document.getElementById("Bo");
ve.addEventListener('click',
    function() {
        window.location = 'https://damiandeluca.com.ar/que-significa-ser-desarrollador-web-full-stack';
    }
);

// // *boton Ver las banderas: 
const m = document.getElementById("boton");
m.addEventListener('click', function() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(re => {
            cox(re);
        })
});

function cox(re) {

    re.map(m => {
        let vb = document.createElement('img');
        vb.src = m.flag;
        vb.height = '20';
        vb.width = '20';
        vb.border = '1px black';
        vb.style.margin = '5px';
        cont.appendChild(vb);
    })
}