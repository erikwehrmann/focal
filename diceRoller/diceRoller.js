const diceRoller = function(input) {
  numberOfDice = Number(input.slice(2));
  outputString = `Rolled ${numberOfDice} dice: `;
  for (i = 1; i <= numberOfDice; i++) {
    rollOutcome = Math.floor((Math.random() * 6)) + 1;
    outputString += `${rollOutcome}`;
    if (i !== numberOfDice) {
      outputString += `, `;
    }
  };
  console.log(outputString);
}

diceRoller(process.argv)