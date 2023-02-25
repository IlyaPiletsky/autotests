module.exports = {
	command: function(selector, word) {
		return this
			.setValue(selector, [word, this.Keys.ENTER]);
	}
};