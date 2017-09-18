var express = require('express');
var mongoose = require('mongoose');
var app = express();

require('./server/config/middleware.js') (app,express); 
require('./server/config/routes.js') (app,express);
//=============================================================================
/*									Database								 */
//=============================================================================
	var mongoURI ='mongodb://shamasneh:jyose2017@ds133084.mlab.com:33084/tracking';
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('... mongoDB  tracking is open');
	});
//=============================================================================
/*									Server   								 */
//=============================================================================

	var port = process.env.PORT || 4002;
	app.listen(port);
    module.exports = app;