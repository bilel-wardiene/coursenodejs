const http = require('http')
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-type','text/html')      // mettre type de contenu de res sous forme text html
    //res.write('welcome')
    //res.write(req.url)              // req.url par défaut /   
    if(req.url=='/home'){
        res.statusCode=200
        res.write('welcome from home')
    }else if(req.url=='/contact'){
        res.statusCode=200
        res.write('welcome from contact')         //pour etre notre code plus claire et n'écrire pas tous ca on utilise express js le framwork pour créer un serveur
    }
    else {
        res.statusCode=404
        res.write('not found')
    }
    
    res.end()
})
server.listen(5000,()=>{console.log("server runnig")})
