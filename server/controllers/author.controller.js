//import the model

const { model } = require("mongoose");
const Author = require("../models/author.model");

//make ALL CRUD

// read all
module.exports.findAllAuthors = (req, res) =>{
    //use model to execute query
    Author.find()
    .then(allAuthors=>{
        res.json(allAuthors)//[]
    })
    .catch(err=>{console.log("couldnt retrieve",err)})
}

module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
    .then(newAuthor=>res.json({author:newAuthor}))
    .catch(err => res.status(400).json(err))
}

module.exports.findOneAuthor = (req,res)=>{
    Author.findById({ _id: req.params.id })
    .then(oneSingleAuthor => res.json({ user: oneSingleAuthor }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingAuthor = (req,res)=>{
    Author.updateOne({ _id: req.params.id }, req.body,{ new: true, runValidators: true })
    .then(updatedAuthor =>res.json({author: updatedAuthor}))
    .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthorById = (req,res)=>{
    Author.deleteOne({ _id: req.params.id })
    .then(result=>res.json({result:result}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}