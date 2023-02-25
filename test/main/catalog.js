			module.exports = {
				'Check test shop title': function (browser) {
					browser
						.url('http://testshop.sedtest-school.ru/')
						.waitForElementVisible('#navbarCollapse', 'Заголовок загружен'); //функция ожидает загрузки элемента страницы, который ожидает navbarCollapse

					browser.assert.titleEquals("TestGym");
					browser.assert.textContains("h4", "Каталог");

					browser.expect.title().to.contain('TestGym');
					browser.expect.element('h4').text.to.contain('Каталог');

					browser.expect.title().to.equal('TestGym');
					browser.expect.element('h4').text.to.equal('Каталог');

					browser.expect.title().to.match(/TestGym/);
					browser.expect.element('h4').text.to.match(/Каталог/);
					browser.end();
				}
			};