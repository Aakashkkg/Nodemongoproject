const express = require("express");
const app = express();
const Mongodb = require("mongodb")
const MongoClient = require("mongodb").MongoClient
const confi ="mongodb+srv://aakash:admin@cluster0.wxif6zb.mongodb.net/?retryWrites=true&w=majority"
const cors = require("cors");
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.json());

var Users;
var fun;
var fun1;
var my;
MongoClient.connect(confi,(err,succ)=>{
    if(err) throw err;
    console.log("Databased connect");
    Users = succ.db("product").collection("test");
fun= succ.db("product").collection("test2");
fun1 = succ.db("product").collection("test3");
my = succ.db("product").collection("test4");
})

// ----------------insert-----------------


app.post("/ins",(req,res)=>{
    console.log(req.body);

my.insertOne(req.body).then((succ)=>{
console.log("ok");
res.send("in");

})

})


//-----------------------fecth


app.post("/fetch",(req,res)=>{
my.find().toArray().then((succ)=>{
    res.send(succ);
    // console.log(succ);
})
})

//---------------------delte

app.post("/del",(req,res)=>{
console.log(req.body.xyz);
var id = req.body.xyz;
var idd = new Mongodb.ObjectId(id);
my.deleteOne({
    _id:idd,
}).then((succ)=>{
    console.log("ok")
    res.send("x")
})

})



//------------------------------- update

app.post("/up",(req,res)=>{
console.log(req.body);
var id = req.body.Id;
var n = req.body.Name;
var e = req.body.Email;
var p = req.body.Password;

var idd = new Mongodb.ObjectId(id);
my.updateOne({
_id:idd,

},{

$set:{
Name:n,
Email:e,
Password:p,


}

}).then((succ)=>{
    console.log("updated")
    res.send("a");
})


})



app.get("/co",(req,res)=>{
Users.insertOne({
    Name:"rohit",
    Email:"rohit@gmail.com",
    Contact:752621174,
    
}).then((succ)=>{
res.send(succ);
})
})




app.get("/co1",(req,res)=>{
Users.find().toArray().then((succ)=>{
    res.send(succ);
})
})


app.get("/co9",(req,res)=>{
Users.findOne().then((succ)=>{
    res.send(succ);
})
})



app.get("/co4",(req,res)=>{
Users.find({
    Email:"rohit@gmail.com",
}).toArray().then((succ)=>{
    res.send(succ);
})
})

app.get("/co3",(req,res)=>{
    Users.findOne({
        Email:"rohit@gmail.com",
    }).then((succ)=>{
        res.send(succ);
    })
})

app.get("/co5",(req,res)=>{
var idd = new Mongodb.ObjectId("62ecd33c06333f45766479f4")

Users.find({
    _id:idd,
}).toArray().then((succ)=>{
    res.send(succ);
})


})


app.get("/co6",(req,res)=>{
fun.insertOne({
    Name:"ashish",
    class:10,
}).then((succ)=>{
    res.send(succ);
})

})

app.get("/co7",(req,res)=>{
    var idd = new Mongodb.ObjectId("62ee0e7b7ff580b003d012ce")
    fun.deleteOne({
    _id:idd,
    }).then((succ)=>{
        res.send("data deleted");
    })
})

app.get("/co8",(req,res)=>{
var idd = new Mongodb.ObjectId("62ecd33c06333f45766479f4")
Users.updateOne({
_id:idd,
},{
   $set:{
    Name:"ashish",
   }
    
}).then((succ)=>{
    res.send('data updated');
})
})


app.get("/co10",(req,res)=>{
Users.find({
        Email:"rohit@gmail.com",
    }).toArray().then((succ)=>{
    res.send(succ)
})
})

app.get("/co11",(req,res)=>{
var idd = new Mongodb.ObjectId("62ecd2e4ec893e35577466f2");
Users.findOne({
    _id:idd,
}).then((succ)=>{
    res.send(succ)
})
})


app.get("/co12",(req,res)=>{
  var idd = new Mongodb.ObjectId("62ecd2e4ec893e35577466f2")  
Users.updateOne({
_id:idd,
},{
    $set :{
        Name:"bhumika",
        Email:"vanshika",
    }
}).then((succ)=>{
    res.send("data updated");
})
})

app.get("/co13",(req,res)=>{
   var idd = new Mongodb.ObjectId("62ecd2e4ec893e35577466f2") 
Users.deleteOne({
    _id:idd
}).then((succ)=>{
    res.send("data deleted");
})


})

app.get("/mon1",(req,res)=>{

fun1.insertOne({
    Name:"aakash",
    Contact:546545464646,
    Email:"aakash@1234"
}).then((succ)=>{
    res.send(succ)
})

})


app.get("/mon2",(req,res)=>{
    fun1.find().toArray().then((succ)=>{
        res.send(succ);
    })
})

app.get("/mon3",(req,res)=>{
    fun1.findOne().then((succ)=>{
        res.send(succ);
    })
})

app.get("/mon4",(req,res)=>{
    Users.find(
        {
            Email:"rohit@gmail.com"
        }
    ).toArray().then((succ)=>{
        res.send(succ)
    })
})

app.get("/mon5",(req,res)=>{

var idd = new Mongodb.ObjectId("62ecd2aaec893e35577466f1");

Users.find({
    _id:idd
}).toArray().then((succ)=>{
    res.send(succ)
})

})

app.get("/mon6",(req,res)=>{
    var idd = new Mongodb.ObjectId("62ecd2aaec893e35577466f1");
    Users.updateOne({
       _id:idd, 
    },{
$set:{
    Name:"rohit",
    Email:"rohit@123",
}
    }).then((succ)=>{
        res.send("data updated")
    })
})


app.get("/mon7",(req,res)=>{
    var idd = new Mongodb.ObjectId("62ecd2aaec893e35577466f1");

    Users.deleteOne({
        _id:idd
    }).then((succ)=>{
        res.send("data deleted")
    })

})



var obj = {name:"value",rollno:800}
var ar =["name","rollno","class"]

app.get('/',(req,res)=>{
    console.log('contact')
    res.send('welcome to contact');
}) 

app.get("/con",(req,res)=>{
    res.send(ar[2]);
})



app.listen(200,(res,req)=>{
    console.log("server started");
})


// 

// npm i express
// npm i -g nodemon
// npm i --save-dev nodemon
// npm i mongodb
// npm i mongodb-client
// npm i body-parser
// npm i method-override