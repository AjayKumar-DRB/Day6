class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return `The radius of the circle is ${this.radius}`;
    }

    setRadius(newRadius){
        this.radius = newRadius;
    }

    getColor(){
        return `The color of the circle is ${this.color}`;
    }

    setColor(newColor){
        this.color = newColor;
    }

    toString(){
        return `Circle[radius = ${this.radius}, color=${this.color}]`;
    }

    getArea(){
        return Math.PI*(this.radius**2);
    }

    getCircumference(){
        return 2*Math.PI*this.radius;
    }
}

const circle1 = new Circle(7, "Black")

console.log(circle1.getRadius());
// Output: The radius of the circle is 7

circle1.setRadius(14);
console.log(circle1.getRadius());
// Output: The radius of the circle is 14

console.log(circle1.getColor());
// Output: The color of the circle is Black

circle1.setColor("Grey");
console.log(circle1.getColor());
// Output: The color of the circle is Grey

console.log(circle1.toString());
// Output: Circle[radius=14, color=Grey]

console.log(circle1.getArea());
// Output: 615.7521601

console.log(circle1.getCircumference());
// Output: 87.9645943
