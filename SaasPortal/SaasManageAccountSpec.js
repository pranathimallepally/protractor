var LoginPage = require('./LoginPage.js');
var reusable = require('./SaasReusable.js');
var Excel = require('exceljs');
var AppURL = require('./Env.json');
var expected_result = require('./expectedresult.json');
describe('Manage Saas Account', function() {
    let accountNamefromHomePage;
    let accountUrlFromHomePage;
/*login to the saas portal*/
 it('Check login saas portal', async function() {
    await global.browser.manage().window().maximize();
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
  var actions = require("./Actions.js");
  /*navigate to manage saas accounts*/
  it('should navigate to manage account', async function() {
    browser.sleep(5000);
    await managesaasaccounts.clickmanageSaasAccount();
    browser.sleep(5000);
    expect(await managesaasaccounts.getmanageAccountTitle()).toEqual(expected_result.exManageAccountTitle);
    browser.ignoreSynchronization = true;
    });
    /*verify the titles*/
 it('should verify title', async function(){
     browser.ignoreSynchronization = true;
     browser.sleep(4000);
     await managesaasaccounts.getmanageAccountTitle();
     expect(await managesaasaccounts.getmanageAccountTitle()).toEqual(expected_result.exManageAccountTitle);
    });
    /*select an option from the dropdown*/
it('should select from dropdown', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var dropdownElement = element(by.xpath('//*[@id="matable_length"]/label/select'));
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
        var tabledata = element.all(by.xpath('//*[@id="matable"]/tbody/tr'));
        var rowCount = await tabledata.count();
        console.log(+rowCount);
        expect(returnValue).toBeGreaterThan(rowCount);
    });
    /*search manage account page for the given text*/
    it('should search manage account page for the given text',async function(){
        browser.ignoreSynchronization= true;
        browser.sleep(3000);
        var a = await managesaasaccounts.enterSearchText();
        expect(true).toBe(a);
        browser.sleep(2000);
    })
    /*sort the enterprise accounts*/
    it('should sort the the enterprise accounts',async function(){
         browser.ignoreSynchronization = true;
         browser.sleep(5000);
         browser.refresh();
         browser.sleep(5000);
         await managesaasaccounts.clickmanageSaasAccount();
         browser.sleep(3000);
         var b = await managesaasaccounts.dovalidateSorting();
         expect(true).toBe(b);
         browser.sleep(3000);
    })
    /*Navigate to previous account page*/
    it('should navigate to previous account page',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        var c = await managesaasaccounts.clickpreviousAccountPage();
        expect(true).toBe(c);
        browser.sleep(3000);
    })
    /*Navigate to next account page*/
   it('should navigate to next account page',async function(){
       browser.ignoreSynchronization = true;
       browser.sleep(5000);
       var d = await managesaasaccounts.clicknextAccountPage();
       expect(true).toBe(d);
       browser.sleep(3000);
   })
   /*View the admins present in a particular saas account*/
    it('should view the admins present under a saas account', async function(){
       browser.ignoreSynchronization = true;
       browser.sleep(4000);
       var e = await managesaasaccounts.clickviewAdmin();
       expect(true).toBe(e);
    });
    /*Verify the titles present in an enterprise admin page*/
    it('should verify title of enterprise admin', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.getmanageAccountAdminTitle();
        expect(managesaasaccounts.getmanageAccountAdminTitle()).toEqual(await managesaasaccounts.getaccountNameValue()+' '+'-'+' '+'Administrators');
    });
    /*Display list of enterprise admins after choosing an option from the dropdown*/
    it('should display list of enterprise admins depending on the option chosen from the dropdown',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        var dropdownElement = element(by.xpath('//*[@id="catable_length"]/label/select'));
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
          var tabledata = element.all(by.xpath('//*[@id="catable"]/tbody/tr'));
          var rowCount = await tabledata.count();
          console.log(+rowCount);
          expect(returnValue).toBeGreaterThan(rowCount);
        });
    /*Search an enterprise admin page for the given text*/
    it('should search enterprise admin page for the given text',async function(){
        browser.ignoreSynchronization= true;
        browser.sleep(3000);
        var f = await managesaasaccounts.enterAdminSearchText();
        expect(true).toBe(f);
        //await actions.performSearchWithColumnValue('Email');
        browser.sleep(2000);
    })
    /*Sort the enterprise admins*/
    it('should sort the enterprise admins',async function(){
         browser.ignoreSynchronization = true;
         browser.sleep(5000);
         browser.refresh();
         browser.sleep(5000);
         await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/a/span')).click();
         browser.sleep(3000);
         await managesaasaccounts.clickmanageSaasAccount();
         browser.sleep(3000);
         await managesaasaccounts.clickviewAdmin();
         browser.sleep(3000);
         var g = await managesaasaccounts.dovalidateSortingAdmin();
         expect(true).toBe(g);
         browser.sleep(3000);

         console.log('browser refreshed');
    })
    /*Edit an enterprise account*/
    it('should edit an enterprise account',async function(){
        browser.ignoreSynchronization = true;
         browser.sleep(5000);
         await element(by.xpath('//*[@id="catable_filter"]/label/input')).click().clear().sendKeys('test1');
         browser.sleep(1000);
         await managesaasaccounts.clickenterpriseAdminEdit();
         browser.sleep(2000);
         //await managesaasaccounts.getenterpriseAdminEditTitle();
         //managesaasaccounts.getenterpriseAdminEditTitle().then(function(text) {
           // var str = text.substring(0,23);
           // console.log(str);
           // expect(str).toEqual('Edit Admin Credentials');
          //});
         //expect(managesaasaccounts.getenterpriseAdminEditTitle()).toEqual('Edit Admin Credentials');
         var wrkbook = new Excel.Workbook();
         wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
         var worksheet = wrkbook.getWorksheet('AdminDetails');
         element(by.name('adminName')).click().clear().sendKeys(worksheet.getCell('A8').value);
         browser.sleep(3000);
         element(by.name('inputphone')).click().clear().sendKeys(worksheet.getCell('A9').value);
         browser.sleep(3000);
         element(by.buttonText('Update')).click();
         await managesaasaccounts.getenterpriseAdminUpdatedMessage();
         expect(managesaasaccounts.getenterpriseAdminUpdatedMessage()).toEqual(expected_result.enterpriseAdminUpdatedMessage);
         browser.sleep(3000);
         })
    });
    /*Cancel editing the administrator and close the edit window*/
    it('should cancel editing an administrator and close the edit window', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        await managesaasaccounts.enterAdminSearchText('pdbtest@gmail.com');
        browser.sleep(1000);
        await managesaasaccounts.clickenterpriseAdminEdit();
        browser.sleep(1000);
        await managesaasaccounts.clickcancel();
        browser.sleep(1000);
        await managesaasaccounts.clickenterpriseAdminEdit();
        browser.sleep(1000); 
        var h = await managesaasaccounts.clickeditEnterpriseAdminClose();
        expect(true).toBe(h);
        browser.sleep(2000);
    });
    /*Reset the login details of an enterprise admin*/
    it('should reset the login details of an enterprise admin',async function(){
         browser.ignoreSynchronization = true;
         browser.sleep(5000);
         await managesaasaccounts.enterAdminSearchText('pdbtest@gmail.com');
         browser.sleep(1000);
         await managesaasaccounts.clickenterpriseAdminReset();
         browser.sleep(2000);
         await managesaasaccounts.getenterpriseAdminResetTitle();
         expect(managesaasaccounts.getenterpriseAdminResetTitle()).toEqual(expected_result.enterpriseAdminResetTitle);
         browser.sleep(1000);
         await managesaasaccounts.clickgenerateOtpButton();
         browser.sleep(1000);
         await managesaasaccounts.getotpField();
         console.log('retreived the new OTP');
         await managesaasaccounts.clickreset();
         browser.sleep(2000);
         expect(managesaasaccounts.getenterpriseAdminResetMessage()).toEqual(expected_result.enterpriseAdminResetMessage);
         browser.sleep(1000);
    })
    /*Cancel reseting the OTP and close the reset window*/
    it('should cancel reset of otp and close the reset window', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        //await managesaasaccounts.enterAdminSearchText('pdbtest@gmail.com');
        //browser.sleep(1000);
        browser.executeScript('window.scrollTo(1150, 453);');
        await managesaasaccounts.clickenterpriseAdminReset();
        browser.sleep(2000);
        await managesaasaccounts.clickcancel();
        browser.sleep(4000);
        await managesaasaccounts.clickenterpriseAdminReset();
        browser.sleep(2000);
        var i = await managesaasaccounts.clickenterpriseAdminResetClose();
        expect(true).toBe(i);
        browser.sleep(1000);
    })
    /*Navigate to previous and next admin pages*/
    it('should navigate to the previous and next enterprise admin page',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        var j= await managesaasaccounts.clickenterpriseAdminPreviousPage();
        expect(true).toBe(j);
        browser.sleep(2000);
        var k = await managesaasaccounts.clickenterpriseAdminNextPage();
        expect(true).toBe(k);
        browser.sleep(2000);
    })
    /*Add a new enterprise admin*/
    it('should add a new enterprise admin',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        //await managesaasaccounts.enterAdminSearchText('test1@gmail.com');
        //browser.sleep(1000);
        await managesaasaccounts.clickaddNewAdmin();
        browser.sleep(2000);
        try{
            var wrkbook = new Excel.Workbook();
            wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
            var worksheet = wrkbook.getWorksheet('AdminDetails');
            browser.waitForAngularEnabled(false);
            await managesaasaccounts.inputAdminName(worksheet.getCell('A10').value);
            browser.sleep(3000);
            await managesaasaccounts.inputAdminEmail(worksheet.getCell('A11').value);
            browser.sleep(3000);
            await managesaasaccounts.inputAdminPhone(worksheet.getCell('A12').value);
            browser.sleep(3000);
            await managesaasaccounts.clickgenerateOtpButton();
            browser.sleep(1000);
            await managesaasaccounts.clicksave();  
            browser.sleep(5000);
            return worksheet;
           }); 
        }
        catch(err){
              console.log(err);
        }
    });
    /*Cancel adding an admin*/
    it('should cancel adding an admin',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.enterAdminSearchText('test1@gmail.com');
        browser.sleep(1000);
        await managesaasaccounts.clickaddNewAdmin();
        browser.sleep(2000);
        var str = await managesaasaccounts.getaddNewAdminTitle();
        var substr = str.substring(0,42);
        expect(substr).toEqual(expected_result.addNewAdminTitle);
        await managesaasaccounts.clickcancel();
        browser.sleep(2000);
    });
    /*Close the add admin window*/
    it('should close the add admin window',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clickaddNewAdmin();
        browser.sleep(2000);
        var l = await managesaasaccounts.clickcreateAdminClose();
        expect(true).toBe(l);
        browser.sleep(1000);
    })
    /*Delete an enterprise admin*/
    it('should delete an enterprise admin',async function(){
        browser.ignoreSynchronization = true;
        //await managesaasaccounts.enterAdminSearchText('adminone@gmail.com');
        await element(by.xpath('//*[@id="catable_filter"]/label/input')).click().clear().sendKeys('AdminOne');
        browser.sleep(2000);
        await managesaasaccounts.clickenterpriseAdminDelete();
        browser.sleep(2000);
        await managesaasaccounts.getenterpriseAdminDeleteTitle();
        expect(managesaasaccounts.getenterpriseAdminDeleteTitle()).toEqual(expected_result.enterpriseAdminDeleteTitle);
        browser.sleep(1000);
        await managesaasaccounts.clickaccountDelete();
        browser.sleep(1000);
    });
    //temporarily disabled
    /*it('should cancel deleting enterprise admin and close delete window',async function(){
        browser.ignoreSynchronization = true;
        //await managesaasaccounts.enterAdminSearchText().clear();
        var adminSearch = element(by.xpath('//*[@id="catable_filter"]/label/input'));
        var EC = protractor.ExpectedConditions;        
        browser.wait(EC.elementToBeClickable(adminSearch), 10000); 
        await adminSearch.click().clear().sendKeys('Test');
        //await element(by.xpath('//*[@id="catable_filter"]/label/input')).click().clear().sendKeys('Test');
        browser.sleep(2000);
        await managesaasaccounts.clickenterpriseAdminDelete();
        browser.sleep(2000);
        expect(managesaasaccounts.getenterpriseAdminDeleteTitle()).toEqual(expected_result.enterpriseAdminDeleteTitle);
        await managesaasaccounts.clickcancel();
        browser.sleep(1000);
        //await managesaasaccounts.clickenterpriseAdminDelete();
        //browser.sleep(2000);
        //await managesaasaccounts.clickenterpriseAdminDeleteClose();
        //browser.sleep(2000);
    })*/
    /*View details of selected account*/
    it('should view the details of a selected account', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clickmanageSaasAccount();
        browser.sleep(3000);
        await managesaasaccounts.clickviewDetails();
        var str = await managesaasaccounts.geteditCustomerAccountTitle();
        var substr = str.substring(0,21);
        expect(substr).toEqual(expected_result.editCustomerAccountTitle);

    });
    /*Edit customer account*/
    it('should edit customer account',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('AdminDetails');
        element(by.name('inputPrimaryName')).click().clear().sendKeys(worksheet.getCell('A13').value);
        browser.sleep(3000);
        var dropdownBillingProfile = element(by.name('accountStatus'));
        var dropdownSelectTier = element(by.name('Support Tiers'));
        var dropdownBillingCountry = element(by.name('BillingCountry'));
        var selectDropdownbyNum =  function ( element, optionNum ) {
            if (optionNum){
            var options =  element.all(by.tagName('option'))   
            .then(function(options){
            options[optionNum].click();
            var dtext = options[optionNum].getText();
            dtext.getAttribute('value').then(function(inputValue) {
            return inputValue;
            });
            });
           browser.sleep(3000);
           }
        };
    selectDropdownbyNum(dropdownBillingProfile,1);
    selectDropdownbyNum(dropdownSelectTier,1);
    selectDropdownbyNum(dropdownBillingCountry,10);
    browser.sleep(1000);
    console.log('selected billing profile');
    console.log('selected the tier');
    element(by.name('inputPrimaryName')).click().clear().sendKeys(worksheet.getCell('A14').value);
    browser.sleep(3000);
    element(by.name('inputPrimaryEmail')).click().clear().sendKeys(worksheet.getCell('A15').value);
    browser.sleep(3000);
    element(by.name('inputbillingEmail')).click().clear().sendKeys(worksheet.getCell('A16').value);
    browser.sleep(3000);
    element(by.name('inputPrimaryPhone')).click().clear().sendKeys("34565789898");
    browser.sleep(3000);
    element(by.name('BillingAddress1')).click().clear().sendKeys(worksheet.getCell('A17').value);
    browser.sleep(3000);
    element(by.name('BillingCity')).click().clear().sendKeys(worksheet.getCell('A18').value);
    browser.sleep(3000);
    element(by.name('Postal')).click().clear().sendKeys(worksheet.getCell('A19').value);
    browser.sleep(3000);
    await managesaasaccounts.clickupdate();
    browser.sleep(2000);
    expect(await managesaasaccounts.geteditAccountMessage()).toEqual(expected_result.editAccountMessage);
    })
    })
    /*Cancel adding a customer account and close the window*/
    it('should cancel adding a customer account and close the window',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        //await managesaasaccounts.enterSearchText('Test');
        //browser.sleep(1000);
        await managesaasaccounts.clickviewDetails();
        browser.sleep(2000);
        var m =await managesaasaccounts.clickcancel();
        expect(true).toBe(m);
        browser.sleep(1000);
        //await managesaasaccounts.clickviewDetails();
        browser.sleep(2000);
        //await managesaasaccounts.clickeditAccountClose();
        //browser.sleep(1000);
    });
    /*View the billing of a selected account*/
    it('should view the billing of a selected account', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        await managesaasaccounts.clickviewBilling();
        expect( await managesaasaccounts.getmanageAccountBillingTitle()).toEqual(expected_result.manageAccountBillingTitle);
    });
    /*select from the dropdown to view billing*/
    it('should select from dropdown to view billing', async function(){
        browser.ignoreSynchronization = true;
         browser.sleep(3000);
         var dropdownElement = element(by.xpath('//*[@id="mbtable_length"]/label/select'));
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
          var tabledata = element.all(by.xpath('//*[@id="mbtable"]/tbody/tr'));
          //var rows = tabledata.all(by.tagName('td'));
          var rowCount = await tabledata.count();
          console.log(+rowCount);
          expect(returnValue).toBeGreaterThan(rowCount);
    })
    /*Perform searching and sorting on the billing table*/
    it('search and sort the billing table',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        var n = await managesaasaccounts.enterBillingSearchText();
        expect(true).toBe(n);
        browser.sleep(2000); 
        var o = await managesaasaccounts.dovalidateSortingBilling();
        expect(true).toBe(o);
        browser.sleep(3000);
    })
    /*Navigate to the previous and next billing page*/
    it('should navigate to previous and next billing page', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        //await managesaasaccounts.clickviewBilling();
        //browser.sleep(1000);
        var p = await managesaasaccounts.clickaccountPreviousBillingPage();
        expect(true).toBe(p);
        browser.sleep(1000);
        var q = await managesaasaccounts.clickaccountNextBillingPage();
        expect(true).toBe(q);
        browser.sleep(1000);
    })
    /*Send the billing invoice*/
    it('should send the billing invoice',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        //await managesaasaccounts.clickviewBilling();
        browser.sleep(1000);
        var r = await managesaasaccounts.clickaccountBillingSendInvoice();
        expect(true).toBe(r);
        browser.sleep(5000);
    })
    /*Suspend an enterprise account*/
    it('should suspend an enterprise account', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clickmanageSaasAccount();
        browser.sleep(2000);
        await managesaasaccounts.clicksuspendAccount();
        browser.sleep(1000);
        if(managesaasaccounts.getsuspendInfo() == 'You haveCurrentAction.UpdatePaymentStatus elected to change the status of the Enterprise account. If you proceed with the suspension, all information associated with this account will be restricted. This organization\'s users will no longer be able to access PDB.'){
            await managesaasaccounts.clickaccountSuspend();
            expect(managesaasaccounts.getaccountSuspendMesssage()).toEqual(expected_result.accountSuspendMesssage);
            browser.sleep(1000);
        }else if(managesaasaccounts.getunsuspendInfo()=='You have elected to change the status of the Enterprise account. If you proceed with the unsuspension, all information associated with this account will be available. This organization\'s users will be able to access PDB.'){
            await managesaasaccounts.clickaccountUnsuspend();
            expect(managesaasaccounts.getaccountUnsuspendMessage()).toEqual(expected_result.accountUnsuspendMessage);
            browser.sleep(1000);
        }
        else{
            var s = await managesaasaccounts.clickaccountSuspendClose();
            expect(true).toBe(s);
            browser.sleep(1000);
        }
    });
    
    /*it('should unsuspend an enterprise account', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clickmanageSaasAccount();
        browser.sleep(2000);
        await managesaasaccounts.clicksuspendAccount();
        browser.sleep(1000);
    });*/
    //temporarily disabled
    /*xit('should cancel suspending an account',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clicksuspendAccount();
        browser.sleep(1000);
        await managesaasaccounts.clickcancel();
        browser.sleep(1000);
    });
    xit('should close suspend window',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clicksuspendAccount();
        browser.sleep(1000);
        await managesaasaccounts.clickaccountSuspendClose();
        browser.sleep(1000);
    })
    xit('should delete an enterprise account', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clickdeleteAccount();
        browser.sleep(1000);
        await managesaasaccounts.clickaccountDelete();
        browser.sleep(1000);
        await managesaasaccounts.clickdeleteAccount();
        browser.sleep(1000);
        await managesaasaccounts.clickcancel();
        browser.sleep(1000);
        await managesaasaccounts.clickdeleteAccount();
        browser.sleep(1000);
        var t = await managesaasaccounts.clickaccountDeleteClose();
        expect(true).toBe(t);
        browser.sleep(1000);
    });
    xit('should create new customer account', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await managesaasaccounts.clickcreateAccount();
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('AdminDetails');
        await managesaasaccounts.editAccountName(worksheet.getCell('B1').value);
        browser.sleep(2000);
        var dropdownBillingProfile = element(by.name('accountStatus'));
        var dropdownSelectTier = element(by.name('Support Tiers'));
        var dropdownBillingCountry = element(by.name('BillingCountry'));
        var selectDropdownbyNum =  function ( element, optionNum ) {
            if (optionNum){
            var options =  element.all(by.tagName('option'))   
            .then(function(options){
            options[optionNum].click();
            var dtext = options[optionNum].getText();
            dtext.getAttribute('value').then(function(inputValue) {
            return inputValue;
            });
            });
           browser.sleep(3000);
           }
        };
    selectDropdownbyNum(dropdownBillingProfile,1);
    selectDropdownbyNum(dropdownSelectTier,1);
    selectDropdownbyNum(dropdownBillingCountry,10);
    browser.sleep(1000);
    console.log('selected billing profile');
    console.log('selected the tier');
    await managesaasaccounts.editPrimaryPocName(worksheet.getCell('B2').value);
    browser.sleep(2000);
    await managesaasaccounts.editPrimaryPocEmail(worksheet.getCell('B3').value);
    browser.sleep(2000);
    await managesaasaccounts.editBillingEmailAddress(worksheet.getCell('B4').value);
    browser.sleep(2000);
    await managesaasaccounts.editPrimaryPocPhone(worksheet.getCell('B5').value);
    browser.sleep(2000);
    await managesaasaccounts.editBillingAddress(worksheet.getCell('B6').value);
    browser.sleep(2000);
    await managesaasaccounts.editBillingCity(worksheet.getCell('B7').value);
    browser.sleep(2000);
    await managesaasaccounts.editBillingState(worksheet.getCell('B8').value);
    browser.sleep(2000);
    await managesaasaccounts.editBillingPostal(worksheet.getCell('B9').value);
    browser.sleep(2000);
    await managesaasaccounts.invoiceCheck().click();
    browser.sleep(2000);
    await managesaasaccounts.clicksave();
    browser.sleep(2000);
    })
    })*/
    /*Cancel admin creation and close the admin window creation*/
    it('should cancel admin creation and close the admin window creation',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(1250, 200);');
        await managesaasaccounts.clickcreateAccount();
        browser.sleep(1000);
        var u = await managesaasaccounts.clickcancel();
        expect(true).toBe(u);
        browser.sleep(1000);
    })
    /*Edit an enterprise account*/
    it('should edit an enterprise account',async function(){
        browser.ignoreSynchronization = true;
         browser.sleep(5000);
         browser.executeScript('window.scrollTo(700, 300);');
         await managesaasaccounts.clickviewAdmin();
         browser.sleep(2000);
         await element(by.xpath('//*[@id="catable_filter"]/label/input')).click().clear().sendKeys('test1@gmail.com');
         browser.sleep(1000);
         await managesaasaccounts.clickenterpriseAdminEdit();
         browser.sleep(2000);
         //await managesaasaccounts.getenterpriseAdminEditTitle();
         //managesaasaccounts.getenterpriseAdminEditTitle().then(function(text) {
           // var str = text.substring(0,23);
           // console.log(str);
           // expect(str).toEqual('Edit Admin Credentials');
          //});
         //expect(managesaasaccounts.getenterpriseAdminEditTitle()).toEqual('Edit Admin Credentials');
         var wrkbook = new Excel.Workbook();
         wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
         var worksheet = wrkbook.getWorksheet('AdminDetails');
         element(by.name('adminName')).click().clear().sendKeys(worksheet.getCell('B10').value);
         browser.sleep(3000);
         element(by.name('inputphone')).click().clear().sendKeys(worksheet.getCell('A9').value);
         browser.sleep(3000);
         element(by.buttonText('Update')).click();
         await managesaasaccounts.getenterpriseAdminUpdatedMessage();
         expect(managesaasaccounts.getenterpriseAdminUpdatedMessage()).toEqual(expected_result.enterpriseAdminUpdatedMessage);
         browser.sleep(3000);
         })
    });
    /*Verify the labels*/
    it('should verify the labels',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        await managesaasaccounts.clickmanageSaasAccount();
        browser.sleep(5000);
        expect(await managesaasaccounts.getlabelCreatenewCustomerAccount()).toEqual(expected_result.exlabelCreatenewCustomerAccount);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelSearch()).toEqual(expected_result.exlabelSearch);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelAccountName()).toEqual(expected_result.exlabelAccountName);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelStatus()).toEqual(expected_result.exlabelStatus);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelAdmin()).toEqual(expected_result.exlabelAdmin);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelDetails()).toEqual(expected_result.exlabelDetails);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelSuspend()).toEqual(expected_result.exlabelSuspend);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBilling()).toEqual(expected_result.exlabelBilling);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelDelete()).toEqual(expected_result.exlabelDelete);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelPrevious()).toEqual(expected_result.exlabelPrevious);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelNext()).toEqual(expected_result.exlabelNext);
        browser.sleep(2000);
        await managesaasaccounts.clickviewAdmin();
        browser.sleep(3000);
        expect(await managesaasaccounts.getlabelAdminName()).toEqual(expected_result.exlabelAdminName);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelEmail()).toEqual(expected_result.exlabelEmail);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelPhoneNumber()).toEqual(expected_result.exlabelPhoneNumber);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelModified()).toEqual(expected_result.exlabelModified);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelEdit()).toEqual(expected_result.exlabelEdit);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelResetLogin()).toEqual(expected_result.exlabelResetLogin);
        browser.sleep(2000);
        await managesaasaccounts.clickenterpriseAdminEdit();
        browser.sleep(2000);
        //expect(await managesaasaccounts.getlabelEditAdminHeader()).toEqual(expected_result.exlabelEditAdminHeader);
        //browser.sleep(2000);
        expect(await managesaasaccounts.getlabelAdminName1()).toEqual(expected_result.exlabelAdminName1);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelPhone()).toEqual(expected_result.exlabelPhone);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelCancel()).toEqual(expected_result.exlabelCancel);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelUpdate()).toEqual(expected_result.exlabelUpdate);
        browser.sleep(2000);
        await managesaasaccounts.clickcancel();
        browser.sleep(2000);
        await managesaasaccounts.clickenterpriseAdminReset();
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelValidity()).toEqual(expected_result.exlabelValidity);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelExpiryDate()).toEqual(expected_result.exlabelExpiryDate);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelOtp()).toEqual(expected_result.exlabelOtp);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelGenerateOtp()).toEqual(expected_result.exlabelGenerateOtp);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelReset()).toEqual(expected_result.exlabelReset);
        browser.sleep(2000);
        await managesaasaccounts.clickcancel();
        browser.sleep(2000);
        await managesaasaccounts.clickenterpriseAdminDelete();
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelDelete1()).toEqual(expected_result.exlabelDelete1);
        browser.sleep(2000);
        await managesaasaccounts.clickcancel();
        browser.sleep(2000);
        await managesaasaccounts.clickmanageSaasAccount();
        browser.sleep(3000);
        await managesaasaccounts.clickcreateAccount();
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelCAccountName()).toEqual(expected_result.exlabelCAccountName);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBillingProfiles()).toEqual(expected_result.exlabelBillingProfiles);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelSupportTier()).toEqual(expected_result.exlabelSupportTier);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelPrimaryPocName()).toEqual(expected_result.exlabelPrimaryPocName);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelPrimaryPocEmail()).toEqual(expected_result.exlabelPrimaryPocEmail);
        browser.sleep(2000);
        //expect(await managesaasaccounts.getlabelBillingEmailAddress()).toEqual(expected_result.exlabelBillingEmailAddress);
        //browser.sleep(2000);
        expect(await managesaasaccounts.getlabelPrimaryPocPhone()).toEqual(expected_result.exlabelPrimaryPocPhone);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBillingAddress()).toEqual(expected_result.exlabelBillingAddress);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBillingCity()).toEqual(expected_result.exlabelBillingCity);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBillingState()).toEqual(expected_result.exlabelBillingState);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBillingZip()).toEqual(expected_result.exlabelBillingZip);
        browser.sleep(2000);
        expect(await managesaasaccounts.getlabelBillingCountry()).toEqual(expected_result.exlabelBillingCountry);
        browser.sleep(2000);
        await managesaasaccounts.clickcancel();
        browser.sleep(2000);
    })
})
    


