function rolldice() {
    const numofdice = parseInt(document.getElementById("dice").value, 10);
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img class="images" src="images/${value}.png" alt="Dice ${value}">`);
    }

    diceresult.textContent = `Dice: ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');
}
