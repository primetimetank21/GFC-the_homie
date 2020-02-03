console.log('Starting Game...');

FBInstant.initializeAsync()
    .then(() => {

        var progress = 0;
        var interval = setInterval(() => {
            progress += 2.5;
            FBInstant.setLoadingProgress(progress);

            if (progress >= 99) {
                clearInterval(interval);
                FBInstant.startGameAsync()
                    .then(() => {
                        console.log("Game has been started!");

                        let character = new Person();
                        console.log(JSON.stringify(character));

                        var contextId = FBInstant.context.getID();
                        var contextType = FBInstant.context.getType();

                        var playerName = FBInstant.player.getName();
                        var playerPic = FBInstant.player.getPhoto();
                        var playerId = FBInstant.player.getID();

                        const textElement = document.getElementById('text');
                        const optionButtonsElement = document.getElementById('option-buttons');
                        const playerNameElement = document.getElementById('player');
                        const homieImageElement = document.getElementById('homie-image');
                        const characterHealth = document.getElementById('health');
                        const characterWealth = document.getElementById('wealth');
                        const characterHappiness = document.getElementById('happiness');

                        playerNameElement.innerText = `Hello ${playerName}!`;
                        homieImageElement.src = playerPic;
                        characterHealth.value = character.health;
                        characterWealth.value = character.wealth;
                        characterHappiness.value = character.happiness;

                        let state = {}

                        function startGame() {
                            state = {}
                            showTextNode(1)
                        }

                        function showTextNode(textNodeIndex) {
                            const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
                            textElement.innerText = textNode.text
                            while (optionButtonsElement.firstChild) {
                                optionButtonsElement.removeChild(optionButtonsElement.firstChild)
                            }

                            textNode.options.forEach(option => {
                                if (showOption(option)) {
                                    const button = document.createElement('button')
                                    button.innerText = option.text
                                    button.classList.add('btn')
                                    button.addEventListener('click', () => selectOption(option))
                                    optionButtonsElement.appendChild(button)
                                }
                            })
                        }

                        function showOption(option) {
                            return option.requiredState == null || option.requiredState(state)
                        }

                        function selectOption(option) {
                            const nextTextNodeId = option.nextText
                            if (nextTextNodeId <= 0) {
                                return startGame()
                            }
                            state = Object.assign(state, option.setState)
                            showTextNode(nextTextNodeId)
                        }


                        startGame()

                        // console.log(`${playerId} and ${playerName}`);
                    })
            }

        }, 50)

        // console.log("loaded");
    }
    );


// https://www.facebook.com/embed/instantgames/3098210396865430/player?game_url=https://localhost:8080
