
/*
 * API for account information
 *
 * - get information about your own account
 * - change name
 * - change password
 */

module.exports = function() {
	return require('../api-helper')({
		'/' : {
			get : require('./collection.get.js'),
			put : require('./collection.put.js')
		},
		'/actions/change_password' : {
			post : require('./collection.actions.changePassword.js')
		},
		'/actions/login' : {
			post : require('./collection.actions.login.post.js')
		},
		'/actions/register' : {
			post : require('./collection.actions.register.js')
		}
	}, {
		autoDb : true
	});
};
