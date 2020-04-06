const path = require("path");
const { spawn } = require("child_process");

module.exports = {
  activate: () => {
    atom.commands.add("atom-text-editor", "Grammalecte: run", run);
  }
};

function run() {
  const grammalecte = spawn("python3", [
    "grammalecte-cli.py",
    "-f",
    "tests/input-file/input.txt"
  ]);

  grammalecte.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });
}

run();
