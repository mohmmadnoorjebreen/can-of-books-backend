'use strict'

const modelOfUser = require('../model/user.model')



const getBook = (req, res) => {
    const {email} = req.query;

    modelOfUser.find( { email: email },  (error, bookModel) => {
        if (error) {
            res.send(error);
        } else {
            res.json(bookModel);}
    })

}

module.exports = getBook;



