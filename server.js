const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');

app.use(cors()) // after you initialize your express app instance
app.use(express.json());
const {getBook,creatBook,deleteBook,updateBook} = require('./controller/book.controller')
require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true, useUnifiedTopology: true});

const seedUserData = require('./model/user.model')
// seedUserData();
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello ') // our endpoint function response
})
 
app.get('/book', getBook)

app.post('/books', creatBook)

app.delete('/books/:book_idx',deleteBook)
app.put('/book/:book_idx',updateBook)

app.listen(3200) // kick start the express server to work