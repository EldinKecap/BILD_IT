const express = require('express');
const { connectToDb,getDb } = require('./db'); 
const { ObjectId } = require('mongodb')
// init app and middleware
const app = express();

app.use(express.json());
let db ;


connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log("App is listening on port 3000");
        });
        db = getDb();
    }
})


// routes

app.get('/books',(req,res)=>{
    const page = req.query.p || 0;
    const booksPerPage = 3;


    let books = []
    db.collection('books')
    .find()
    .sort({author:1})
    .skip(page*booksPerPage)
    .limit(booksPerPage)
    .forEach(element => {
        books.push(element)
    }).then(()=>{
        res.status(200).json(books);
    })
    .catch(()=>{
        res.status(500).json({error:"Could not fetch"});
    })
})

app.get('/books/:id',(req,res)=>{
    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
        .findOne({_id:ObjectId(req.params.id)})
        .then(doc =>{
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({error:"Could not fetch"})
            console.log(err);
        })
    }else{
        res.status(500).json({error:"Not a valid document id"});
    }

})

app.post( '/books', (req,res)=>{
    const book = req.body;

    db.collection('books')
    .insertOne(book)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(error => {
        res.status(500).json({err:"Could not create new book"})
    })
})

app.delete( '/books/:id', (req,res)=>{
    if (ObjectId.isValid(req.params.id)) {
    db.collection('books')
    .deleteOne({_id : ObjectId(req.params.id)})
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({error:"Could not delete document"})
        console.log(err);
    })
}else{
    res.status(500).json({error:"Not a valid document id"});
}
})

app.patch('/books/:id' , (req,res)=>{
    const update = req.body;
    if(ObjectId.isValid(req.params.id)) {
        db.collection('books')
    .updateOne({_id : ObjectId(req.params.id)}, {$set: update })
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({error:"Could not update document"})
        console.log(err);
    })
}else{
    res.status(500).json({error:"Not a valid document id"});
}
})