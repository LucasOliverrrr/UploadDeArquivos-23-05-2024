const http       = require("http")
const porta      = 3000
const formidavel = require("formidable")
const fs         = require("fs")
const{text }     = require("express")

const servidor = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/html"})
    res.writeHead('<form action="envioDeArquivo" method = post enctype="multipart/form-data"')
})