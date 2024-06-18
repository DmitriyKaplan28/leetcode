let uniqueMorseRepresentations = (words) => {
  let morseAlphabet = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ],
    result = [];
  words.forEach((word) => {
    let codedWord = "";
    for (let i = 0; i < word.length; i++) {
      codedWord += morseAlphabet[word[i].charCodeAt(0) - 97];
    }
    if (!result.includes(codedWord)) {
      result.push(codedWord);
    }
  });
  return result.length;
};
