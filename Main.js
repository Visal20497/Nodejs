const { error } = require("console");
let fs = require("fs");

function upadte(file) {
  
    fs.writeFileSync(
        file,
        `{ "0" :[{"name":"Vishal", "age":"xyz", "add":"UP"}]}`
    );
    let data = JSON.parse(fs.readFileSync(file, "utf-8"));
    console.log(data);
}

function clear(file){
    fs.writeFileSync(file,"{}");
    let data = JSON.stringify(fs.readFileSync(file, "utf-8"));
    console.log(data);

}

function reUpdate(file){
    fs.writeFileSync(
        file,
        `{ "0" :[{"name":"Vishal", "age":"xyz", "add":"UP"}]}`
    );
    let data = JSON.parse(fs.readFileSync(file, "utf-8"));
    console.log(data);
}


function Delete(file){
    try{
        fs.unlinkSync(file)
    }
    catch(err){
        console.log(err.name + " File not found");
    }
        
}
module.exports = {upadte,clear,reUpdate,Delete}