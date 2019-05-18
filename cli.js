let args = process.argv;

let command = args[2];
let term = args.slice(3).join(" ");

if (!command) {
  command = "show";
}

if (!term) {
  term = "Andy Griffith";
}

switch(command) {
  case "show":
    findShow(term);
    break;
  case "actor":
    findActor(term);
    break;
  default:
}