class Jaden {
  constructor() { }

  jadenCase(string) {
    const arrayOfWords = string.split(" ");
    const newArray = arrayOfWords.map((word) => word[0].toUpperCase() + word.slice(1));

    return newArray.join(' ')
  }
}

class Two {
  constructor() { }

  takeOffEnd(string) {
    return string.slice(string.length - 2, string.length - 1);
  }
}

module.exports = { jaden: Jaden, two: Two };
