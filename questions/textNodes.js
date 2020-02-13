var textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place to a police officer yelling at you.',
        options: [
            {
                text: 'Run Away',
                nextText: 2
            },
            {
                text: 'Fight him',
                setState: { fight: true },
                actions: [character.healthDown],
                nextText: 102
            }
        ]
    },
    {
        id: 102,
        text: 'You are losing the fight.',
        options: [
            {
                text: 'Keep fighting',
                requiredState: (currentState) => currentState.fight,
                setState: { round2: true },
                actions: [character.death],
                nextText: 103
            },
            {
                text: 'Run Away',
                nextText: 2
            }
        ]
    },
    {
        id: 103,
        text: 'After a getting tired of beating you up the officer shoots you.',
        options: [
            {
                text: 'Restart',
                actions:[character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 2,
        text: 'You successfully ran away. You look around and see a cup of goo nearby.',
        options: [
            {
                text: 'Take goo',
                setState: { blueGoo: true },
                actions: [character.healthUp, character.wealthUp],
                nextText: 201
            },
            {
                text: 'Leave it alone',
                actions: [character.healthDown],
                nextText: 3
            }
        ]
    },
    {
        id: 201,
        text: 'There was $50 under the cup of goo!.',
        options: [
            {
                text: 'Take the money',
                setState: { findersKeepers: true },
                actions: [character.happinessUp, character.wealthUp],
                nextText: 3
            },
            {
                text: 'Leave it alone',
                actions: [character.healthDown],
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'You venture forth in search of purpose when you come across a street vendor.',
        options: [
            {
                text: 'Trade the goo and money for suit',
                requiredState: (currentState) => currentState.findersKeepers,
                actions: [character.wealthDown, character.wealthDown, character.healthDown, character.happinessUp],
                setState: { blueGoo: false, professionalDress: true },
                nextText: 4
            },
            {
                text: 'Trade the goo and money for a food',
                requiredState: (currentState) => currentState.blueGoo,
                actions: [character.wealthDown, character.healthUp, character.happinessUp],
                setState: { blueGoo: false, shirt: true },
                nextText: 4
            },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            {
                text: 'Ignore the vendor',
                actions: [character.healthDown],
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options: [
            {
                text: 'Explore the castle.',
                actions: [character.death],
                nextText: 401
            },
            {
                text: 'Find a room to sleep at in the town.',
                nextText: 402
            },
            {
                text: 'Find some hay in a stable to sleep in.',
                actions: [character.healthUp, character.healthUp, character.happinessUp, character.happinessUp],
                nextText: 5
            }
        ]
    },
    {
        id: 401,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by cannibal in your sleep.',
        options: [
            {
                text: 'Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 402,
        text: 'Without enough money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and threatens to have the town guard lock you in a cell!',
        options: [
            {
                text: 'Offer to work in exchange for a place to sleep',
                requiredState: (currentState) => currentState.professionalDress,
                actions: [character.wealthUp, character.wealthUp, character.wealthUp, character.happinessUp, character.happinessUp, character.happinessUp ,character.death],
                nextText: 40201
            },
            {
                text: 'Fight him to prevent him from telling',
                actions: [character.healthDown, character.healthDown],
                nextText: 40202
            },
            {
                text: 'Beg for forgiveness',
                actions: [character.wealthUp],
                nextText: 40203
            },
            {
                text: 'Run away!',
                actions: [character.death],
                nextText: 40204
            }
        ]
    },
     {
        id: 40201,
        text: 'He sees you in your suit and agrees to give you a job since you look like a professional. You work there until your death 20 years later.',
        options: [
            {
                text: 'Congratulations! Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 40202,
        text: 'You won the fight however the sound alerted the guards and they shoot you to protect the owner.',
        options: [
            {
                text: 'Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 40203,
        text: 'He takes pity on you and allows you to stay for that night only. He also gives you some money to get food!',
        options: [
            {
                text: 'Go back to sleep',
                actions: [character.healthUp, character.happinessUp],
                nextText: 5
            }
        ]
    },
    { 
        id: 40204,
        text: 'You try to run but the owner of the inn catches you and has the town guard lock you in a cell.',
        options: [ 
            { 
                text: 'Play again', 
                actions: [character.reset], 
                nextText: -1 
            } 
        ] 
    },
    
    {
        id: 5,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [
            {
                text: 'Explore the castle',
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: 'While exploring the castle you come across a full stocked kitchen!',
        options: [
            {
                text: 'Eat your fill',
                actions: [character.healthUp, character.healthUp, character.happinessUp, character.happinessUp, character.happinessUp],
                nextText: 7
            },
            {
                text: 'Leave it',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'You keep exploring and find a drug stash!',
        options: [
            {
                text: 'Use it',
                setState: { junkie: true },
                actions: [character.happinessUp, character.healthDown],
                nextText: 701
            },
            {
                text: 'Take it',
                setState: { dealer: true },
                actions: [character.happinessUp],
                nextText: 8
            },
            {
                text: 'Leave it',
                setState: { sayNoToDrugs: true},
                nextText: 703
            }
            
        ]
    },
    {
        id: 701,
        text: 'You stumble back to town.',
        options: [
            {
                text: 'Play',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: 'You escape the castle with your find.',
        options: [
            {
                text: 'Go back to town',
                nextText: 11
            }
        ]
    },
    {
        id: 703,
        text: 'Since you have a clear head you notice the difference in wall panels.',
        options: [
            {
                text: 'Examine the panels.',
                nextText:9
            }
        ]
    },
    {
        id: 9,
        text: 'You found the treasury!!!!!!',
        options: [
            {
                text: 'Replace the panel and leave.',          
                setState: { smarterNotHarder: true },
                action: [character.wealthUp, character.wealthUp, character.wealthUp, character.wealthUp, character.wealthUp, character.happinessUp, character.happinessUp],
                nextText: 10
            },
            {
                text: 'Take as much as you can carry!!!!',
                action: [character.wealthUp, character.wealthUp, character.happinessUp, character.happinessUp],
                nextText: 8
            },
            
        ]
    },
    {
        id: 10,
        text: 'Seeing the castle is abandoned you decide to claim this castle as your and live out the rest of your days there.',
        options: [
            {
                text: 'Congratulations! Play Again.',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'You wander the town looking for a place to stash your stuff but the cops see what you have and take it from you before throwing you in jail.',
        options: [
            {
                text: 'Play Again.',
                actions: [character.reset],
                nextText: -1
            }
        ]
    };
       
    
];

const textNodes2 = [
    {
        id: 1,
        text: 'You wake up in a strange place and you see a cup of liquid nearby.',
        options: [
            {
                text: 'Drink the liquid',
                setState: { water: true, },
                nextText: 2
            },
            {
                text: 'Leave it alone',
                nextText: 2
            }
        ]
    },
];

//TODO: Make a "loop" where each day starts at an id x; they are then given random decisions above that id x value.
//      After making y choices, set id back to x and check if attributes are below a certain threshold.
//          if true ? end game by setting id to end condition z : continue game
