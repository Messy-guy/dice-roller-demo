function rolldice() {
    const numofdice = parseInt(document.getElementById("dice").value, 10);
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const finalValues = [];
    
    // Clear previous results and images
    diceresult.textContent = '';
    diceimages.innerHTML = '';

    // Generate final dice values
    for (let i = 0; i < numofdice; i++) {
        finalValues.push(Math.floor(Math.random() * 6) + 1);
    }

    // Function to show random dice images
    const showRandomDiceImages = () => {
        diceimages.innerHTML = '';
        for (let i = 0; i < numofdice; i++) {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            diceimages.innerHTML += `<img class="images roll-animation" src="images/${randomValue}.png" alt="Dice ${randomValue}">`;
        }
    };

    // Show random dice images every 100ms during the 1s rolling animation
    const interval = setInterval(showRandomDiceImages, 100);

    // After 1 second (duration of animation), show the final result
    setTimeout(() => {
        clearInterval(interval);  // Stop showing random dice images
        diceimages.innerHTML = '';
        for (let i = 0; i < numofdice; i++) {
            diceimages.innerHTML += `<img class="images" src="images/${finalValues[i]}.png" alt="Dice ${finalValues[i]}">`;
        }
        diceresult.textContent = `Dice: ${finalValues.join(', ')}`;
    }, 1000);
}
