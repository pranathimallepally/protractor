var Loginpage = function() {
    var inputEmail = element(by.id('input-email'));
    var signIn =  element(by.buttonText('Sign In'));
    var inputPassword=element(by.id('input-password'));
    var inputOtp=element(by.id('input-otp'));
  
    this.get = async function() {
      await browser.get('https://dev-eea.pdbenterprise.com/');
    };
  
    require('./animal_page.js');
    this.enterEmail = function(email) {
            this.inputEmail.sendKeys(email);
            browser.driver.sleep(5000);
        };
        this.enterPassword = function(password) {
            this.inputPassword.sendKeys(password);
            browser.driver.sleep(5000);
        };    
        this.enterOtp= function(otp) {
            this.inputOtp.sendKeys(password);
        };        
        
         
        this.clickSignin = function() {
            this.signIn.click();
            browser.driver.sleep(5000);
            //return require('./animal_page.js');
        };
    };