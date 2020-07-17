var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

ctx.lineWidth = 0.5;         // Définition de la largeur de ligne
ctx.strokeStyle = "black";
ctx.strokeRect(50,50,400,300);


ctx.fillStyle = 'rgb(244, 38, 38)';
ctx.fillRect(50,50,400,300);

ctx.fillStyle = 'rgb(245, 245, 245)';
ctx.fillRect(225,100,50,200);

ctx.fillStyle = 'rgb(245, 245, 245)';
ctx.fillRect(150,175,200,50);




