class Person {

    constructor() {
        this.health = Math.floor(Math.random() * 100 + 1);
        this.wealth = Math.floor(Math.random() * 100 + 1);
        this.happiness = Math.floor(Math.random() * 100 + 1);
    }

    healthUp() {
        const upHealth = Math.floor(Math.random() * 30 + 1);
        document.getElementById('health').value += upHealth;
        console.log(`Health increased! Current Health: ${health.value}`);
    }

    wealthUp() {
        const upWealth = Math.floor(Math.random() * 30 + 1);
        document.getElementById('wealth').value += upWealth;
        console.log(`Wealth increased! Current Wealth: ${wealth.value}`);
    }

    happinessUp() {
        const upHappiness = Math.floor(Math.random() * 30 + 1);
        document.getElementById('happiness').value += upHappiness;
        console.log(`Happiness increased! Current Happiness: ${happiness.value}`);
    }

    healthDown() {
        const downHealth = Math.floor(Math.random() * 30 + 1);
        document.getElementById('health').value -= downHealth;
        console.log(`Health decreased! Current Health: ${health.value}`);
    }

    wealthDown() {
        const downWealth = Math.floor(Math.random() * 30 + 1);
        document.getElementById('wealth').value -= downWealth;
        console.log(`Wealth increased! Current Wealth: ${wealth.value}`);
    }

    happinessDown() {
        const downHappiness = Math.floor(Math.random() * 30 + 1);
        document.getElementById('happiness').value -= downHappiness;
        console.log(`Happiness increased! Current Happiness: ${happiness.value}`);
    }

    sickness() {
        //TODO
    }

    death() {
        console.log(`You died :(`);
        health.value = 0;
    }

    reset() {
        health.value = Math.floor(Math.random() * 100 + 1);
        wealth.value = Math.floor(Math.random() * 100 + 1);
        happiness.value = Math.floor(Math.random() * 100 + 1);
        document.getElementById('homie-image').src = data[Math.floor(Math.random() * (data.length - 1))];           //randomly selects new image
    }
}

var character = new Person();
//TODO: at end of each function, check if attributes are below a certain threshold; if they are, end the game