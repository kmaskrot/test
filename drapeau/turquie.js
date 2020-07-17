var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");
ctx.lineWidth = 0.5;         // Définition de la largeur de ligne
ctx.strokeStyle = "black";
ctx.strokeRect(50,50,400,300);


ctx.fillStyle = 'rgb(244, 38, 38)';
ctx.fillRect(50,50,400,300);

ctx.beginPath();
ctx.arc(170,200,90,0,Math.PI*2,true);
ctx.fillStyle = "#ffffff";
ctx.fill();


ctx.beginPath();
ctx.arc(190,200,80,0,Math.PI*2,true);
ctx.fillStyle = 'rgb(244, 38, 38)';
ctx.fill();


ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(210,200);
ctx.lineTo(230,190);
ctx.lineTo(230,160);
ctx.lineTo(250,180);
ctx.lineTo(270,170);
ctx.lineTo(260,195);
ctx.lineTo(285,215);
ctx.lineTo(252,210);
ctx.lineTo(235,240);
ctx.lineTo(235,210);
ctx.fillStyle = "#ffffff";

ctx.lineWidth = 5;         // Définition de la largeur de ligne

ctx.fill();            // Application du remplissage


