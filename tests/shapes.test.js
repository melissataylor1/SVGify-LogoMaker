const { Circle, Triangle, Square } = require('../lib/shapes');


describe("Circle", () => {
    it("should generate a svg file of a circle with specifications matching user input", () => {
        const shapeColor = "black";
        const textColor = "green";
        const text = "NAC";
        const correctCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        //     <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`

        const makeCircle = () => new Circle(shapeColor, textColor, text).render();

        expect(makeCircle()).toEqual(correctCircle);
    })
})


describe("Triangle", () => {
    it("should generate a svg file of a triangle with specifications matching user input", () => {
        const shapeColor = "black";
        const textColor = "green";
        const text = "NAC";
        const correctTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${shapeColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`

        const makeTriangle = () => new Triangle(shapeColor, textColor, text).render();

        expect(makeTriangle()).toEqual(correctTriangle);
    })
})


describe("Square", () => {
    it("should generate a svg file of a square with specifications matching user input", () => {
        const shapeColor = "black";
        const textColor = "green";
        const text = "NAC";
        const correctSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${shapeColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`

        const makeSquare = () => new Square(shapeColor, textColor, text).render();

        expect(makeSquare()).toEqual(correctSquare);
    })
})




/*

const { Shape, Circle, Triangle, Square } = require('../lib/shapes');

//Generated SVGs should match input accurately for each shape
describe("Square", () => {
    it("should generate a svg file of a square with specifications matching user input", () => {
        const shapeColor = "pink";
        const textColor = "white";
        const text = "MEL";
        const correctSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="15" fill="${this.shapeColor}" />
        <text x="100" y="115" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`

        const makeSquare = () => new Square(shapeColor, textColor, text).render();

        expect(makeSquare()).toEqual(correctSquare);
    })
})

describe("Circle", () => {
    it("should generate a svg file of a circle with specifications matching user input", () => {
        const shapeColor = "black";
        const textColor = "green";
        const text = "MEL";
        const correctCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
        <text x="150" y="120" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`

        const makeCircle = () => new Circle(shapeColor, textColor, text).render();

        expect(makeCircle()).toEqual(correctCircle);
    })
})


describe("Triangle", () => {
    it("should generate a svg file of a triangle with specifications matching user input", () => {
        const shapeColor = "blue";
        const textColor = "yellow";
        const text = "MEL";
        const correctTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100 0, 0 ,0 50, 100" fill="${this.shapeColor}" />
        <text x="155" y="150" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace"text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`

        const makeTriangle = () => new Triangle(shapeColor, textColor, text).render();

        expect(makeTriangle()).toEqual(correctTriangle);
    })
})

//validates input length
describe('Validate input length', () => {
    it('should throw error if logo text is longer than 3', () => {
      const shape = () => new Shape('Hello');
      const err = new Error('Logo text cannot be more than 3 characters');
      expect(shape).toThrowError(err);
    });
  });


//validates if there is no input
  describe('If input empty method', () => {
    it('should throw an error if input is empty', () => {
      const shape = () => new Shape();
      const err = new Error('Input cannot be empty');
      expect(shape).toThrow(err);
    });
  });


  //validates color input
  describe('Invalid colour input', () => {
    it('should throw error if input is not a vaild css colour', () => {
      const shape = () => new Shape('MEL', 'Wrong');
      const err = new Error(
        'Please enter a vaild css color keyword or hex code'
      );
      expect(shape).toThrowError(err);
    });
  });
