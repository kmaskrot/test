var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

ctx.lineWidth = 0.5;         // Définition de la largeur de ligne
ctx.strokeStyle = "black";
ctx.strokeRect(70,50,400,300);


ctx.fillStyle = 'rgb(216, 7, 7)';
ctx.fillRect(70,50,100,300);

ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(262,290);
ctx.lineTo(248,290);
ctx.lineTo(253,225);
ctx.lineTo(195,230);
ctx.lineTo(205,215);
ctx.lineTo(170,180);
ctx.lineTo(185,175);
ctx.lineTo(175,135);
ctx.lineTo(205,140);
ctx.lineTo(212,125);
ctx.bezierCurveTo(235,155,245,170,230,100);
ctx.lineTo(245,107);
ctx.lineTo(260,80);
ctx.lineTo(270,107);
ctx.lineTo(280,100);
ctx.bezierCurveTo(280,100,275,170,285,150);
ctx.lineTo(310,125);
ctx.lineTo(317,140);
ctx.lineTo(347,135);
ctx.lineTo(337,175);
ctx.lineTo(352,180);
ctx.lineTo(317,215);
ctx.lineTo(327,230);
ctx.lineTo(263,225);
ctx.fillStyle = 'rgb(216, 7, 7)';

ctx.lineWidth = 5;         // Définition de la largeur de ligne

ctx.fill();            // Application du remplissage
ctx.fillStyle = 'rgb(216, 7, 7)';
ctx.fillRect(350,50,120,300);
