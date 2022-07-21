const canvas = document.getElementById("myCanvas");
        canvas.width = 300;
        canvas.height = 300;

        const ctx = canvas.getContext("2d");

        ctx.lineWidth = 0.01;

        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(canvas.width*0.5, canvas.height*0.5);
        const img = new Image();
        img.src="me2.png"; 

        img.onload = function(){
            ctx.globalAlpha = 0.2;
            ctx.drawImage(img, -1, -1, 2, 2)
            ctx.globalAlpha = 1;

            drawMe();
        }

        canvas.addEventListener("click", getCoords);
        function getCoords(evt){
            const x = (evt.x-canvas.width/2)/(canvas.width/2)  
            const y = (evt.y-canvas.height/2)/(canvas.height/2)
            console.log(x.toFixed(2)+","+y.toFixed(2));
            
        }

        function drawMe(){
            drawBody();
            drawHead();

            drawPoint({x: 0, y: -0.13}, 'A');
        }
        function drawHead(){
            ctx.beginPath();
            ctx.moveTo(0, -0.77);
            ctx.lineTo(0, 0.46);
            ctx.moveTo(-0.41, -0.13);
            ctx.lineTo(0.38, -0.12);
            ctx.stroke();
        }
        function drawBody(){
            ctx.beginPath();
            ctx.moveTo(0, -0.77);
            ctx.quadraticCurveTo(-0.44, -0.71, -0.41, -0.13);
            ctx.quadraticCurveTo(-0.37, 0.28, 0, 0.46);
            ctx.quadraticCurveTo(+0.37, 0.28, 0.38, -0.12);
            ctx.quadraticCurveTo(+0.44, -0.71, 0, -0.77);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(-0.32, 0.23);
            ctx.quadraticCurveTo(-0.30, 0.36, -0.35, 0.65);
            ctx.lineTo(-0.61, 0.79);
            ctx.lineTo(-0.61, 1.1);
            ctx.lineTo(+0.61, 1.1);
            ctx.lineTo(+0.57, 0.82);
            ctx.lineTo(+0.28, 0.67);
            ctx.quadraticCurveTo(0.21, 0.48, 0.24, 0.30);
            ctx.stroke(); 
        }

        function drawPoint(loc, label, rad = 0.07){
            ctx.beginPath();
            ctx.arc(loc.x, loc.y, rad, 0, Math.PI*2);
            ctx.stroke();
            ctx.fillStyle = "lime";
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font =(rad*1.5)+"px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(label, loc.x, loc.y+rad*0.2);
        }


        function updatePoint(info){
            console.log(info);
        }