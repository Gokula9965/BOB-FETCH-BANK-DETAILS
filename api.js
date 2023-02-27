const client = require('./connection.js');
const express = require('express');
const app = express();
app.listen(3300, () => {
    console.log("server is listening at port 3300")
})
client.connect();

app.get('/bank_detail', (req, res)=>{
    client.query(`Select * from bank_detail order by ifsc limit 2`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
        
    });
    client.end;
})

app.get('/api/search', (req, res) => {
    
    client.query(`Select * from bank_detail where LOWER(branch) like '%${req.query.q.toLowerCase()}%' or lower(address) like '%${req.query.q.toLowerCase()}%' or LOWER(city) like '%${req.query.q.toLowerCase()}%' or LOWER(district) like '%${req.query.q.toLowerCase()}%' or LOWER(states) like '%${req.query.q.toLowerCase()}%' or LOWER(bank_name) like '%${req.query.q.toLowerCase()}%' order by ifsc  limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
        
    });
    client.end;
})

app.get('/api/branch', (req, res) => {
    
    client.query(`Select * from bank_detail where LOWER(branch) ='${req.query.q.toLowerCase()}'order by ifsc desc limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
        
    });
    client.end;
})