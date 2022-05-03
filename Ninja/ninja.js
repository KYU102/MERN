class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strenth = 3;
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
