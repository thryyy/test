var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['Wefoxtest.js'],
	capabilities: {
		'browserName': 'chrome'
	},
	onPrepare: function () {
		// implicit and page load timeouts
		browser.manage().timeouts().pageLoadTimeout(40000);
		browser.manage().timeouts().implicitlyWait(25000);

		// https://wefox.de/ does not use Angular
		browser.ignoreSynchronization = true;

		// Add a screenshot reporter and store screenshots and report to `/tmp/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'tmp/screenshots'
		}).getJasmine2Reporter());
		var reporter = new HtmlReporter({
			baseDirectory: 'tmp/screenshots'
		});
	}
};

