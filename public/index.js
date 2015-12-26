
var canvas,context;
window.onload = function() {
    canvas = document.getElementById('shapeCanvas');
    context = canvas.getContext('2d');
    var socket = io.connect('localhost:8001');
    socket.on('newShape',function(shape){
      console.log('coming here');
        drawShape(shape);
    });
};
function drawShape(shape) {
    context.beginPath();
    context.moveTo(parseInt(shape.points[0].x/2),parseInt(shape.points[0].y/2));
    for(var i=1;i<shape.points.length;i++) {
        context.lineTo(parseInt(shape.points[i].x/2),parseInt(shape.points[i].y/2));
    }
    if((shape.closedState)) {
        context.fill();
        console.log('filled');
    }
    else {
        context.stroke();
        console.log('stroked');
    }

}
