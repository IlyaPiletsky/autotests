module.exports = {
	'@tags': ['search'],
	
	before(browser) {
		browser
			.page.settings()
			.navigate()
			.waitForElementVisible('@welcome', 'Main title visible')
			.assert.textContains('@titleFour', 'Каталог', 'Main title correct');
	},
	after(browser) {
		browser.end();
	},
	
	'Search for Apple': function (browser) {
		browser
			.page.settings()
			.search('Яблоко')
			.waitForElementVisible('@visibleElementSearch', 'Page title here')
			.assert.urlContains('http://testshop.sedtest-school.ru/?category=undefined&min_price=undefined&max_price=undefined&discount=undefined&min_count=undefined&max_count=undefined&brand=undefined&group_by=undefined&' + encodeURI('search=Яблоко'))
			.assert.titleContains('TestGym', 'title ok')
			.assert.textContains('@visibleElementProduct', 'Супер яблоко', 'Title ok');
	},


	// Этот кейс переписать
//	'Search for Google Car': function (browser) {
		
//		browser
//			.page.settings()
//			.setValue("@searchBar", ['Google Car', browser.Keys.ENTER])
//			.waitForElementVisible('@visibleElementSearch', 'Page title here')
//			.assert.urlContains('http://testshop.sedtest-school.ru/?category=undefined&min_price=undefined&max_price=undefined&discount=undefined&min_count=undefined&max_count=undefined&brand=undefined&group_by=undefined&' + encodeURI('search=Google+Car'))
//			.assert.titleContains('TestGym', 'title ok')
//			.useXpath()
//			.assert.attributeContains('//a[contains(@href, "/product/17")]', 'href', '/product/17', 'Title ok');
//	},
};