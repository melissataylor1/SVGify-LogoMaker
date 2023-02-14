
class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
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
