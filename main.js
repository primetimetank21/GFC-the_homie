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
                            // characterHealth.value = character.health;
                            // characterWealth.value = character.wealth;
                            // characterHappiness.value = character.happiness;
                            // console.log(`Health: ${health.value}\nWealth: ${wealth.value}\nHappiness: ${happines.value}`);
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
                            const attributeChange = option.actions;

                            if (attributeChange) {
                                console.log(attributeChange)
                                attributeChange.forEach(action => {
                                    action();
                                })
                            }

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
    }
    );

// use this link (NOT in chrome) to test
// https://www.facebook.com/embed/instantgames/3098210396865430/player?game_url=https://localhost:8080
