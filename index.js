function shout(string) {
return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}

const logShout = function() {
  console.log("HELLO");
};

logShout()

const logWhisper = function() {
  console.log("hello");
};

logWhisper()

function sayHiToGrandma(string = "I can't hear you!") {
return string.toLowerCase()
};
