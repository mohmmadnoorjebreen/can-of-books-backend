'use strict'

const mongoose = require('mongoose');

const bookSchema = require('./book.model')


const userSchema = new mongoose.Schema({

    email: { type: String },
    book: [bookSchema]

})

const modelOfUser = mongoose.model('bookModel', userSchema)

const seedUserData = () => {
    const newModel = new modelOfUser({

        email: 'mohammadnoormjk1998@gmail.com',
        book: [
            {
                name: 'Don Quixote',
                description: 'the plot revolves around the adventures of a noble (hidalgo) from La Mancha named Alonso Quixano',
                status: 'new'
            },
            {
                name: 'the House of Mirth',
                description: 'The House of Mirth is a 1905 novel by American author Edith Wharton. It tells the story of Lily Bart,',
                status: 'new'
            },
            {
                name: 'East of Eden ',
                description: 'Steinbeck furthered the parallels in the naming of various characters. ... Just like Grapes of Wrath',
                status: 'not new'
            }
        ]
    })



    newModel.save()
console.log(newModel);

}
// seedUserData();

module.exports = modelOfUser;

