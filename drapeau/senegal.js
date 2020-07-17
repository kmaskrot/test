var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

ctx.lineWidth = 0.5;         // Définition de la largeur de ligne
ctx.strokeStyle = "black";
ctx.strokeRect(50,50,400,300);


ctx.fillStyle = 'rgb(28, 119, 0)';
ctx.fillRect(50,50,133,300);

ctx.fillStyle = 'rgb(255, 216, 0)';
ctx.fillRect(183,50,133,300);

ctx.fillStyle = 'rgb(216, 7, 7)';
ctx.fillRect(316,50,133,300);

ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(200,200);
ctx.lineTo(235,200);
ctx.lineTo(250,150);
ctx.lineTo(265,200);
ctx.lineTo(300,200);
ctx.lineTo(275,225);
ctx.lineTo(285,270);
ctx.lineTo(250,245);
ctx.lineTo(220,270);
ctx.lineTo(225,225);
ctx.fillStyle = "#0e5714";

ctx.lineWidth = 5;         // Définition de la largeur de ligne

ctx.fill();            // Application du remplissage
