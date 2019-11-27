'use strict'
// js

var veb = document.createElement('img');
veb.src = 'ftos/foto2.jpg';
veb.width = 100;
document.body.appendChild(veb);

veb.addEventListener('click', () => { window.location = 'web3.html' });

//react
var vxb = document.createElement('img');
vxb.src = 'ftos/foto3.jpg';
vxb.width = 100;
document.body.appendChild(vxb);
vxb.addEventListener('click', () => { alert('Proximamente') });

//java
var vzb = document.createElement('img');
vzb.src = 'ftos/foto1.jpg';
vzb.width = 100;
document.body.appendChild(vzb);
vzb.addEventListener('click', () => { alert('Proximamente') });

// angular 
var vcb = document.createElement('img');
vcb.src = 'ftos/foto4.jpg';
vcb.width = 100;
document.body.appendChild(vcb);
vcb.addEventListener('click', () => { alert('Proximamente') });