/* jshint esnext:true, node:true */
'use strict';


function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		return submittedUsers.every(function(currentSubmittedUser) {
			return goodUsers.some(function(currentGoodUser) {
				return currentGoodUser.id === currentSubmittedUser.id;
			});
		});
	};
}

module.exports = checkUsersValid;
