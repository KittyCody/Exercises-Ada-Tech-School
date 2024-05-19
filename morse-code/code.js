const morseDictionary = {
  A: "·−",
  B: "−···",
  C: "−·−·",
  D: "−··",
  E: "·",
  F: "··−·",
  G: "−−·",
  H: "····",
  I: "··",
  J: "·−−−",

  K: "−·−",
  L: "·−··",
  M: "−−",
  N: "−·",
  O: "−−−",
  P: "·−−·",
  Q: "−−·−",
  R: "·−·",
  S: "···",
  T: "−",

  U: "··−",
  V: "···−",
  W: "·−−",
  X: "−··−",
  Y: "−·−−",
  Z: "−−··",
};

function translateLatinToMorse(text) {
  text = text.toUpperCase();

  const signs = [];

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const morseCode = morseDictionary[letter];

    signs.push(morseCode);
  }

  return signs;
}

const morseBaba = translateLatinToMorse("baba");

console.log(morseBaba);
