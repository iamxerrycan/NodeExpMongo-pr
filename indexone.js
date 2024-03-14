const http = require('http')
const fs = require('fs')

// const data ={age: 5}

const view = fs.readFileSync('index.html', 'utf-8')
const data = fs.readFileSync('data.json', 'utf-8')


const server = http.createServer((req, res)=>{
    console.log("server running!");
    res.setHeader('dummy','dummyval')
    res.setHeader( 'content-Type','application/json');
    res.end(data)
    // res.end(view)
})

server.listen(8080)