var express = require('express');
var app = express();
var pool = require('./queries.js');
// const port = 3000; // Ganti port dengan yang lain

var things= require('./things.js');

app.use('/things', things);
app.get('/', (req, res)=>{
    pool.query('SELECT * FROM try', (err, result)=>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
})
pool.connect((err, res)=>{
    console.log(err)
    console.log(res)
})
   
app.listen(3000);

 // .then(() => {
    //     console.log('Connected to PostgreSQL');
    // })
    // .catch((error) => {
    //     console.error('Error connecting to PostgreSQL:', error);
    // });
    
// const server = app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
