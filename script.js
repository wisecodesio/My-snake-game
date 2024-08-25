function makeChoice(choice) {
    var storyElement = document.getElementById('story');
    if (choice === 1) {
        storyElement.innerHTML = '<p>You venture into the forest. It\'s dark and eerie, but you feel a strange pull guiding you deeper.</p>';
    } else {
        storyElement.innerHTML = '<p>You decide to walk away, leaving the mystery of the relic unsolved. Perhaps another day...</p>';
    }
}
