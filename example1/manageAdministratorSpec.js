
    var portalHomepage = require('./login');
    var Excel = require('exceljs');
    var BrowserACtions = require('./Action.js');
    var reusable = require("./ReusableLib/Reusable.js");
    describe('Manage Administrators', function() {
   /*login to the enterprise portal*/
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
    /*clicks the manage administrator tab*/
  it('should navigate to manage admin', async function() {
    browser.sleep(5000);
    await manageadministrators.clickManageAdministrator();
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    });
    /*Retrieves and verifies the title*/
  it('should verify title', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(4000);
    await manageadministrators.getManageAdministratorTitle();
    browser.sleep(3000);
    //console.log(manageadministrators.getmanageAdministartorsTitle);
    expect(manageadministrators.getManageAdministratorTitle()).toEqual('Manage Administrators for DataCops');
    browser.sleep(3000);
    await manageadministrators.getAccountNameTitle();
    expect(await manageadministrators.getAccountNameTitle()).toEqual('Account Name :');
    await manageadministrators.getAccountnamevalue();
    expect(await manageadministrators.getAccountnamevalue()).toEqual('DataCops');
    await manageadministrators.getAccountAdminUrlTitle();
    expect(await manageadministrators.getAccountAdminUrlTitle()).toEqual('Account Admin URL :');
    await manageadministrators.getAccountAdminUrlValue();
    expect(await manageadministrators.getAccountAdminUrlValue()).toEqual('https://datacops.dev.pdbenterprise.com');
   });
      /*performs dropdown selection*/
  it('should select from dropdown', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var dropdownElement = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select'));
    var returnValue;
    var selectDropdownbyNum =  function ( element, optionNum ){
        if (optionNum){
        var options =  element.all(by.tagName('option'))   
        .then(function(options){
        options[optionNum].click();
        var dtext = options[optionNum].getText();
        dtext.getAttribute('value').then(function(inputValue) {
        returnValue = inputValue;
        console.log(returnValue)
        return returnValue;
        });
        });
        browser.sleep(3000);
        }
    };
        selectDropdownbyNum(dropdownElement,1);
        });
        /*Edit the existing administartor*/
      it('should edit an administrator', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        await manageadministrators.enterSearchText('renamed');
        await manageadministrators.clickEditAdmin();
        browser.sleep(1000);
        await manageadministrators.getEditAdminTitle();
        //expect(manageadministrators.getEditAdminTitle()).toEqual('Edit Administrator x');
        browser.sleep(2000);
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('loginDetails');
        browser.waitForAngularEnabled(false);
        //await manageadministrators.enterSearchText('renamed');
        element(by.name('adminName')).click().clear().sendKeys(worksheet.getCell('A8').value);
        browser.sleep(3000);
        element(by.id('inputPhone')).click().clear().sendKeys(worksheet.getCell('A9').value);
        browser.sleep(3000);
        element(by.buttonText('Save')).click();
        await manageadministrators.getEditAdminText();
        expect(manageadministrators.getEditAdminText()).toEqual('Successfully updated organization account administrator record.');
        browser.sleep(3000);
        });
      });
    /*Cancel editing the selected administrator*/
      it('should cancel editing administrator', async function(){
        await manageadministrators.clickEditAdmin();
        await manageadministrators.clickCancelButton();
        browser.sleep(5000);
       });
    /*Close the edit admin window*/
      it('should close edit admin window',async function(){
        await manageadministrators.clickEditAdmin();
        await manageadministrators.clickEditAdminClose();
        browser.sleep(3000);
      });
    /*Reset the credentials of an existing admin*/
      it('should reset admin login details', async function(){
       await manageadministrators.clickResetogin();
        browser.sleep(3000);
        await manageadministrators.clickGenerateOtpButton();
        browser.sleep(3000);
        var a = element(by.id('inputOT ')).getText();
        a.getAttribute('value').then(function(b) {
        console.log(b);
        manageadministrators.clickReset();
        browser.sleep(3000);
        browser.driver.executeScript("(window.open('https://datacops.dev.pdbenterprise.com/#/reset-pwd'))");
        var winHandles=browser.getAllWindowHandles();
        winHandles.then(function(handles) 
        {
        var parentWindow=handles[0];
        var popUpWindow=handles[1];
        browser.switchTo().window(popUpWindow);
        element(by.xpath('//*[@id="input-email"]')).sendKeys('aiosecurebridge@gmail.com');
        browser.sleep(1000);
        element(by.id('input-otp')).sendKeys(b);
        browser.sleep(1000);
        element(by.xpath('/html/body/pdb-app/app-reset-pwdmail/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.sleep(1000);
        browser.close();
        browser.switchTo().window(parentWindow);
        })
        })
        await manageadministrators.getResetLoginText();
        browser.sleep(1000);
        expect(manageadministrators.getResetLoginText()).toEqual('Successfully updated OTP.');
        browser.sleep(3000);
      });
    /*Cancel to reset login details*/
      it('should cancel to reset login details',async function(){
        await manageadministrators.clickResetogin();
        browser.sleep(2000);
        await manageadministrators.clickCancelButton();
        browser.sleep(5000);
       });
    /*Deleting the selected admin record*/
      it('should delete admin record', async function() {
          browser.ignoreSynchronization = true;
          browser.sleep(3000);
          element(by.xpath('//*[@id="manageAdmin_filter"]/label/input')).click().clear().sendKeys('Test');
          await manageadministrators.clickDeleteAdmin();
          browser.sleep(1000);
          await manageadministrators.clickConfirmDelete();
          browser.sleep(5000);
          await manageadministrators.getDeleteText();
          browser.sleep(3000);
          expect(manageadministrators.getDeleteText()).toEqual('Successfully deleted organization account administrator.');
          browser.sleep(2000);
       });
    /*Cancel deleting an admin*/
       it('should cancel admin deletion',async function(){
          browser.ignoreSynchronization = true;
          browser.sleep(3000);
          element(by.xpath('//*[@id="manageAdmin_filter"]/label/input')).click().clear().sendKeys('renamed');
          await manageadministrators.clickDeleteAdmin();
          browser.sleep(3000);
          await manageadministrators.clickCancelDelete();
          browser.sleep(2000);
          //await manageadministrators.clickCloseButton();
          //browser.sleep(1000);
       });
        /*selecting to add a new administrator*/
       it('should click add new admin', async function() {
         //await angularHomepage.get();
           browser.ignoreSynchronization = true;
           browser.sleep(5000);
           await manageadministrators.clickAddNewAdmin();
           browser.sleep(5000);
        });
        /*Adding an admin with the specified details*/
       it('should add a new admin', async function() {
          browser.ignoreSynchronization = true;
          browser.sleep(5000);
          try{
          var wrkbook = new Excel.Workbook();
          wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
          var worksheet = wrkbook.getWorksheet('loginDetails');
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
         }
       });
       /*verify that admin is added successfully*/
        it('should verify admin added successfully', async function(){
            browser.ignoreSynchronization = true;
            browser.sleep(2000);
            await manageadministrators.getAdminAddedMessage();
            expect(manageadministrators.getAdminAddedMessage()).toEqual('Successfully added organization account administrator.');
        })
       xit('should activate admin', async function(){
           //try{
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        
        await manageadministrators.clickResetogin();
        browser.sleep(3000);
        //browser.driver.executeScript("(window.open('https://zxing.org/w/decode.jspx'))");
        await manageadministrators.clickGenerateOtpButton();
        browser.sleep(3000);
        var a = element(by.id('inputOT ')).getText();
        a.getAttribute('value').then(function(b) {
        console.log(b);
        manageadministrators.clickReset();
        browser.sleep(3000);
        /*var enterprise = browser.forkNewDriverInstance();
        enterprise.ignoreSynchronization = true;
        enterprise.get('https://datacops.dev.pdbenterprise.com/#/enterprise-activation');
        enterprise.sleep(2000);
        enterprise.element(by.xpath('//*[@id="input-email"]')).sendKeys('kevin001@gmail.com');
        enterprise.element(by.xpath('//*[@id="input-otp"]')).sendKeys(b);
        enterprise.element(by.xpath('/html/body/pdb-app/app-reset-pwdmail/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.sleep(10000);
        enterprise.close();
        var reset = browser.forkNewDriverInstance();
        reset.ignoreSynchronization = true;
        reset.get('https://datacops.dev.pdbenterprise.com/#/reset-pwd');
        reset.sleep(2000);
        reset.element(by.xpath('//*[@id="input-email"]')).sendKeys('aiosecurebridge@gmail.com');
        reset.element(by.xpath('//*[@id="input-otp"]')).sendKeys(a);
        console.log(a);
        reset.element(by.xpath('/html/body/pdb-app/app-reset-pwdmail/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.sleep(10000);
        reset.close();*/
        /*browser.driver.executeScript("(window.open('https://datacops.dev.pdbenterprise.com/#/enterprise-activation'))");
        var winHandles=browser.getAllWindowHandles();
        winHandles.then(function(handles) 
        {
        var parentWindow=handles[0];
        var popUpWindow=handles[1];
        browser.switchTo().window(popUpWindow);
        element(by.xpath('//*[@id="input-email"]')).sendKeys('kevin001@gmail.com');
        browser.sleep(1000);
        element(by.xpath('//*[@id="input-otp"]')).sendKeys(b);
        browser.sleep(2000);
        console.log(b);
        element(by.xpath('/html/body/pdb-app/app-enterpriseactivation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
        browser.sleep(2000);
        browser.switchTo().window(parentWindow);
        })*/
        //})
     const $ = require('cheerio');
    const rp = require('request-promise');
    var speakeasy = require('speakeasy');

    //await global.browser.manage().window().maximize();
     global.browser.manage().window().maximize();
    browser.ignoreSynchronization = true;
    //await browser.get("https://dev-eea.pdbenterprise.com/#/reset-pwd");
    browser.get('https://datacops.dev.pdbenterprise.com/#/enterprise-activation');
    //browser.driver.executeScript("(window.open('https://datacops.dev.pdbenterprise.com/#/enterprise-activation'))");
    var parentGUID =  browser.getWindowHandle();
    console.log(parentGUID);
    browser.sleep(10000);
     browser.element(by.xpath('//*[@id="input-email"]')).sendKeys('kevin001@gmail.com');
     browser.element(by.xpath('//*[@id="input-otp"]')).sendKeys(b);
    browser.sleep(5000);
    
    //await browser.element(by.buttonText('Reset Password')).click();
    element(by.xpath('/html/body/pdb-app/app-enterpriseactivation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/form/div[3]/div/button')).click();
    browser.sleep(2000);
    browser.refresh();
    browser.sleep(10000);

    //var imagedata= await browser.element(by.xpath('/html/body/pdb-app/app-account-activation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div/div[1]/form/div/div[3]/div/img')).getAttribute('src');
     var imagedata=  browser.element(by.xpath('/html/body/pdb-app/app-account-activation/nb-layout/div/div/div/div/div/nb-layout-column/nb-card/nb-card-body/div/div[2]/div[1]/div[1]/form/div/div[3]/div/img')).getAttribute('src');
    //console.log(imagedata);
    //await browser.actions().sendKeys(protractor.Keys.CONTROL + "t").perform();
    browser.driver.executeScript("(window.open('https://zxing.org/w/decode.jspx'))");
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
           /* rp("https://zxing.org/w/decode.jspx")
      .then(async function(html){
          var start = str.indexOf("=");
          var end = str.indexOf("&");
          var keysecret = str.slice(start + 1, end);*/
          console.log(res);

          browser.sleep(10000);
       browser.switchTo().window(parentGUID);
       browser.element(by.id('input-password')).sendKeys('Welcome2018!');
       browser.element(by.id('input-cpassword')).sendKeys('Welcome2018!');
    //await browser.element(by.id('input-cpassword')).sendKeys(Keys.TAB);
    browser.actions().sendKeys(protractor.Key.TAB).perform();
     
    //var secret = keysecret;
    var secret = res;

    var token1 = speakeasy.totp({
      secret: secret,
      encoding: 'base32'
    });
    console.log(token1);
    //await browser.actions().sendKeys(protractor.Keys.TAB);
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
  
        //});
        
            // break the loop
            break;
          }
        }
    })
        
    });  

           //}
    //catch(err){
        //console.log(err);
    //}  
      });
        /*Cancel adding an admin*/
      it('should cancel adding an admin',async function(){
           browser.ignoreSynchronization = true;
           browser.sleep(2000);
           await manageadministrators.clickAddNewAdmin();
           await manageadministrators.clickCancelButton();
           browser.sleep(2000);
       })
       /*Close the add admin window*/
       it('should close add admin window',async function(){
        await manageadministrators.clickAddNewAdmin();
          await manageadministrators.clickCloseButton();
          browser.sleep(5000);
        });   
        /*Should perform search functionality*/
      it('should search for entered text', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        try{
         var wrkbook = new Excel.Workbook();
         wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
         var worksheet = wrkbook.getWorksheet('loginDetails');
         browser.waitForAngularEnabled(false);
         element(by.xpath('//*[@id="manageAdmin_filter"]/label/input')).click().clear();
         await manageadministrators.enterSearchText(worksheet.getCell('A36').value);
        browser.sleep(30000);
         return worksheet;
        }); 
        }
        catch(err){
        console.log(err);
        }
        });
        /*it('should sort text fields', async function(){
           browser.ignoreSynchronization = true;
           browser.sleep(3000);
           await manageadministrators.clickSortfeilds();
           browser.sleep(30000);
        });*/
       /*check navigation to the previous page*/
       it('should navigate to previous page', async function(){
           browser.ignoreSynchronization = true;
           browser.sleep(3000);
           await manageadministrators.clickPreviousAdmin();
           browser.sleep(30000);
        });
        /*check navigation to the next page*/
        it('should navigate to next page', async function(){
           browser.ignoreSynchronization = true;
           browser.sleep(3000);
           await manageadministrators.clickNextAdmin();
           browser.sleep(30000);
        });
        /*check sorting in ascending and descending order*/
        it('should sort the given table',async function(){
            browser.ignoreSynchronization = true;
            browser.sleep(5000);
            await manageadministrators.dovalidateSorting();
            browser.sleep(3000);
        })
        /*Search the table with entered text*/
        it('should search for the given text',async function(){
            browser.ignoreSynchronization= true;
            browser.sleep(3000);
            await manageadministrators.searchText();
            browser.sleep(2000);
        })
        var excelData = require('exceljs');
        xit('should test excel',async function(){
            var excelRead = function () {
            this.testdata = function () {
            var workbook = new excelData.Workbook();
            var converted;
            var data = [];
            workbook.xlsx.readFile('testData.xlsx').then(function () {
            var worksheet = workbook.getWorksheet('Sheet3');
            var rowno = worksheet.rowCount;
            var colno = worksheet.columnCount;
            console.log(rowno, colno);
            for (i = 1; i <= rowno; i++) {
                for (j = 1; j <= colno; j++) {
                    var cellvalue = worksheet.getRow(i).getCell(2).value;
                    var converted = JSON.stringify(cellvalue);
                    data.push(converted);
                }
                console.log(data.length);
                console.log(data);
            }
            data.push(converted);
            // console.log(data.length);
            // console.log(data);
            return data;
        });

        // });
    }
}
})
        });
