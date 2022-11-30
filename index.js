const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.listen(1500, () => {
    console.log("Son")
})

// nodemon : tu dong restart lai server khi luu code
// yarn start or npm start

// Method GET: Read
// localhost:1500/hello
//:id/ => khai bao api get params tu url
// domain:80?title = node => khai bao tu fe get query du lieu tu url
app.get("/get", (req, res) => {
    try {
        console.log(req.body.hoTen)
        res.status(200).send(req.body)
    } catch (error) {
        // 400
        console.log(error)
        // gui tat ca dang du lieu tru number
        res.status(400).send("be oi code sai roi")
    }

})
app.get("/get/:id")
// insert:Create

app.post("/post")
// insert


// Update
app.put("/put/:id")
app.delete("/delete/:id")

const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_food",
    port: 3305
})

// GET danh sach food
app.get("/getFood", async (req, res) => {
    let sql = "SELECT * FROM food";

    // conn.query(sql, (err, result)=>{
    //     res.send(result)
    // })
    
    // async await
    let result = await conn.promise().query(sql)
    res.send(result[0])
})

// app.get("/getFood",  (req, res) => {
//     let sql = "SELECT * FROM food";

//     conn.query(sql, (err, result)=>{
//         res.send(result)
//     })
// })