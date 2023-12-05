const simpleGit = require('simple-git');
var fs = require('fs');


simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":"2023-12-06"})

// var data = fs.readFileSync('data.txt', 'utf8');
// let text=data.toString()

// for (let line of text.split("\n")) {
//     line=line.split(" ")[0].replace("GIT_AUTHOR_DATE=","")
//     simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":line, "--allow-empty":""})
// }

// console.log(text)

// simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":"2023-12-06"})


