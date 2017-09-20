let mongoose =require ('mongoose');
let Schema = mongoose.Schema;

/* book Schema as a collection */
let movieSchema = new Schema({
	poster_path:{type:'String'},
	title : {type:'String',unique:'true'},
	vote_average : {type:Number},
	release_date:{type: 'String'},
	comments:{type: 'String'}
},{versionKey:false})
let myMovie = mongoose.model('movies',movieSchema);

module.exports = myMovie;