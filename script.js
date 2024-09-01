document.addEventListener('DOMContentLoaded', () => {
    const storyElement = document.getElementById('story');
    const choicesContainer = document.querySelector('.choices');
    let state = {
        currentScene: 0,
        scenes: [
            {
                text: "You find yourself at the edge of a dark forest. Legends say that a powerful relic is hidden deep within. Do you dare to enter?",
                choices: [
                    { text: "Enter the Forest", nextScene: 1 },
                    { text: "Walk Away", nextScene: 2 }
                ]
            },
            {
                text: "You venture into the forest. It's dark and eerie, but you feel a strange pull guiding you deeper.",
                choices: [
                    { text: "Continue Deeper", nextScene: 3 },
                    { text: "Turn Back", nextScene: 2 }
                ]
            },
            {
                text: "You decide to walk away, leaving the mystery of the relic unsolved. Perhaps another day...",
                choices: [
                    { text: "Restart", nextScene: 0 }
                ]
            },
            {
                text: "The forest thickens, and you discover a hidden path leading to an ancient temple. The relic must be near!",
                choices: [
                    { text: "Enter the Temple", nextScene: 4 },
                    { text: "Return to the Forest Entrance", nextScene: 0 }
                ]
            },
            {
                text: "Inside the temple, you find the relic glowing with a mystical light. You have succeeded in your quest!",
                choices: [
                    { text: "Restart", nextScene: 0 }
                ]
            }
        ]
    };

    renderScene();

    function renderScene() {
        const scene = state.scenes[state.currentScene];
        updateStory(scene.text);
        updateChoices(scene.choices);
    }

    function updateStory(text) {
        fadeOut(storyElement, () => {
            storyElement.innerHTML = `<p>${text}</p>`;
            fadeIn(storyElement);
        });
    }

    function updateChoices(choices) {
        choicesContainer.innerHTML = '';
        
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                state.currentScene = choice.nextScene;
                renderScene();
            });
            choicesContainer.appendChild(button);
        });

        Array.from(choicesContainer.children).forEach((button, index) => {
            button.style.opacity = 0;
            setTimeout(() => {
                button.style.transition = 'opacity 0.5s ease-in-out';
                button.style.opacity = 1;
            }, index * 100);
        });
    }

    function fadeOut(element, callback) {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.opacity = 0;
        setTimeout(callback, 300);
    }

    function fadeIn(element) {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.opacity = 1;
    }
});
