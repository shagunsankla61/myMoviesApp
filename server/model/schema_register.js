
let mongoose =require ('mongoose');
let Schema = mongoose.Schema;

/* book Schema as a collection */
let bookSchema = new Schema({
	Name:{type:'String'},
	Email:{type:'String'},
	Username:{type:'String'},
	Password:{type:'String'}
	},{versionKey:false})
let myBook = mongoose.model('signup',bookSchema);

module.exports = myBook;