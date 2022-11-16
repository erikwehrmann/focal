const obfuscate = function() {
  const password = process.argv[2]
  const newPassword = [];
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === 'a') {
      newPassword.push('4');
    } else if (password.charAt(i) === 'e') {
      newPassword.push('3');
    } else if (password.charAt(i) === 'o') {
      newPassword.push('0');
    } else if (password.charAt(i) === 'l') {
      newPassword.push('1');
    } else {
      newPassword.push(password.charAt(i));
    }
  }
  console.log(newPassword.join(''));
}

obfuscate(process.argv);