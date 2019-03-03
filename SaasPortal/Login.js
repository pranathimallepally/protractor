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
      
  };
  module.exports = new portalHomepage();