/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';

var Thing = require('../api/thing/thing.model');
var Keyword = require('../api/keyword/keyword.model');

Thing.find({}).remove(function() {
	Thing.create({
		name : 'Development Tools',
		info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
	}, {
		name : 'Server and Client integration',
		info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
	}, {
		name : 'Smart Build System',
		info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
	},  {
		name : 'Modular Structure',
		info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
	},  {
		name : 'Optimized Build',
		info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
	},{
		name : 'Deployment Ready',
		info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
	});
});


var Photos = [
	{image_name: 'screenshot1', project_name: 'markr', type: 'ios', url: 'http://storage.googleapis.com/mba_images/markr/screen1.png'},
		{image_name: 'screenshot2', project_name: 'markr', type: 'ios', url: 'http://storage.googleapis.com/mba_images/markr/screen2.png'},
			];

			Keyword.find({}).remove(function(){
				Keyword.create(
					{ text: "angularJS" },
					{ text: "iOS"},
					{ text: "XCode"},
					{ text: "mobile development"},
					{ text: "web development"},
					{ text: "node.js"}
				);
			});
