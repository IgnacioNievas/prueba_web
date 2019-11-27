'use strict'
// twitter

var vnb = document.createElement('img');
vnb.src = 'ftos/foto5.jpg';
vnb.width = 50;
document.body.appendChild(vnb);
vnb.addEventListener('click', () => { this.location = 'https://twitter.com/Nacho_BJiuJitsu' });

// instagram
var vmb = document.createElement('img');
vmb.src = 'ftos/foto6.jpg';
vmb.width = 50;
document.body.appendChild(vmb);
vmb.addEventListener('click', () => { this.location = 'https://www.instagram.com/nievas.ignacio/' });

// facebook

var vab = document.createElement('img');
vab.src = 'ftos/foto7.jpg';
vab.width = 50;
document.body.appendChild(vab);
vab.addEventListener('click', () => { this.location = 'https://www.facebook.com/nacho.ele' });
//github

var vsb = document.createElement('img');
vsb.src = 'ftos/foto8.jpg';
vsb.width = 50;
document.body.appendChild(vsb);
vsb.addEventListener('click', () => { this.location = 'https://github.com/IgnacioNievas/calculadora' });