let express = require('express');
let myBook=require('../model/bookSchema');
const router = express.Router();

/* update movie data */
router.put('/update/:_id',(req,res)=> {
	myBook.findOneAndUpdate({
		_id:req.params._id
		},{$set:
			{
	title:req.body.title}},
			{upsert:'true'},(err,newBook)=> {
				if(err){
				console.log("error while updating book");
				res.send("error while updating book");
				} else {
				console.log(newBook);
				res.send(newBook);
			}
		})
})

module.exports = router;