const http       = require("http")
const porta      = 3000
const formidavel = require("formidable")
const fs         = require("fs")
const{text }     = require("express")

const servidor = http.createServer((req, res) =>{

    if(req.url == '/envioDeArquivo'){

    }else{
        res.writeHead(200, {"Content-Type": "text/html"})
        res.writeHead('<form action="envioDeArquivo" method = post enctype="multipart/form-data">')
        res.write('<input type = "file" name = "filetoupload"><br>')
        res.write('<input type="submit" value="Enviar">')
        res.write('</form>')
        return res.end()
    }
})
 
servidor.listen(porta, () =>{
    console.log("Servidor Rodando na porta 3000")
})