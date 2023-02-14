const { writeFile } = require('fs');
const { Circle, Triangle, Square } = require('./shapes');


const makeSVG = data => {

    let newShape;

    if(data.shape == 'triangle') {
        newShape = new Triangle(data.shapeColor, data.textColor, data.text).render();
    } else if(data.shape == 'circle') {
        newShape = new Circle(data.shapeColor, data.textColor, data.text).render();
    } else {
        newShape = new Square(data.shapeColor, data.textColor, data.text).render();
    }
     writeFile('./examples/logo.svg', newShape, ()=> console.log('Find your newly created logo.svg in the examples folder!'));
}


module.exports = makeSVG;