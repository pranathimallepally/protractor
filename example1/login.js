/*describe('angularjs homepage', function() {
    it('should greet the named user', function() {
    browser.get('https://dev-eea.pdbenterprise.com/');
    browser.driver.sleep(5000);
    browser.driver.manage().window().maximize();
    browser.driver.sleep(5000);
    element(by.id('input-email')).sendKeys('vvgkrishna.a@axiomio.com');
    browser.driver.sleep(5000);
    element(by.buttonText('Sign In')).click();
    browser.driver.sleep(5000);
    element(by.id('input-password')).sendKeys('Welcome2018!');
    browser.driver.sleep(5000);
    element(by.id('input-otp')).sendKeys('123456!');
    browser.driver.sleep(5000);
    element(by.buttonText('Sign In')).click();
    browser.driver.sleep(10000);
    browser.ignoreSynchronization = true;
    //element(by.css('a[Title*="Manage Users"]')).click();
    element(by.css('a[title="Manage Users"]')).click();
    
    browser.driver.sleep(10000);
    });
    });*/
    /*describe('saas admin page', function() {
     beforeEach(function() {
            browser.get('https://dev-eea.pdbenterprise.com/');
            browser.driver.manage().window().maximize();
            browser.driver.sleep(5000);
        });
         //var Loginpage = require('./login.js');
        it ('check login page functionality', function() {
            var Loginpage = require('C:/Users/admin/AppData/Roaming/npm/node_modules/protractor/example/login.js');
            //var loginPageObj = new Loginpage();
            Loginpage.enterEmail('vvgkrishna.a@axiomio.com');
            //browser.driver.sleep(5000);
            /*Loginpage.enterPassword('Welcome2018!');
            browser.driver.sleep(5000);
            Loginpage.enterOtp('123456');
            browser.driver.sleep(5000);
            Loginpage.clickSignin();
            browser.driver.sleep(5000);
            
        });
    });
    var EC = protractor.ExpectedConditions;*/
/*var Loginpage = function() {
    var inputEmail = element(by.id('input-email'));
    var signIn =  element(by.buttonText('Sign In'));
    var inputPassword=element(by.id('input-password'));
    var inputOtp=element(by.id('input-otp'));
  
    this.get = async function() {
      await browser.get('https://dev-eea.pdbenterprise.com/');
    };
  
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
            browser.driver.sleep(5000);
        };        
        
         
        this.clickSignin = function() {
            this.signIn.click();
            browser.driver.sleep(5000);
            //return require('./animal_page.js');
        };
    };*/
    
    var portalHomepage = function() {
        var emailInput = element(by.id('input-email'));
        var signIn =  element(by.buttonText('Sign In'));
        var inputPassword=element(by.id('input-password'));
        var inputOtp=element(by.id('input-otp'));
        var EC = protractor.ExpectedConditions;

        this.get = async function() {
          await browser.get('https://datacops.dev.pdbenterprise.com/');
          browser.driver.manage().window().maximize();
          browser.sleep(5000);
        };
      
        this.inputEmail = async function(email) {
          await emailInput.sendKeys(email);
          browser.sleep(5000);
        };
        this.clickSignin = async function() {
          await signIn.click();
          //browser.wait(EC.elementToBeClickable(signIn), 5000); 
          browser.sleep(5000);
        };
        this.inputPassword= async function(password) {
          await inputPassword.sendKeys(password);
          browser.sleep(5000);
        };
        this.inputOtp= async function(otp) {
           await inputOtp.sendKeys(otp);
           browser.sleep(5000);
        };
          //return portalHomepage;
      };
      /*this.inputOtp= async function(token) {
        var speakeasy = require('speakeasy');
        var secret = "WNLKV5O6HNTSZBPQXZLUVKKVJLEXTDZR";
        var token = speakeasy.totp({
        secret: secret,
        encoding: 'base32'
    });
        await inputOtp.sendKeys(token);
        browser.sleep(5000);
      };*/
      module.exports = new portalHomepage();