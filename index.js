const http       = require('http')
const porta      = 3000
const formidavel = require('formidable')
const fs         = require('fs')
const {text }    = require('express')
const servidor = http.createServer((req, res)=>{
    
    if(req.url == '/envioDeArquivo'){
        const form = new formidavel.IncomingForm();
        form.parse(req, (erro, campos, arquivos)=>{
            const urlAntiga  = arquivos.filetoupload[0].filepath
            const urlNova    = 'C:\Users\lucas\Desktop\Vscode\UploadDeArquivos-23-05-2024' + arquivos.filetoupload[0].originalFilename
        })        
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<form action="envioDeArquivo" method = post enctype="multipart/form-data">')
        res.write('<input type = "file" name = "filetoupload"><br>')
        res.write('<input type="submit" value="Enviar">')
        res.write('</form>')
        return res.end()
    }
})
servidor.listen(porta, ()=>{console.log("Servidor Rodando na porta 3000")})