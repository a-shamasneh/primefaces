var express = require('express');
var mongoose = require('mongoose');
var app = express();

require('./server/config/middleware.js') (app,express); 
require('./server/config/routes.js') (app,express);
//=============================================================================
/*									Database								 */
//=============================================================================
	var mongoURI ="mongodb://mais:1234@ds019866.mlab.com:19866/adhouse";
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('... mongoDB  adhouse is open');
	});
//=============================================================================
/*									Server   								 */
//=============================================================================

	var port = process.env.PORT || 4002;

	app.listen(port);
		
	// 'mongodb://mais:1234@ds019866.mlab.com:19866/adhouse';
module.exports = app;