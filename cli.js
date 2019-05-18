const TV = require("./tv.js");
let tv = new TV();

let args = process.argv;

let command = args[2];
let term = args.slice(3).join("+");

if (!command) {
  command = "show";
}

if (!term) {
  term = "Andy Griffith";
}

switch(command) {
  case "show":
    tv.findShow(term);
    break;
  case "actor":
    tv.findActor(term);
    break;
  default:
    console.log("Usage: node cli [show/actor] [show/actor name]");
}