c = document.createElement('canvas')
c.width = 800;
c.height = 600;
document.body.appendChild(c);
ctx = c.getContext('2d');
ctx.begnPath();
ctx.fillRect(0,0,800,600);
ctx.closePath();
