    var portalHomepage = require('./login');
    var Excel = require('exceljs');
    var BrowserACtions = require('./Action.js');
    var reusable = require("./ReusableLib/Reusable.js");
    describe('Activating account', function() {
  it('should login to the portal', async function() {
      try{
      await portalHomepage.get();
      browser.sleep(5000);
      var wrkbook = new Excel.Workbook();
      wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
      var worksheet = wrkbook.getWorksheet('loginDetails');
      browser.waitForAngularEnabled(false);
      browser.sleep(3000);
      await portalHomepage.inputEmail(worksheet.getCell('A1').value);
      browser.sleep(3000);
      await portalHomepage.clickSignin();
      browser.sleep(3000);
      await portalHomepage.inputPassword(worksheet.getCell('A2').value);
      await reusable.loginIntoApp();
      browser.sleep(90000);
      await portalHomepage.clickSignin();
      browser.sleep(5000);
      return worksheet;
      }); 
      }
      catch(err){
      console.log(err);
      }
    });
    var manageadministrators = require('./manageAdministratorPage');
   it('should activate an admin account',async function(){
      var speakeasy = require('speakeasy');
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      await manageadministrators.clickManageAdministrator();
      browser.sleep(5000);
      /*await manageadministrators.clickAddNewAdmin();
      try{
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('Sheet3');
        browser.waitForAngularEnabled(false);
        await manageadministrators.inputAdminName(worksheet.getCell('A5').value);
        browser.sleep(3000);
        await manageadministrators.inputAdminEmail(worksheet.getCell('A6').value);
        browser.sleep(3000);
        await manageadministrators.inputAdminPhone(worksheet.getCell('A7').value);
        browser.sleep(3000);
        await manageadministrators.clickGenerateOtpButton();
        browser.sleep(5000);
        await manageadministrators.clickSaveButton();  
        browser.sleep(5000);
        return worksheet;
        }); 
       }
       catch(err){
        console.log(err);
       }*/
        await manageadministrators.clickResetogin();
        browser.sleep(3000);
        //browser.driver.executeScript("(window.open('https://zxing.org/w/decode.jspx'))");
        await manageadministrators.clickGenerateOtpButton();
        browser.sleep(3000);
        var a = element(by.id('inputOT ')).getText();
        a.getAttribute('value').then(async function(b) {
        console.log(b);
        await manageadministrators.clickReset();
        browser.sleep(3000);
        global.browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.get('https://datacops.dev.pdbenterprise.com/#/enterprise-activation');
        var parentGUID = await browser.getWindowHandle();
        console.log(parentGUID);
        browser.sleep(10000);
        await browser.element(by.xpath('//*[@id="input-email"]')).sendKeys('kevin001@gmail.com');
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
            await browser.actions().sendKeys(protractor.Keys.TAB);
            await browser.element(by.id('input-token1')).sendKeys(token1);
            browser.sleep(34000);
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
            break;
          }
        }
      }); 
    })
  })
/*it('should reset the credentials of the activated user',async function(){
    await portalHomepage.get();
    browser.sleep(5000);
    var wrkbook = new Excel.Workbook();
    wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
    var worksheet = wrkbook.getWorksheet('loginDetails');
    browser.waitForAngularEnabled(false);
    browser.sleep(3000);
    await portalHomepage.inputEmail(worksheet.getCell('A1').value);
    browser.sleep(3000);
    await portalHomepage.clickSignin();
    browser.sleep(3000);
    await portalHomepage.inputPassword(worksheet.getCell('A2').value);
    await reusable.loginIntoApp();
    browser.sleep(90000);
    await portalHomepage.clickSignin();
    browser.sleep(5000);
    })
    browser.ignoreSynchronization = true;
    browser.sleep(4000);
    await manageadministrators.clickManageAdministrator();
    browser.sleep(5000);
    await manageadministrators.clickResetogin();
    browser.sleep(3000);
    await manageadministrators.clickGenerateOtpButton();
    browser.sleep(3000);
    var a = element(by.id('inputOT ')).getText();
    a.getAttribute('value').then(function(b) {
    console.log(b);
    manageadministrators.clickReset();
    browser.sleep(3000);
    global.browser.manage().window().maximize();
    browser.ignoreSynchronization = true;
    browser.get("https://dev-eea.pdbenterprise.com/#/reset-pwd");
    var parentGUID = browser.getWindowHandle();
    console.log(parentGUID);
    browser.sleep(1000);
    browser.element(by.id('input-email')).sendKeys('kevin001@gmail.com');
    browser.sleep(1000);
    browser.element(by.id('input-otp')).sendKeys(b);
    browser.sleep(1000);
    browser.element(by.xpath('/html/body/pdb-app/app-reset-pwdmail/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
    browser.sleep(1000);
    var imagedata=  browser.element(by.xpath('/html/body/pdb-app/app-account-activation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div[1]/form/div/div[3]/div/img')).getAttribute('src');
    browser.driver.executeScript("(window.open('https://zxing.org/w/decode.jspx'))");
    browser.sleep(2000);
    browser.getAllWindowHandles().then(async function (allGUID) {
    console.log("Page title before Switching : " + browser.getTitle());
    console.log("Total Windows : " + allGUID.length);
      for (let guid of allGUID) {
          //enters into if blobk if the GUID is not equal to parent window's GUID
          if (guid != parentGUID) {
            console.log(guid);
            // switch to the guid
            browser.switchTo().window(guid);
            browser.switchTo().window(guid);
            browser.element(by.css("input[name='u']")).sendKeys(imagedata);
            browser.sleep(5000);
             browser.element(by.xpath('/html/body/div/table[2]/tbody/tr[1]/td[3]/input')).click();
            browser.sleep(5000);
            var str =  browser.element(by.xpath('/html/body/div/table/tbody/tr[1]/td[2]/pre')).getText();
             browser.sleep(5000);
            console.log(str);
            var start = str.indexOf("=");
            var end = str.indexOf("&");
            var res = str.substring(start+1,end);
            console.log(res);
            browser.sleep(10000);
            browser.switchTo().window(parentGUID);
            browser.element(by.id('input-password')).sendKeys('Welcome2018!');
            browser.element(by.id('input-cpassword')).sendKeys('Welcome2018!');
            browser.actions().sendKeys(protractor.Key.TAB).perform();
            var secret = res;
            var token1 = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
            });
            console.log(token1);
            browser.element(by.id('input-token1')).sendKeys(token1);
            browser.sleep(34000);
            var token2 = speakeasy.totp({
            secret: secret,
            encoding: 'base32'
            });
           console.log(token2);
            browser.element(by.id('input-token2')).sendKeys(token2);
            browser.sleep(2000);
            browser.element(by.buttonText('Activate')).click();
            browser.sleep(10000);
            break;
          }
        }
      });
    })
})*/
})
    
