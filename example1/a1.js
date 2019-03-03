var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
  
    this.get = async function() {
      await browser.get('http://www.angularjs.org');
      browser.sleep(5000);
    };
  
    this.setName = async function(name) {
      await nameInput.sendKeys(name);
      browser.sleep(5000);
    };
  
    this.getGreetingText = function() {
      return greeting.getText();
      browser.sleep(5000);
    };
  
    // Not async, returns the element
    this.getGreeting = function() {
      return greeting;
      browser.sleep(5000);
    };
  };
  module.exports = new AngularHomepage();