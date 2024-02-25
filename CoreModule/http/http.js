import http from 'http'
import fs from 'fs'
const PORT = 8000;
const hostName = "127.0.0.1"

const server = http.createServer((req, res) => {
    let { url, method } = req
    if (method == "GET") {
        if (url == '/') {
            let data = fs.readFileSync("./data.txt","utf-8")
            res.write(data)
            res.end()
        }
    }
})


server.listen(PORT, hostName, () => {
    console.log(`server is listen at http://${hostName}:${PORT}`)
})