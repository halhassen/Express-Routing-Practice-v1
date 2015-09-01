//this works because it's in the same folder
var Cat = require('./Cat');

var catDatabase = [];
catDatabase.push(new Cat('Persephone', 'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 'White'));
catDatabase.push(new Cat('Socks', 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/140.jpg', 'Brown'));
catDatabase.push(new Cat('Snowball', 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg', 'A mess of colors'));

module.exports = catDatabase;


//practice routing, all of this, more modules, and practice!!!
//maybe practice using inputs and sending that information
//Review angular, codecademy angular, and maybe more about node.js