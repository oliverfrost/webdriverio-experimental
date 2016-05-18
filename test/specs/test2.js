var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.windowHandleMaximize('current');
        browser.url('/');

       
       
        browser.url('/extjs/6.0.2/examples/classic/simple-tasks/index.html');

       

        browser.setValue(".//*[@id='textfield-1037-inputEl']",'My First Task! 111');
        browser.keys('Enter');

        browser.getUrl().then(function(url) {
            console.log("{MY URL} ====> " + url);
        });

        browser.setValue(".//*[@id='textfield-1037-inputEl']",'My SECOND Task! 222');
        browser.keys('Enter');      



    });
});