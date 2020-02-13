console.log('Starting Game...');
var data = [];

FBInstant.initializeAsync()
    .then(() => {

        var images = document.images;
        for (var i = 0, len = images.length; i < len; i++) {
            data.push(images[i].src);
            var progress = ((i + 1) / images.length) * 100;
            // var assetName = data[i];
            // FBInstant.game.load.image(assetName);        //don't work >:/
            // game.load.image(assetName);                  //don't work >:/
            // FBInstant.setLoadingProgress(progress);
        }

        var progress = 0;
        var interval = setInterval(() => {
            progress += 2.5;
            FBInstant.setLoadingProgress(progress);

            if (progress >= 99) {
                clearInterval(interval);

                FBInstant.startGameAsync()
                    .then(() => {
                        console.log("Game has been started!");

                        // var contextId = FBInstant.context.getID();
                        // var contextType = FBInstant.context.getType();
                        // var playerId = FBInstant.player.getID();

                        var playerName = FBInstant.player.getName();
                        var playerPic = FBInstant.player.getPhoto();

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
                        backgroundMusic();
                        setInterval(() => {
                            backgroundMusic();
                        }, 1000 * 10.9);
                        function startGame() {
                            state = {}
                            // characterHealth.value = character.health;
                            // characterWealth.value = character.wealth;
                            // characterHappiness.value = character.happiness;
                            // console.log(`Health: ${health.value}\nWealth: ${wealth.value}\nHappiness: ${happines.value}`);
                            showTextNode(1)

                        }

                        function backgroundMusic() {
                            var snd = new Audio("assets/audio/backgroundmusic.wav");
                            snd.play();
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

                    })
            }
        }, 50)
    });


// use this link (NOT in chrome) to test
// https://www.facebook.com/embed/instantgames/3098210396865430/player?game_url=https://localhost:8080

// this link is LIVE!
// https://fb.gg/play/3098210396865430