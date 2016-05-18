// var assert = require('assert');
//
// describe('webdriver.io page', function() {
//     it('should have the right title - the fancy generator way', function () {
//         browser.windowHandleMaximize('current');
//         browser.url('/');
//
//        
//        
//         browser.url('/extjs/6.0.2/examples/classic/simple-tasks/index.html');
//
//        
//
//         browser.setValue(".//*[@id='textfield-1037-inputEl']",'My First Task! 111');
//         browser.keys('Enter');
//
//         browser.getUrl().then(function(url) {
//             console.log("{MY URL} ====> " + url);
//         });
//
//         browser.setValue(".//*[@id='textfield-1037-inputEl']",'My SECOND Task! 222');
//         browser.keys('Enter');      
//
//
//
//     });
// });


describe('DuckDuckGo search', function() {
    it('searches for WebdriverIO', function() {
        browser.url('https://duckduckgo.com/');
        browser.setValue('#search_form_input_homepage', 'WebdriverIO');
        browser.click('#search_button_homepage');

        var title = browser.getTitle();
        console.log('Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });
});