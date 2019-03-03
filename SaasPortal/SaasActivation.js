var LoginPage = require('./LoginPage.js');
var reusable = require('./SaasReusable.js');
var Excel = require('exceljs');
var AppURL = require('./Env.json');
var expected_result = require('./expectedresult.json');
describe('Should activate saas account', function() {
    let accountUrlFromHomePage;
 it('Check login saas portal', async function() {
    await global.browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    await browser.get(AppURL.SAASURL);
    await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
    
    try {
      var blogin = await reusable.loginIntoApp("SAAS");
      console.log(blogin);
      if (blogin == true) {
      } else {
        throw "Not able to login";
      }
      } catch (error) {
      console.log(
        "Error while Login ***" + error
      );
      expect(false).toBe(true);
    }
});
var managesaasaccounts = require('./SaasManageAccountPage.js');
var managesaasadministrators = require('./SaasManageAdminPage');
   it('should activate an enterprise admin account',async function(){
      var speakeasy = require('speakeasy');
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      await managesaasaccounts.clickmanageSaasAccount();
      browser.sleep(5000);
      await managesaasaccounts.clickviewAdmin();
      browser.sleep(2000);
      accountUrlFromHomePage = await managesaasaccounts.getenterpriseUrlText();
      console.log(accountUrlFromHomePage);
      await managesaasaccounts.clickaddNewAdmin();
      browser.sleep(2000);
      var wrkbook = new Excel.Workbook();
            wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
            var worksheet = wrkbook.getWorksheet('AdminDetails');
            browser.waitForAngularEnabled(false);
            await managesaasaccounts.inputAdminName(worksheet.getCell('A20').value);
            browser.sleep(3000);
            await managesaasaccounts.inputAdminEmail(worksheet.getCell('A21').value);
            browser.sleep(3000);
            await managesaasaccounts.inputAdminPhone(worksheet.getCell('A22').value);
            browser.sleep(3000);
            await managesaasaccounts.clickgenerateOtpButton();
            browser.sleep(1000);
            var a = element(by.id('inputOT')).getText();
            a.getAttribute('value').then(async function(b) {
            console.log(b);
            await managesaasaccounts.clicksave();  
            browser.sleep(5000);
            browser.get(accountUrlFromHomePage+expected_result.exEnterpriseActivation);
        var parentGUID = await browser.getWindowHandle();
        console.log(parentGUID);
        browser.sleep(10000);
        await browser.element(by.xpath('//*[@id="input-email"]')).sendKeys('pdb1200.two@gmail.com');
        await browser.element(by.xpath('//*[@id="input-otp"]')).sendKeys(b);
        browser.sleep(5000);
        await browser.element(by.xpath('/html/body/pdb-app/app-enterpriseactivation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.sleep(2000);
        browser.sleep(10000);
        var imagedata=  await browser.element(by.xpath('/html/body/pdb-app/app-account-activation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div[1]/form/div/div[3]/div/img')).getAttribute('src');
        console.log(imagedata);
    //await browser.actions().sendKeys(protractor.Keys.CONTROL + "t").perform();
        browser.driver.executeScript("(window.open('https://zxing.org/w/decode.jspx'))");
        browser.sleep(2000);
        browser.getAllWindowHandles().then(async function (allGUID) {
        // print the title of th epage
        console.log("Page title before Switching : " + browser.getTitle());
        console.log("Total Windows : " + allGUID.length);
        for (let guid of allGUID) {
          // one enter into if blobk if the GUID is not equal to parent window's GUID
          if (guid != parentGUID) {
            console.log(guid);
            // switch to the guid
            browser.switchTo().window(guid);
            browser.switchTo().window(guid);
            await browser.element(by.css("input[name='u']")).sendKeys(imagedata);
            browser.sleep(5000);
            await browser.element(by.xpath('/html/body/div/table[2]/tbody/tr[1]/td[3]/input')).click();
            browser.sleep(5000);
            var str =  await browser.element(by.xpath('/html/body/div/table/tbody/tr[1]/td[2]/pre')).getText();
            browser.sleep(5000);
            console.log(str);
            var start = str.indexOf("=");
            var end = str.indexOf("&");
            var res = str.substring(start+1,end);
           /* rp("https://zxing.org/w/decode.jspx")
           .then(async function(html){
            var start = str.indexOf("=");
            var end = str.indexOf("&");
            var keysecret = str.slice(start + 1, end);*/
            console.log(res);
            browser.sleep(10000);
            browser.switchTo().window(parentGUID);
            await browser.element(by.id('input-password')).sendKeys('Welcome2018!');
            await browser.element(by.id('input-cpassword')).sendKeys('Welcome2018!');
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            var secret = res;
            var speakeasy = require('speakeasy');
            var token1 = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
            });
            console.log(token1);
            //await browser.actions().sendKeys(protractor.Keys.TAB);
            await browser.element(by.id('input-token1')).sendKeys(token1);
            await browser.sleep(50000);
            var token2 = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
            });
            console.log(token2);
            await browser.element(by.id('input-token2')).sendKeys(token2);
            browser.sleep(2000);
            await browser.element(by.buttonText('Activate')).click();
            browser.sleep(10000);
           // break the loop
            //break;
           // await browser.element(by.buttonText('login')).click();
           await browser.element(by.xpath('/html/body/pdb-app/app-registration-success/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div/div/div/form/div/div/button')).click();
           browser.sleep(3000);
           await browser.element(by.id('input-email')).sendKeys('pdb1200.two@gmail.com');
           browser.sleep(3000);
           //await browser.element(by.buttonText('signin')).click();
           await browser.element(by.xpath('/html/body/pdb-app/ngx-login/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div/div/div/auth-block/form/div[2]/div/button')).click();
           browser.sleep(3000);
           await browser.element(by.id('input-password')).sendKeys('Welcome2018!');
           browser.sleep(3000);
           await browser.element(by.id('input-otp')).sendKeys(token2);
           browser.sleep(3000);
           //await browser.element(by.buttonText('signin')).click();
           await browser.element(by.xpath('/html/body/pdb-app/ngx-login/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div/div/div/auth-block/form/div[4]/div/button')).click();
           browser.sleep(8000);
           await expect(managesaasaccounts.getrecoveryKeyPair()).toEqual('Generate Recovery Key Pair');
           //browser.restart();
           
          }
        }
      }); 
    })
  })

    });
    xit('should reset the credentials of an enterprise admin account',async function(){
      /*await global.browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    await browser.get(AppURL.SAASURL);
    await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
    
    try {
      var blogin = await reusable.loginIntoApp("SAAS");
      console.log(blogin);
      if (blogin == true) {
      } else {
        throw "Not able to login";
      }
      } catch (error) {
      console.log(
        "Error while Login ***" + error
      );
      expect(false).toBe(true);
    }*/
      var speakeasy = require('speakeasy');
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      browser.get("(window.open('https://portal.dev.pdbenterprise.com/#'))");
      await managesaasaccounts.clickmanageSaasAccount();
      browser.sleep(5000);
      await managesaasaccounts.clickviewAdmin();
      browser.sleep(2000);
      accountUrlFromHomePage = await managesaasaccounts.getenterpriseUrlText();
      console.log(accountUrlFromHomePage);
      await managesaasaccounts.clickenterpriseAdminReset();
      browser.sleep(2000);
      await managesaasaccounts.clickgenerateOtpButton();
         browser.sleep(2000);
         //await managesaasaccounts.getotpField();
         //console.log('retreived the new OTP');
         //await managesaasaccounts.clickreset();
         var a = element(by.id('inputOT')).getText();
            a.getAttribute('value').then(async function(b) {
            console.log(b);
            await managesaasaccounts.clickreset();  
            browser.sleep(5000);
            browser.get(accountUrlFromHomePage+expected_result.exResetPwd);
        var parentGUID = await browser.getWindowHandle();
        console.log(parentGUID);
        browser.sleep(10000);
        await browser.element(by.xpath('//*[@id="input-email"]')).sendKeys('pdb1200.two@gmail.com');
        await browser.element(by.xpath('//*[@id="input-otp"]')).sendKeys(b);
        browser.sleep(5000);
        //await browser.element(by.xpath('/html/body/pdb-app/app-enterpriseactivation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.element(by.xpath('/html/body/pdb-app/app-reset-pwdmail/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.sleep(2000);
        browser.sleep(10000);
        var imagedata=  await browser.element(by.xpath('/html/body/pdb-app/app-account-activation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div[1]/form/div/div[3]/div/img')).getAttribute('src');
        console.log(imagedata);
    //await browser.actions().sendKeys(protractor.Keys.CONTROL + "t").perform();
        browser.driver.executeScript("(window.open('https://zxing.org/w/decode.jspx'))");
        browser.sleep(2000);
        browser.getAllWindowHandles().then(async function (allGUID) {
        // print the title of th epage
        console.log("Page title before Switching : " + browser.getTitle());
        console.log("Total Windows : " + allGUID.length);
        for (let guid of allGUID) {
          // one enter into if blobk if the GUID is not equal to parent window's GUID
          if (guid != parentGUID) {
            console.log(guid);
            // switch to the guid
            browser.switchTo().window(guid);
            browser.switchTo().window(guid);
            await browser.element(by.css("input[name='u']")).sendKeys(imagedata);
            browser.sleep(5000);
            await browser.element(by.xpath('/html/body/div/table[2]/tbody/tr[1]/td[3]/input')).click();
            browser.sleep(5000);
            var str =  await browser.element(by.xpath('/html/body/div/table/tbody/tr[1]/td[2]/pre')).getText();
            browser.sleep(5000);
            console.log(str);
            var start = str.indexOf("=");
            var end = str.indexOf("&");
            var res = str.substring(start+1,end);
           /* rp("https://zxing.org/w/decode.jspx")
           .then(async function(html){
            var start = str.indexOf("=");
            var end = str.indexOf("&");
            var keysecret = str.slice(start + 1, end);*/
            console.log(res);
            browser.sleep(10000);
            browser.switchTo().window(parentGUID);
            await browser.element(by.id('input-password')).sendKeys('Welcome2018!');
            await browser.element(by.id('input-cpassword')).sendKeys('Welcome2018!');
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            var secret = res;
            var speakeasy = require('speakeasy');
            var token1 = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
            });
            console.log(token1);
            //await browser.actions().sendKeys(protractor.Keys.TAB);
            await browser.element(by.id('input-token1')).sendKeys(token1);
            await browser.sleep(50000);
            var token2 = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
            });
            console.log(token2);
            await browser.element(by.id('input-token2')).sendKeys(token2);
            browser.sleep(2000);
            await browser.element(by.buttonText('Activate')).click();
            browser.sleep(10000);
           // break the loop
            //break;
           // await browser.element(by.buttonText('login')).click();
           await browser.element(by.xpath('/html/body/pdb-app/app-registration-success/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div/div/div/form/div/div/button')).click();
           browser.sleep(3000);
           await browser.element(by.id('input-email')).sendKeys('pdb1200.two@gmail.com');
           browser.sleep(3000);
           //await browser.element(by.buttonText('signin')).click();
           await browser.element(by.xpath('/html/body/pdb-app/ngx-login/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div/div/div/auth-block/form/div[2]/div/button')).click();
           browser.sleep(3000);
           await browser.element(by.id('input-password')).sendKeys('Welcome2018!');
           browser.sleep(3000);
           await browser.element(by.id('input-otp')).sendKeys(token2);
           browser.sleep(3000);
           //await browser.element(by.buttonText('signin')).click();
           await browser.element(by.xpath('/html/body/pdb-app/ngx-login/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div/div/div/auth-block/form/div[4]/div/button')).click();
           browser.sleep(8000);
           await expect(managesaasaccounts.getrecoveryKeyPair()).toEqual('Generate Recovery Key Pair');
           browser.close();
          }
        }
      }); 
    })
  })
  xit('should delete an enterprise admin',async function(){
    await global.browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    await browser.get(AppURL.SAASURL);
    await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
    
    try {
      var blogin = await reusable.loginIntoApp("SAAS");
      console.log(blogin);
      if (blogin == true) {
      } else {
        throw "Not able to login";
      }
      } catch (error) {
      console.log(
        "Error while Login ***" + error
      );
      expect(false).toBe(true);
    }
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      await managesaasaccounts.clickmanageSaasAccount();
      browser.sleep(5000);
      await managesaasaccounts.clickviewAdmin();
      browser.sleep(2000);
      await browser.element(by.xpath('//*[@id="catable_filter"]/label/input')).senkeys('activate test');
      browser.sleep(2000);
      await managesaasaccounts.clickenterpriseAdminDelete();
      browser.sleep(2000);
      await managesaasaccounts.clickaccountDelete();
      browser.sleep(1000);
  })

    });
  