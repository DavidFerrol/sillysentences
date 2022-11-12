var pronouns = [
  "This",
  "That",
  "My",
  "Your",
  "His",
  "Her",
  "Another",
  "Their",
  "Our",
  "Sam's",
  "Grace's",
  "Dad's",
  "Mummy's",
];

var adjectives = [
  "spotty",
  "hairy",
  "stinky",
  "slimy",
  "crazy",
  "funny",
  "brave",
  "determined",
  "creative",
  "clever",
  "tough",
  "confident",
  "ambitious",
];

var noun1 = [
  "dinosaur",
  "kitten",
  "teacher",
  "pet",
  "Martian",
  "sister",
  "penguin",
  "doctor",
  "koala",
  "Daddy",
  "Mummy",
  "cat",
  "bottom",
  "pirate",
  "rocket",
  "space",
];

var verbs = [
  "is eating",
  "is sitting on",
  "is sleeping on",
  "is selling",
  "looks like",
  "is sniffing",
  "is dancing on",
  "is singing to",
  "is jumping on",
  "is tickling",
  "is kicking",
  "smells like",
  "tastes like",
  "is riding",
];

var noun2 = [
  "a walrus.",
  "a cactus.",
  "an egg.",
  "a toilet.",
  "an octopus.",
  "a dragon.",
  "a bogey.",
  "my face.",
  "my bottom.",
  "a PS5.",
  "some cheese.",
  "a sausage.",
  "CUSTARD!",
  "my tummy.",
  "cat food.",
  "cat poo.",
  "a rollercoaster.",
];

function getResult() {
  var word1 = pronouns[Math.floor(Math.random() * pronouns.length)];
  var word2 = adjectives[Math.floor(Math.random() * adjectives.length)];
  var word3 = noun1[Math.floor(Math.random() * noun1.length)];
  var word4 = verbs[Math.floor(Math.random() * verbs.length)];
  var word5 = noun2[Math.floor(Math.random() * noun2.length)];
  document.getElementById("sentence").innerHTML =
    word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5;
}
