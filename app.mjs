import mysql from "mysql"

var baglanti = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"newdata"
})
baglanti.connect(function(err){
    if(err) throw err;
    console.log("Bağlantı Kuruldu")
    //! SQL komutlarını yazarken DİKKAT et sonra sıçarsın

    //*LIMIT Komutu
    // var sorgu="SELECT * FROM ogrenci LIMIT 3"
    // baglanti.query(sorgu,function(err,file){
    //     if(err) throw err;
    //     console.log(file)
    // })

    var sorgu="SELECT * FROM ogrenci LIMIT 3 OFFSET 2"
    baglanti.query(sorgu,function(err,file){
        if(err) throw err;
        console.log(file)
    })

    //*UPDATE Komutu
    // var sorgu ="UPDATE ogrenci SET adress = 'KahramanMaras'"
    // baglanti.query(sorgu,function(err){})

    //*DELETE Komutu
    // var sorgu="DELETE FROM ogrenci WHERE id > 5"
    // baglanti.query(sorgu,function(err){
    //     if(err) throw err;
    //     console.log("Silindi İşte")
    // })

    //*WHERE Sorgusu
    // baglanti.query("SELECT * FROM ogrenci WHERE name LIKE '%n'",function(err,file){
    //     if(err) throw err;
    //     console.log(file)
    // })

    // var name="Kutluhan"
    // var sorgu="SELECT * FROM ogrenci WHERE name LIKE ?"
    // baglanti.query(sorgu,[name],function(err,file){
    //     if(err) throw err;
    //     console.log(file)
    // })


    // baglanti.query("SELECT * FROM ogrenci WHERE id > 3",function(err,file){
    //     if(err) throw err;
    //     console.log(file)
    // })


    //*Select İle İstenilen Kullanıcıyı Almak
    // baglanti.query("SELECT * FROM ogrenci",function(err,file){
    //     if(err) throw err;
    //     console.log(file[0])
    // })


    //*Select İle Sorgu Atmak
    // baglanti.query("SELECT * FROM ogrenci",function(err,file){
    //     if(err) throw err;
    //     console.log(file)
    // })


    //*Komut İle Çoklu Veri Eklemek
    // var sorgu="INSERT INTO ogrenci (name,adress,tcno) values ?"
    // var values=[
    //     ["Ahmet","Girne","15795486275"],
    //     ["Mustafa","Adana","15797486275"],
    //     ["Goktug","Istanbul","15795488775"],
    //     ["AliEfe","Zeytinburnu","15795486358"]
    // ]
    // baglanti.query(sorgu,[values],function(err){
    //     if(err) throw err;
    //     console.log("Ogrenciler Eklendi")
    // })


    //*Komut ile Veri Ekleme
    // var sorgu="INSERT INTO ogrenci (name,adress,tcno) values ('Ali','Lefkosa','14687359487')"
    // baglanti.query(sorgu,function(err){
    //     if(err) throw err;
    //     console.log("Yeni Ogrenci Eklendi")
    // })


    //*Var Olan Tabloya Sütün Eklemek
    // var sorgu="ALTER TABLE ogrenci ADD COLUMN tcno CHAR(11)"
    // baglanti.query(sorgu,function(err){
    //     if(err) throw err;
    //     console.log("Tablo Eklendi")
    // })


    //*Birincil Anahtarlı ve Kendi Kendine Artmalı Tablo Oluşturma
    // var sorgu="CREATE TABLE ogrenci (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), adress VARCHAR(75))"
    // baglanti.query(sorgu,function(err){
    //     if(err) throw err;
    //     console.log("Tablo Oluşturuldu")
    // })


    //*Tablo Oluşturma
    // baglanti.query("CREATE TABLE musteri (name VARCHAR(30),adress VARCHAR(75))",function(err){
    //     if(err) throw err;
    //     console.log("Tablo Oluşturuldu")
    // })


    //*Veri Tabanı Oluşturma
    // var sorgu="CREATE DATABASE newData"
    // baglanti.query(sorgu,function(err){
    //     if(err) throw err;
    //     console.log("Data Base Oluşturuldu")
    // })

})