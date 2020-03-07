function Animal(animalClass, color) {
    this.class = animalClass;
    this.color = color;
    this.sayHi = function () {
        console.log("the color of this animal is"+ this.color)
    };
    this.animalClass = function () {
        console.log("The animal class is" + this.animalClass);
    }
}
let Cat = new Animal("chord", "grey");
let Horse = new Animal("chord", "brown");
let Dog = new Animal("chord", "white");
lettmpObj = new Object();
console.dir(Cat);
console.dir(Horse);
console.dir(Dog);