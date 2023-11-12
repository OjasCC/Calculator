const simpleGit = require('simple-git');
var fs = require('fs');

var data = fs.readFileSync('data.txt', 'utf8');
let text=data.toString()


// simpleGit()
// .add(["./*"])
// .commit("Testing", { "--date":"2023-11-28"})
// .push('origin', 'main');

async function testing(){
    for (let line of text.split("\n")) {
        line=line.split(" ")[0].replace("GIT_AUTHOR_DATE=","")
        console.log(line)
    
        fs.writeFileSync('./Dummy.txt', line);
    
        await simpleGit()
        .add(["./*"])
        .commit("Testing", { "--date":line})
        .push('origin', 'main');
    }
}

testing()
// console.log(text)

// simpleGit().add(["./Testing.js"]).commit("Testing", { "--date":"2023-12-06"})


