describe('Wefoxtest', function () {



    it('Check if the login page is correctly accessed', function () {
        var title = element(by.css('h1.wf-u-mb-12'));

        browser.get('https://my.wefox.de/login');
        expect(title.getText()).toEqual("Jetzt anmelden"); //Check if the Title of the page is "Jetzt anmelden"
    });


    it('Log In', function () {
        var focus = element(by.css('label[for="username"]'))
        var userfield = element(by.name('username'));
        var passwordfield = element(by.name('password'));
        var LoginButton = element(by.css('button[type = "submit"]'));
        browser.driver.sleep(1000);

        focus.click(); //Click this element to enable input of the user and password fields. 
        userfield.sendKeys('aqawefox+techtest@wefoxgroup.co'); //enter the username
        passwordfield.sendKeys('qwertyasdf'); //enter the password
        expect(userfield.getAttribute('value')).toEqual('aqawefox+techtest@wefoxgroup.co'); //Check if the entered values are correct
        expect(passwordfield.getAttribute('value')).toEqual('qwertyasdf');
        LoginButton.click();

    });

    it('Check if the profile page is loaded', function () {
        var newtitle = element(by.css('h1.wf-color-clear-white'));
        expect(newtitle.getText()).toEqual("Dashboard");  //Check if the Title of the page is "Dashboard"
    });

    it('Check if agent broker image is loaded', function () {
        var image = element(by.css('img.wf-c-header-agent__image'));
        expect(image.isPresent()).toBe(true); //Check if the agent broker image is present
    });


    it('Click on contracts sections and check the label “... no contracts yet”.', function () {
        var contract = element(by.css('[href="/contracts"]'));
        contract.click(); //click on the Contract link
        browser.driver.sleep(3000); // Wait 3 seconds for the page to load
        var label = element(by.css('.col-xs > p:nth-child(2)'));
        expect(label.getText()).toEqual("... no contracts yet"); // Check if the mention 'non contracts yet' is present
    });


    it('Click on Personal Data and check if the page is loaded', function () {
        var personaldata = element(by.css('[href="/account"]'));
        personaldata.click()
        var contractTitle = element(by.css('h1.wf-u-center'));
        expect(contractTitle.getText()).toEqual("Personal Data"); //Check if the Title of the page is "Personal Data"

    });



});
