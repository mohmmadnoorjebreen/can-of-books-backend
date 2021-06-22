'use strict'

const modelOfUser = require('../model/user.model')



const getBook = (req, res) => {
    const { email } = req.query;

    modelOfUser.find({ email: email }, (error, bookModel) => {
        if (error) {
            res.send(error);
        } else {
            res.json(bookModel[10].book);
        }
    })

}



const creatBook = (req, res) => {

    const { userEmail, nameBook, descriptionBook, statusBook } = req.body;

    modelOfUser.find({ email: userEmail }, (error, newBookModel) => {
        console.log(newBookModel);
        if (error) {
            res.send(error);
        } else {

            newBookModel[11].book.push({ name: nameBook, description: descriptionBook, status: statusBook })
            res.json(newBookModel[11].book);
        }
    })

    newBookModel.save()
}

const deleteBook = (req, res) => {

    const BookId = req.params.id;
    const { email } = req.query;

    modelOfUser.find({ email: email }, (error, DeleteBookModel) => {
        if (error) {
            res.send(error);
        } else {
            console.log(DeleteBookModel);
            DeleteBookModel[10].book = DeleteBookModel[10].book.filter(value => {
                if (value._id !== BookId) {
                    return value;
                }
            })
            res.json(DeleteBookModel[10].book);
        }
    })
    // DeleteBookModel.save()

}

module.exports = {
    getBook,
    creatBook,
    deleteBook
};



