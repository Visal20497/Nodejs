let path=require("path")
let fs=require("fs")

let result;
let temppath=path.join(__dirname,"./file/file2/file3/demo.txt")


// into the basename return the last part of the path basename.
result=path.basename(temppath)
console.log(result)

  //it return the extension of the give file.
result=path.extname(temppath)
console.log(result)

  // it return  the resolve the specified path.
result=path.normalize('abc/xyz/../../temp.txt')
console.log(result)


  
fs.readFile(temppath,'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

