'use strict'

const modelOfUser = require('../model/user.model')



const getBook = (req, res) => {
    const { email } = req.query;

    modelOfUser.findOne({ email: email }, (error, bookModel) => {
        if (error) {
            res.send(error);
        } else {
            res.json(bookModel.book);
        }
    })

}



const creatBook = (req, res) => {

    const { userEmail, nameBook, descriptionBook, statusBook } = req.body;

    modelOfUser.findOne({ email: userEmail }, (error, newBookModel) => {
        
        if (error) {
            res.send(error);
        } else {

            newBookModel.book.push({ name: nameBook, description: descriptionBook, status: statusBook })
            newBookModel.save()
            res.json(newBookModel.book);
        }
    })

}

const deleteBook = (req, res) => {

    const BookId = req.params.book_idx;
    const { email } = req.query;

    modelOfUser.findOne({ email: email }, (error, DeleteBookModel) => {
        console.log(BookId);
        if (error) {
            res.send(error);
        } else {
            
            let dataAfterDelete = DeleteBookModel.book.filter(value => {
                console.log(value._id);
                if (String(value._id) !== String(BookId)) {
                    return value;
                }
            })
            console.log(dataAfterDelete);
            DeleteBookModel.save()
            res.json(dataAfterDelete);
        }
    })
    

}

module.exports = {
    getBook,
    creatBook,
    deleteBook
};



