let express = require('express');
let myBook=require('../model/bookSchema');
const router = express.Router();

/* delete movie data */
router.delete('/delete/:id',(req,res)=> {
	myBook.findOneAndRemove({_id:req.params.id},(err,Book)=> {
		if(err){
		console.log("error while deleting book");
		res.send("error while deleting book");
		} else {
		console.log(Book);
		res.send(Book);
		}
	})
})

module.exports = router;