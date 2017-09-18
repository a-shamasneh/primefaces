var ApiController=require('../database/Api/ApiUserController.js');
module.exports = function (app,express) {
	
/*								Api route									 */
//=============================================================================
		app.post('/api/login',ApiController.signin);
		// app.post('/api/signup',ApiController.signup);
		//app.get('/api/signin',AdvController.getall);
		
};