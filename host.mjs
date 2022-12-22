import fs from "fs"
import express from "express"
import bodyParser from "body-parser"
import mysql from "mysql"

var baglanti = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"kullanici"
})
// baglanti.connect(function(err){
//     if(err) throw err;
//     console.log("Bağlantı Başarılı")
//     var sorgu="CREATE TABLE user  (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(30),password VARCHAR(30))"
//     baglanti.query(sorgu,function(err){
//         console.log("Ok")
//     })

// })


var app =express()
app.use(express.static("C:/Users/user/Desktop/WebBotList"))
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
app.use(bodyParser.json())
app.listen(8080, ()=> {
    console.log("Server running at http://localhost:8080")
})

app.get('/register',(req,res)=>{
    res.sendFile("C:/Users/user/Desktop/mysql'li Deneme/register.html")
})
app.get('/login',(req,res)=>{
    res.sendFile("C:/Users/user/Desktop/mysql'li Deneme/login.html")
})
app.get('/anasayfa',(req,res)=>{
    res.sendFile("C:/Users/user/Desktop/mysql'li Deneme/anasayfa.html")
})
app.post('/register',urlencodedParser,(req,res)=>{
    let name = req.body.name
    let sifre = req.body.sifre
    baglanti.connect(function(err){
        // if(err) throw err;
        console.log("Bağlantı Kuruldu")
    let ekle="INSERT INTO user (name,password) value ?"
    let newK=[
        [name,sifre]
            ]
    baglanti.query(ekle,[newK],function(err){
        if(err) throw err;
        console.log("Başarılı")
        res.redirect("/login")

    })
        
    })
})

app.post("/login",urlencodedParser,(req,res)=>{
    let name = req.body.name
    let sifre = req.body.sifre
    baglanti.connect(function(err){
        // if(err) throw err;
        console.log("Bağlantı Başarılı")

        let sorgu=`SELECT * FROM user WHERE name = "${name}" AND password = "${sifre}"`
        baglanti.query(sorgu,function(err,file){
            // if(err) throw err;
            console.log(file)
            if(name==file[0].name&&sifre==file[0].password){
                console.log("Giris Basarili")
                res.redirect("/anasayfa")
            }else if(name!=file[0].name&&sifre!=file[0].password){
                console.log("Giriş Başarısız")
                // res.redirect("/login")
            }
        })
    })
})