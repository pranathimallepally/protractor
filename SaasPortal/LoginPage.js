var actions = require("./Actions.js");
 var LoginPage = function () {
 
         var el_signin_email = by.id('input-email');
         var el_signin_passowrd = by.id('input-password');
         var el_signin_otp = by.id('input-token');
         var el_signin_button = by.buttonText('Sign In');
     this.enterUserName = async function(value) {
         //console.log('enter UJsername');
         //await element(el_signin_email).sendKeys(value);
         await actions.type(element(el_signin_email),value,"Email is typed");
      };
 
      this.enterPassword = async function(value) {
        // await  element(el_signin_passowrd).sendKeys(value);
         await actions.type(element(el_signin_passowrd),value,"Password is typed");
      };
 
      this.enterOTP = async function(value) {
        // await  element(by.id('input-otp')).sendKeys(value);
         await actions.type(element(el_signin_otp),value,"OTP is typed");
      };
 
      this.clickSigninButton = async function() {
         //await element(by.buttonText('Sign In')).click();
         await actions.clickOn(element(el_signin_button), 'Sign In button has been clicked');
 
      };
} ;
  module.exports = new LoginPage();