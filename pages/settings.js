const pageCommands = {
	search(word) {
		this
			.setValueRun('@searchBar', word)
		return this;
	}
};

module.exports = {
	url: 'http://testshop.sedtest-school.ru/',
	commands: [pageCommands],
	elements: {
		welcome: '#navbarCollapse',
		titleFour: 'h4',
		visibleElementSearch: {selector: 'a[class=text-info]'},
		visibleElementProduct: {selector: 'a[class=text-info]'},		
		searchBar: 'input[name=search]'
	}
}