// TestShape.ts 
import shape = require("./ModIShape"); 
import circle = require("./ModCircle"); 
import triangle = require("./ModTriangle");  

function drawAllShapes(shapeToDraw: shape.IShape) {
   shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circle()); 
drawAllShapes(new triangle.Triangle()); 