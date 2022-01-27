


function area () {
    var length = prompt("What is your lenght?", 6);
    var breath = prompt("What is your breath?", 5);
    var area = 1/2 * length * breath;
    var hypo = Math.sqrt(length*length + breath*breath);
    document.getElementById("Area").innerHTML = area;

    draw();
    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      
          ctx.beginPath();
          ctx.lineTo(0,0);
          ctx.lineTo(breath, 0);
          ctx.lineTo(breath, length);
          ctx.lineTo(-breath, -length);
          ctx.fill();
        }
      }

}

/*
          ctx.moveTo(75, 50);
          ctx.lineTo(100, 75);
          ctx.lineTo(100, 25);
*/
