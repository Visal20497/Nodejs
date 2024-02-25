let http = require("http");
let PORT = 8080;
let path = require("path");
let fs = require("fs");
let server = http.createServer((req, res) => {
  let messagePath = path.join(__dirname, "public/message.html");
  let dbPath = path.join(__dirname, "db/msg.json");
  if (req.url == "/" && req.method == "GET") {
    fs.readFile(messagePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("somthing wrong while reading , files");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/" && req.method == "POST") {
    let msg = "";
    req.on("data", (chunk) => {
      msg += chunk;
    });
    req.on("end", () => {
      let obj = {
        id: Math.trunc(Math.random() * 10000),
        text: JSON.parse(msg),
      };
      fs.readFile(dbPath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("somthing wrong");
        } else {
            let parseData=JSON.parse(data)
            parseData=[...parseData,obj]
             fs.writeFile(dbPath,JSON.stringify(parseData),(err)=>{
                if(err)
                {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("somthing wrong");
                }
                else{
                   
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(parseData));
                }
             })
        }
      });
    });
  } 
  else if(req.url=='/' && req.method=="DELETE")
  {
     try{
      let id=''
          req.on('data',(chunk)=>{
              id+=chunk
          })
          req.on('end',()=>{
            fs.readFile(dbPath,'utf-8',(err,data)=>{
              if(err)
              {
                res.writeHead(500,{"Content-Type":"text/plain"})
                res.end('somthing wrong while ,reading file')
              }
              else{
                let orignialData=JSON.parse(data)
                let filterData=orignialData.filter((item)=>{
                  return item.id !=id
                })
                fs.writeFile(dbPath,JSON.stringify(filterData),(err)=>{
                  if(err)
                  {
                    res.writeHead(500,{"Content-Type":"text/plain"})
                    res.end('somthing wrong while ,reading file')
                  }
                  else{
                       res.end(JSON.stringify(filterData))
                  }
                })
                 
              }
            })
          })
         
     }
     catch(err)
     {
      console.log(err)
      res.end("somthing wrong!")
     }
  }
  else if(req.url='/' && req.method=="PUT")
  {
    try{
      let editData=''
      req.on('data',(chunk)=>{
         editData+=chunk
      })
      req.on('end',()=>{
        let parseEditData=JSON.parse(editData)
         fs.readFile(dbPath,'utf-8',(err,data)=>{
          if(err)
          {
            res.writeHead(500,{"Content-Type":"text/plain"})
            res.end('somthing wrong while ,reading file')
          }
          else{
                 let orignialDbData=JSON.parse(data)
                 let updateDbData=orignialDbData.map((item)=>{
                  if(item.id==parseEditData.id)
                  {
                    let updatedText=parseEditData.text
                    return {
                      ...item,
                      text:updatedText
                    }
                  }
                  else{
                    return item
                  }
                 })
                 fs.writeFile(dbPath,JSON.stringify(updateDbData),(err)=>{
                  if(err)
                  {
                    res.writeHead(500,{"Content-Type":"text/plain"})
                    res.end('somthing wrong while ,reading file')
                  }
                  else{
                    let editUpdatedData=JSON.stringify(updateDbData)
                    res.end(editUpdatedData)
                  }
                 })
          }
         })
      
      })
    }
    catch(err)
    {
      console.log(err)
      res.end(err.message)
    }
  }
   else {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("invalid url");
  }
});
server.listen(PORT, () => {
  console.log(`server is live at ${PORT}`);
});
