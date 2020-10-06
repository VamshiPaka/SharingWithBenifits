const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	Post_title: {
		type: String,
		required: true
	},
	Post_desc: {
		type: String,
		required: true
	},
	Post_image: {
		type: String,
		required: true
	},
	Post_category: {
		type: String,
		required: true
	},
	date_added: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Post_model', PostSchema);
