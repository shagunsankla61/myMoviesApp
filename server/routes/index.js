let express = require('express');
let myBook=require('../model/bookSchema');

const router = express.Router();

/* show all movies present in db */
router.get('/',(req,res)=> {
	console.log("getting all books");
	myBook.find({},(err,docs)=> {
		if(err){
			console.log(err);
			res.send(err);
		} else {
			console.log(docs);
			res.json(docs);
		}
	})
})

/* show one movie after matching id */
router.get('/:id',(req,res)=> {
	console.log("getting one book");
	myBook.findOne({_id : req.params.id},(err,docs)=> {
		if(err){
			console.log(err);
			res.send(err);
		} else {
			console.log(docs);
			res.json(docs);
		}
	})
})

module.exports = router;