import express from 'express';
import { Book } from '../models/bookmodel.js';

const router = express.Router();

//parse json middleware
router.use(express.json())


//add a book 
router.post('/', async (req,res) =>{
    try {
        if (
           !req.body.title ||
           !req.body.author ||
           !req.body.publishYear
        ) {
            return res.status(400).send({message : 'Send all required fields: title , author and publishYear'});
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error.message});
    }
})

//get all books 
router.get('/', async (req,res) =>{
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data : books,
        });
    } catch (error) {
        console.log({message : error.message});
        res.status(500).send({message : error.message});
    }
})

//get 1 book from Dbase by id mongoose 
router.get('/:id', async (req,res) =>{
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log({message : error.message});
        res.status(500).send({message : error.message});
    }
})

//modify book
router.put('/:id', async (req,res) =>{
    try {
        if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear) {
            return res.status(400).send({message : 'Send all required fields: title , author and publishYear'});
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({message : 'Book not found'});
        }
        return res.status(200).send({message : 'Book updated successfully'})
    } catch (error) {
        console.log({message : error.message});
        res.status(500).send({message : error.message})
    }
})

//delete a book 
router.delete('/:id', async (req,res) =>{
    try {
     const {id} = req.params;
     const result = await Book.findByIdAndDelete(id);
     if (!result) {
         return res.status(404).json({message : 'Book not found'});
     }
     return res.status(200).send({message : `Book with the id ${id} named ${result.title} is deleted`})
    } catch (error) {
     console.log({message : error.message});
     res.status(500).send({message : error.message})
    }
}) 

//root
//BwRpSZw3lYW67eKa
//mongodb+srv://root:<password>@dbase.xdf0akx.mongodb.net/?retryWrites=true&w=majority

export default router;