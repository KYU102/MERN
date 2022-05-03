class Ninja {
    constructor(name, health = 10, speed = 3, strenth = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strenth = strenth;
    }
    sayName = () => console.log(this.name);

    showStats = () => {
        console.log("name is: ", this.name)
        console.log("strenth is: ", this.strenth)
        console.log("health is: ", this.health)
        console.log("speed is: ", this.speed)
    }
    drinkSake = () => this.health += 10

}

class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom = 10
    }

    speakWisdom = () => {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake()
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

