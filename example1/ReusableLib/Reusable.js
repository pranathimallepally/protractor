
var actions = require("./Actions.js");
//var envApp = require('../Environment.json');
//var login_page = require('../pages/login_page.js');
var portalHomepage = require("../login.js");
//var man = require('../manageUserSpec.js');
//Node module for Random Character generation
class Reusable {
    /**
     *
     * @param {string} sApp
     * @param {string} sEmail
     * @param {string} sPassword
     * @returns {boolean:bStatus}
     * @function loginIntoApp This function is used to Login into the App
     *                        depend on the Application name i.e. SaaS/Enterprise
     */
    /*async loginIntoApp(sApp) {
            var bStatus = true;
            try {
                //enter the email first
                var emailValue;
                var passValue;
                var otpValue;
                //Add Conditions for the Email and Password
                if (sApp.toUpperCase() == "SAAS") {
                    emailValue = envApp.SAASEMAIL;
                    passValue = envApp.SAASPASS;
                    otpValue = envApp.SAASOTP;
                } else {
                    emailValue = envApp.EPEMAIL;
                    passValue = envApp.EPPASS;
                    otpValue = envApp.EPPSOTP;
                }



                 await login_page.enterUserName(emailValue);
              
                 await login_page.clickSigninButton();
                 await login_page.enterPassword(passValue);
                 await login_page.enterOTP(otpValue);

                 await login_page.clickSigninButton();
                 await browser.sleep(10000);
                 browser.ignoreSynchronization = true;
                
                if (sApp.toUpperCase() == "SAAS") {
                    console.log("SSSS title");
                var exp_text=await element(by.css('a[title="Enterprise Admin"]')).getText();
                await expect(exp_text).toEqual('Enterprise Admin');
                //browser.sleep(5000);
                }
                else{
                    console.log("Check Enterprise title");
                    var exp_text=await element(by.css('a[title="Enterprise Admin"]')).getText();
                   // var exp_text=await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/a/span')).getText();
                    console.log(exp_text);
                    await expect(exp_text).toEqual('Enterprise Admin');
                    //browser.sleep(5000);

                }*/
                async loginIntoApp() {
                    try {
                        var otpValue;
                        var speakeasy = require('speakeasy');
                        var secret ='ZC47PXX3P7HVSC3BNRWS2JPEPTH7T757';
                        var token = speakeasy.totp({
                        secret: secret,
                        encoding: 'base32'
                    });
                
                    console.log(token);
                    otpValue = token;
                    await portalHomepage.inputOtp(otpValue);
                 }
                  catch (error) {
                    console.log("Error while Login in  Admin");
                    
                }
            }
        }
                
               

               /*

                //Add Validation for entering the email and Click on Sign in Button
                await element(by.css(LoginObject.EmailTextBox)).clear();
                await element(by.css(LoginObject.EmailTextBox)).sendKeys(emailValue);
                //Click on SSign in Button and Wait for Some times
                await element(by.xpath(LoginObject.SignInButton)).click();
                console.log("Sign In Button is clicked");
                await logger.info("PASS", "Sign In Button is clicked");
                //wait for Some times\
                await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
                var sOTP = rand.string({ length: 6, pool: '58794632' });
                /*   await element(by.css(LoginObject.EmailTextBox)).clear();
                  await element(by.css(LoginObject.EmailTextBox)).sendKeys(emailValue);
                  console.log("Email Id " + emailValue + " is typed");
                  await logger.info("PASS", "Email Id " + emailValue + " is typed"); */
                // await actions.type(element(by.css(LoginObject.EmailTextBox)),rand.email() , 'Email has been typed');
                //enter Some Random Character
                  /* 
                await element(by.css(LoginObject.PasswordTextBox)).clear();
                await element(by.css(LoginObject.PasswordTextBox)).sendKeys(passValue);

                console.log("Password " + passValue + " is typed");
                await logger.info("PASS", "Password " + passValue + " is typed");
                //Type OTP Value
                await element(by.css(LoginObject.OTPTextbox)).clear();
                await element(by.css(LoginObject.OTPTextbox)).sendKeys(sOTP);

                console.log("OTP " + sOTP + " is typed");
                await logger.info("PASS", "OTP " + passValue + " is typed");
                // await actions.type(element(by.css(LoginObject.PasswordTextBox)), rand.string({ length: 12 }), 'Passwod has been typed');
                //Now Click on Sign In Button
                await element(by.xpath(LoginObject.SignInButton)).click();
                console.log("Sign In Button is clicked");
                await logger.info("PASS", "Sign In Button is clicked");
                //await actions.clickOn(element(by.xpath(LoginObject.SignInButton)), 'Sign In button has been clicked');
                //Now validate On the basis of sApp Value
                //get a text and verify the entry , on the basis of sApp
                //   var sWelcomeText;
                //Condition
                 //await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
                if (sApp.toUpperCase() == "SAAS") {
                    await browser.wait(
                        EC.visibilityOf(element(by.css(LoginObject.SaaSText))),
                        minwait
                    );
                    var sWelcomeText = await element(
                        by.css(LoginObject.SaaSText)
                    ).getAttribute("title");
                    //Now put conditions
                    expect(sWelcomeText).toEqual(expectedText.SaasText);
                    console.log("User is successfully login into the SaaS Application");
                    //Add Condition
                } else {

                    console.log("Enterprise panel");
                    await browser.manage().timeouts().implicitlyWait(100000);
                    /*await browser.wait(
                        EC.visibilityOf(element(by.css(LoginObject.EnterprisesText))),
                        minwait
                    );
                    */
                     /* 
                    var sWelcomeText = await element(
                        by.css(LoginObject.EnterprisesText)
                    ).getAttribute("title");
                    console.log(sWelcomeText);
                    expect(sWelcomeText).toEqual(expectedText.EnterpriseText);
                    console.log(
                        "User is successfully login into the Enterprises Application"
                    );
                }

                
            } catch (error) {
                console.log("Error while Login in " + sApp + " Admin");
                bStatus = false;
            }
            return bStatus;
        }
        /**
         *
         * @param {String} sApp
         * @function logOutFromApp This function is also used to perform
         *                         logout from the App
         */
    /*async logOutFromApp(sApp) {
        //Click on the Test User
        try {
            //  console.log('Object***'+dashboardObject.TestUserText);
            //wait for some times
            await browser.wait(
                EC.presenceOf(element(by.css(dashboardObject.UserLogo))),
                minwait
            );
            await actions.clickOn(
                element(by.css(dashboardObject.UserLogo)),
                "Test User Acccount Clicked"
            );
            // await element(by.css(LoginObject.UserLogo)).click();
            console.log("Test User Logo is clicked");
            await logger.info("PASS", "User Logo is clicked");
            // await browser.manage().timeouts().implicitlyWait(minwait);
            //Click on Logout Link
            //  console.log('Click on Test User Section');
            await browser.wait(
                EC.presenceOf(element(by.css(dashboardObject.LogOutlink))),
                minwait
            );
            await actions.clickOn(
                element(by.css(dashboardObject.LogOutlink)),
                "LogOut Link has been Clicked"
            );
            //await element(by.css(dashboardObject.LogOutlink)).click();
            await console.log("After That Logout Link has been clicked");
            //wait for some times
            // await browser.waitForAngular();
            //Now validate the SuccessFully Logout or not
            if (sApp.toUpperCase() == "SAAS") {
                await browser.wait(
                    EC.presenceOf(element(by.xpath(LoginObject.SaaSHelloText))),
                    MAXWAITTIME
                );
                await expect(element(by.xpath(LoginObject.SaaSHelloText)).isPresent()).toBe(
                    true
                );
                console.log("User is Logout from the the SaaS Application");
            } else {
                await browser.wait(
                    EC.presenceOf(element(by.xpath(LoginObject.EnterpriseHelloText))),
                    MAXWAITTIME
                );
                await expect(
                    element(by.xpath(LoginObject.EnterpriseHelloText)).isPresent()
                ).toBe(true);
                console.log("User is Logout from the the Enterprise Application");
            }
        } catch (error) {
            console.log("Error occurred while Logout from " + sApp + " Application");
        }
    }

  
}*/

module.exports = new Reusable();