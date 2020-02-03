class Person {

    constructor() {
        this.health = Math.floor(Math.random() * 100 + 1);
        this.wealth = Math.floor(Math.random() * 100 + 1);;
        this.happiness = Math.floor(Math.random() * 100 + 1);;
    }

    healthUp() {
        this.health += Math.floor(Math.random() * 10 + 1);
        console.log(`Health increased! Current Health: ${this.health}`);
        // return this.health++;
    }
    
    wealthUp() {
        this.wealth += Math.floor(Math.random() * 10 + 1);
        console.log(`Wealth increased! Current Wealth: ${this.wealth}`);
        // return this.health++;
    }

    happinessUp() {
        this.happiness += Math.floor(Math.random() * 10 + 1);
        console.log(`Happiness increased! Current Happiness: ${this.happiness}`);
        // return this.health++;
    }

    healthDown() {
        this.health -= Math.floor(Math.random() * 10 + 1);
        console.log(`Health decreased! Current Health: ${this.health}`);
        // return this.health++;
    }

    wealthDown() {
        this.wealth -= Math.floor(Math.random() * 10 + 1);
        console.log(`Wealth decreased! Current Wealth: ${this.wealth}`);
        // return this.health++;
    }

    happinessDown() {
        this.happiness -= Math.floor(Math.random() * 10 + 1);
        console.log(`Happiness decreased! Current Happiness: ${this.happiness}`);
        // return this.health++;
    }
}
