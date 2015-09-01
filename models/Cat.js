var Guid = require('guid')

var CatConstructor = function(name, image, color) {
	this.name = name;
	this.image = image;
	this.color = color;
	this._id = Guid.create();
}

module.exports = CatConstructor;