const simpleGit = require('simple-git');
var fs = require('fs');


// simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":"2023-12-06"})

var data = fs.readFileSync('data.txt', 'utf8');
let text=data.toString()


simpleGit()
.add(["./*"])
.commit("Testing", { "--date":"2023-11-28"})
.push('origin', 'main');

// for (let line of text.split("\n")) {
//     line=line.split(" ")[0].replace("GIT_AUTHOR_DATE=","")
//     simpleGit()
//     .add(["./*"])
//     .commit("Testing", { "--date":line, "--allow-empty":""})
//     .push('origin', 'main');
// }

// console.log(text)

// simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":"2023-12-06"})


