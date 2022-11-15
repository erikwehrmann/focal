const sum = function(input) {
  total = 0
    for (let i = 2; i < input.length; i++) {
      if (isNaN(Number(process.argv[i]))) {
        console.log("Error: Only input numbers.");
        process.exit();
      }
      if (process.argv.length < 4) {
        console.log("Error: Must input at least 2 numbers.");
        process.exit();
      }
      if (Number.isInteger(Number(process.argv[i]))) {
        total += Number(process.argv[i]);
      }
    }
  console.log(total);
}

sum(process.argv);