const simpleGit = require('simple-git');
var fs = require('fs');

var data = fs.readFileSync('data.txt', 'utf8');
let text=data.toString()


// simpleGit()
// .add(["./*"])
// .commit("Testing", { "--date":"2023-11-28"})
// .push('origin', 'main');

for (let line of text.split("\n")) {
    line=line.split(" ")[0].replace("GIT_AUTHOR_DATE=","")
    
    fs.writeFileSync('./Dummy.txt', line);

    simpleGit()
    .add(["./*"])
    .commit("Testing", { "--date":line})
    .push('origin', 'main');
}

// console.log(text)

// simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":"2023-12-06"})


