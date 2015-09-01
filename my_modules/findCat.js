var cats = require('../models/db');

var findCat = function(id, cb) {
	for(var i = 0; i < cats.length; i++) {
		if(cats[i]._id.equals(id)) {
		//The cat exists, so call the callback with the cat
		return cb(null, cats[i]);
	}
}
	//if the cat does not exist, call the callback with an error
	cb('The requested cat does not exist. The id was: ' + id)
};

module.exports = findCat;