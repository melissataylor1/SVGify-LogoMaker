class Shape {
    constructor(shapeColor, textColor, text) {
   
    this.vaildTextInput(text);
    this.text = text;

    this.vaildColorInput(textColor);
    this.textColor = textColor;

    this.vaildColorInput(shapeColor);
    this.shapeColor = shapeColor;
  }
  

  //input error messages
  ifInputEmpty(input) {
    if (!input) throw new Error('Input cannot be empty');
  }

  vaildTextInput(input) {
    this.ifInputEmpty(input);

    if (input.length > 3) {
      throw new Error('Logo text cannot be more than 3 characters');
    }
  }

  vaildColorInput(input) {
    this.ifInputEmpty(input);

//Change all css named color to lowercase
    input = input.toLowerCase();
  }
}


//square specs
class Square extends Shape {
    constructor(shapeColor, textColor, text) 

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="15" fill="${this.shapeColor}" />
        <text x="100" y="115" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

//circle specs 
class Circle extends Shape {
    constructor(shapeColor, textColor, text)

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
        <text x="150" y="120" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

//triangle specs
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) 
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100 0, 0 ,0 50, 100" fill="${this.shapeColor}" />
        <text x="155" y="150" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace"text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };
