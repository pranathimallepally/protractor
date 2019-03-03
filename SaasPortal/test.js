describe('angularjs homepage', function() {
    var dtext1;
    it('should greet the named user', async function() 
    {
      
      browser.driver.manage().window().maximize();
      browser.get('https://xyz.dev.pdbenterprise.com');
      //browser.ignoreSynchronization = true;
      browser.sleep(5000);
      element(by.id('input-email')).sendKeys('pdb1200.four@gmail.com');
      browser.sleep(5000);
      element(by.buttonText('Sign In')).click();
      browser.sleep(5000);
      element(by.id('input-password')).sendKeys('Welcome2018!');
      element(by.id('input-otp')).sendKeys('123456');
      browser.sleep(5000);
      element(by.buttonText('Sign In')).click();
      browser.driver.sleep(5000);
    })
})