var textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place and you see a cup of goo nearby.',
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
        id: 2,
        text: 'You venture forth in search of answers to where you are when you come across a merchant.',
        options: [
            {
                text: 'Trade the goo and money for dress pants   ',
                requiredState: (currentState) => currentState.blueGoo,
                actions: [character.wealthDown, character.wealthDown, character.healthDown, character.happinessUp],
                setState: { blueGoo: false, pants: true },
                nextText: 3
            },
            {
                text: 'Trade the goo and money for a dress shirt',
                requiredState: (currentState) => currentState.blueGoo,
                actions: [character.wealthDown, character.healthDown, character.happinessUp],
                setState: { blueGoo: false, shirt: true },
                nextText: 3
            },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            {
                text: 'Ignore the merchant',
                actions: [character.healthDown],
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
        options: [
            {
                text: 'Explore the castle',
                actions: [character.healthDown, character.healthDown, character.healthDown],
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                actions: [character.healthUp, character.healthUp, character.healthUp],
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in',
                actions: [character.healthUp, character.healthUp],
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
        options: [
            {
                text: 'Restart',
                actions: [character.death],
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
        options: [
            {
                text: 'Explore the castle',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'While exploring the castle you come across a horrible monster in your path.',
        options: [
            {
                text: 'Try to run',
                nextText: 8
            },
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                nextText: 9
            },
            {
                text: 'Hide behind your shield',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {
                text: 'Throw the blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        text: 'Your attempts to run are in vain and the monster easily catches.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'You foolishly thought this monster could be slain with a single sword.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: 'The monster laughed as you hid behind your shield and ate you.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
        options: [
            {
                text: 'Congratulations. Play Again.',
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
