var textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place to a police officer yelling at you.',
        options: [
            {
                text: 'Run Away',
                nextText: 3
            },
            {
                text: 'Fight him',
                setState: { fight: true },
                actions: [character.healthDown],
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You are losing the fight.',
        options: [
            {
                text: 'Keep fighting',
                requiredState: (currentState) => currentState.fight,
                setState: { round2: true },
                actions: [character.healthUp, character.wealthUp],
                nextText: 2
            },
            {
                text: 'Run Away',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'You see a cup of goo nearby.',
        options: [
            {
                text: 'Take goo',
                setState: { blueGoo: true },
                actions: [character.healthUp, character.wealthUp],
                nextText: 2
            },
            {
                text: 'Leave it alone',
                actions: [character.healthDown],
                nextText: 2
            }
        ]
    },
    {
        id: 3,
        text: 'You venture forth in search of answers to where you are when you come across a merchant.',
        options: [
            {
                text: 'Trade the goo and money for dress pants   ',
                requiredState: (currentState) => currentState.blueGoo,
                actions: [character.wealthDown, character.wealthDown, character.healthDown, character.happinessUp],
                setState: { blueGoo: false, pants: true },
                nextText: 4
            },
            {
                text: 'Trade the goo and money for a dress shirt',
                requiredState: (currentState) => currentState.blueGoo,
                actions: [character.wealthDown, character.healthDown, character.happinessUp],
                setState: { blueGoo: false, shirt: true },
                nextText: 4
            },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            {
                text: 'Ignore the merchant',
                actions: [character.healthDown],
                nextText: 3
            }
        ]
    },
    {
        id: 4,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options: [
            {
                text: 'Explore the castle',
                actions: [character.death],
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                actions: [character.death],
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in',
                actions: [character.healthUp, character.healthUp, character.happinessUp, character.happinessUp],
                nextText: 6
            }
        ]
    },
    {
        id: 5,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options: [
            {
                text: 'Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
        options: [
            {
                text: 'Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 7,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [
            {
                text: 'Explore the castle',
                actions: [character.death],
                nextText: 7
            }
        ]
    },
    {
        id: 8,
        text: 'While exploring the castle you come across a horrible monster in your path.',
        options: [
            {
                text: 'Try to run',
                actions: [character.death],
                nextText: 8
            },
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                actions: [character.death],
                nextText: 9
            },
            {
                text: 'Hide behind your shield',
                requiredState: (currentState) => currentState.shield,
                actions: [character.death],
                nextText: 10
            },
            {
                text: 'Throw the blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                actions: [character.healthDown],
                nextText: 11
            }
        ]
    },
    {
        id: 9,
        text: 'Your attempts to run are in vain and the monster easily catches.',
        options: [
            {
                text: 'Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: 'You foolishly thought this monster could be slain with a single sword.',
        options: [
            {
                text: 'Play',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [
            {
                text: 'Play again',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 12,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [
            {
                text: 'Congratulations! Play Again.',
                actions: [character.reset],
                nextText: -1
            }
        ]
    },
    {
        id: 13,
        text: 'After a getting tired of beating you up the officer shoots you.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
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
