describe('Wefoxtest', function () {

    it('Check if the login page is correctly accessed', function () {
        var title = element(by.css('h1.wf-u-mb-12'));

        browser.get('https://my.wefox.de/login');
        expect(title.getText()).toEqual("Jetzt anmelden");
    });

    it('Logs In ', function () {
        var focus = element(by.css('label[for="username"]'))
        var userfield = element(by.name('username'));
        var passwordfield = element(by.name('password'));
        var LoginButton = element(by.css('button[type = "submit"]'));

        focus.click();
        userfield.sendKeys('aqawefox+techtest@wefoxgroup.co');
        passwordfield.sendKeys('qwertyasdf');
        expect(userfield.getAttribute('value')).toEqual('aqawefox+techtest@wefoxgroup.co');
        expect(passwordfield.getAttribute('value')).toEqual('qwertyasdf');
        LoginButton.click();

    });

    it('Check if the profile page is loaded', function () {
        var newtitle = element(by.css('h1.wf-color-clear-white'));
        expect(newtitle.getText()).toEqual("Dashboard");
    });

    it('Check if agent broker image is loaded', function () {
        var image = element(by.css('img.wf-c-header-agent__imae'));
        expect(image.isPresent()).toBe(true);
    });
});
