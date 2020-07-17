var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

ctx.lineWidth = 0.5;         // Définition de la largeur de ligne
ctx.strokeStyle = "black";
ctx.strokeRect(50,50,400,300);


ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(50,50,400,300);

ctx.beginPath();
ctx.arc(250,200,80,0,Math.PI*2,true);
ctx.fillStyle = "#d91313";
ctx.fill();