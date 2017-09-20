let express = require('express');
let myBook=require('../model/bookSchema');
const router = express.Router();

/* insert movie data */
router.post('/insert',(req,res)=> {
	myBook.create(req.body,(err,Book)=> {
		if(err){
			console.log("error while saving book");
			res.send("error while saving book");
		} else {
			console.log(Book);
			res.send(Book);
		}
	})
})

module.exports = router;