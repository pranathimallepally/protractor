var portalHomepage = require('./login');
var Excel = require('exceljs');
var reusable = require("./ReusableLib/Reusable.js");
describe('Manage Accounts', function() {
/*Login to the enterprise portal*/    
it('should login to the portal', async function() {
/*await portalHomepage.get();
browser.sleep(5000);
try{
    var wrkbook = new Excel.Workbook();
    wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
    var worksheet = wrkbook.getWorksheet('loginDetails');
    browser.waitForAngularEnabled(false);
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
}catch(err){
    console.log(err);
}*/
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
    }catch(err){
    console.log(err);
    }
});
var manageaccounts = require('./manageAccountPage');
/*Edit the account information*/
it('should edit an account', async function() {
    //await angularHomepage.get();
    browser.ignoreSynchronization = true;
     browser.sleep(5000);
     await manageaccounts.clickEditManageAccount();
    browser.sleep(5000);
    var wrkbook = new Excel.Workbook();
    wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
    var worksheet = wrkbook.getWorksheet('loginDetails');
    browser.waitForAngularEnabled(false);
    await manageaccounts.enteraccountNameInput(worksheet.getCell('A11').value);
    await manageaccounts.enterpocNameInput(worksheet.getCell('A12').value);
    await manageaccounts.enterpocEmailInput(worksheet.getCell('A13').value);
    await manageaccounts.enterpocPhoneInput(worksheet.getCell('A14').value);
    var a = element(by.name('accountname')).getText();
    a.getAttribute('value').then(function(b) {
    console.log(b);
    });
    await manageaccounts.enterbillingEmailInput(worksheet.getCell('A15').value);
    await manageaccounts.enterbillingAddressInput(worksheet.getCell('A16').value);
    await manageaccounts.enterbilingCityInput(worksheet.getCell('A27').value);
    await manageaccounts.enterbillingStateInput(worksheet.getCell('A17').value);
    await manageaccounts.enterbillingZipInput(worksheet.getCell('A26').value);
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
    selectDropdownbyNum(dropdownBillingCountry,10);
    browser.sleep(1000);
    console.log('clicked the selected country');
    //await manageaccounts.clickSave();
    await manageaccounts.clickCancel();
    browser.sleep(1000);
    });
});
var path = require("path");
 /* select account settings*/
 it('should click account settings',async function(){
     browser.ignoreSynchronization = true;
     browser.sleep(3000);
     await manageaccounts.clickEditManageAccount();
     browser.sleep(5000);
     //await manageaccounts.clickAccountSettings();
     //browser.sleep(1000);
     await manageaccounts.clickPaymentInformation();
     browser.sleep(1000);
     await manageaccounts.clickAccountSettings();
     browser.sleep(1000);
 });
 /*Upload a file uunder account settings*/
 xit("Upload file",function(){
     browser.ignoreSynchronization = true;
     browser.sleep(3000);
     manageaccounts.clickEditManageAccount();
     browser.sleep(1000);
     manageaccounts.clickAccountSettings();
     var filePath = "/Pictures/Screenshots/Screenshot(2).png";
     var fpath = path.resolve(__dirname,filePath);
     browser.ignoreSynchronization = true;
     browser.sleep(1000);
     var el = element(by.xpath('[@id="avatar"]'));
     el.sendKeys(fpath);
     browser.sleep(3000);
 });
 /*Change the existing account settings*/
 xit('should change account settings',async function(){
     browser.ignoreSynchronization = true;
     browser.sleep(3000);
     await manageaccounts.clickEditManageAccount();
     browser.sleep(1000);
     await manageaccounts.clickAccountSettings();
     browser.sleep(3000);
     //await manageaccounts.clickChangeAvatarSmall();
     //browser.sleep(3000);
     await manageaccounts.clickChangeAvatarMedium();
     browser.sleep(3000);
     await manageaccounts.clickChangeAvatarLarge();
     browser.sleep(3000);
     await manageaccounts.clickCancelAccountSetting();
     browser.sleep(3000);
     //await manageaccounts.clickSave();
     //browser.sleep(3000);
     //await manageaccounts.clickReset();
     //browser.sleep(3000);
 });
 /*Payment using credit card*/
 it('should enter credit card number',async function(){
     browser.ignoreSynchronization = true;
     browser.sleep(3000);
     await manageaccounts.clickEditManageAccount();
     browser.sleep(3000);
     await manageaccounts.clickPaymentInformation();
     browser.sleep(3000);
     await manageaccounts.clickCreditCardButton();
     browser.sleep(3000);
     var EC = protractor.ExpectedConditions;
    // var enterCreditCardNo = element.by(xpath('//*[@id="root"]/form/div/div[2]/span[1]/span[2]/label/input'));
     //browser.wait(EC.elementToBeClickable(enterCreditCardNo), 20000).then(async function(){
    //await manageaccounts.enteredCreditCardNo('4242 4242 4242 4242');
    //browser.sleep(3000);
    await manageaccounts.clickaddAsPaymentButton();
    browser.sleep(3000);
     //});
 });
 /*Check the invoiceme option*/
it('should select invoiceme ', async function(){
    browser.ignoreSynchronization = true;
     browser.sleep(3000);
     await manageaccounts.clickEditManageAccount();
     browser.sleep(3000);
     await manageaccounts.clickPaymentInformation();
     browser.sleep(3000);
     await manageaccounts.clickInvoicemeButton();
     browser.sleep(3000);
     var wrkbook = new Excel.Workbook();
     wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
     var worksheet = wrkbook.getWorksheet('loginDetails');
     browser.waitForAngularEnabled(false);
     await manageaccounts.enterIprimaryContactInput(worksheet.getCell('A29').value);
     browser.sleep(1000);
     await manageaccounts.enterIdeliveryAddressInput(worksheet.getCell('A30').value);
     browser.sleep(1000);
     await manageaccounts.enterIdeliveryCityInput(worksheet.getCell('A31').value);
     browser.sleep(1000);
     await manageaccounts.enterIdeliveryStateInput(worksheet.getCell('A32').value);
     browser.sleep(1000);
     await manageaccounts.enterIdeliveryZipInput(worksheet.getCell('A33').value);
     browser.sleep(1000);
     await manageaccounts.enterIcontactPhone(worksheet.getCell('A34').value);
     browser.sleep(1000);
     await manageaccounts.enterIcontactEmail(worksheet.getCell('A35').value);
     browser.sleep(1000);
     })
     await manageaccounts.clickCancelInvioceme();
     browser.sleep(1000);
     //await manageaccounts.clickSave();
 });
    /* Select the bank accounts*/
    it('should select bank accounts', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        await manageaccounts.clickEditManageAccount();
        browser.sleep(3000);
        await manageaccounts.clickPaymentInformation();
        browser.sleep(3000);
        await manageaccounts.clickBankAccountButton();
        browser.sleep(3000);
        //await manageaccounts.clickLinkPaymentAcccount();
        browser.sleep(3000);
        //await manageaccounts.clickContinue();
        //await manageaccounts.clickClose();
        browser.sleep(2000);
    })
    /*Retreive and verify the text of manage account fields*/ 
    it('should verify text of manage account fields',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        await manageaccounts.clickManageAccount();
        await manageaccounts.clickEditManageAccount();
        await manageaccounts.getnameOfAccount();
        expect(manageaccounts.getnameOfAccount()).toEqual('Account Name*');
        browser.sleep(2000);
        await manageaccounts.getnameOfAdminUrl();
        expect(manageaccounts.getnameOfAdminUrl()).toEqual('Account Admin URL');
        browser.sleep(2000);
        await manageaccounts.getnameOfPrimaryPOC();
        expect(manageaccounts.getnameOfPrimaryPOC()).toEqual('Primary POC Name*');
        browser.sleep(2000);
        await manageaccounts.getemailOfPrimaryPOC();
        expect(manageaccounts.getemailOfPrimaryPOC()).toEqual('Primary POC Email*');
        browser.sleep(2000);
        await manageaccounts.getphoneOfPrimaryPOC();
        expect(manageaccounts.getphoneOfPrimaryPOC()).toEqual('Primary POC Phone*');
        browser.sleep(2000);
        await manageaccounts.getbillingEmailAddress();
        expect(manageaccounts.getbillingEmailAddress()).toEqual('Billing Email Address*');
        browser.sleep(2000);
        await manageaccounts.getbillingAddress();
        expect(manageaccounts.getbillingAddress()).toEqual('Billing Address*');
        browser.sleep(2000);
        await manageaccounts.getbillingCity();
        expect(manageaccounts.getbillingCity()).toEqual('Billing City*');
        browser.sleep(2000);
        await manageaccounts.getbillingState();
        expect(manageaccounts.getbillingState()).toEqual('Billing State*');
        browser.sleep(2000);
        await manageaccounts.getbillingPostalCode();
        expect(manageaccounts.getbillingPostalCode()).toEqual('Billing Zip/Postal Code*');
        browser.sleep(2000);
        await manageaccounts.getbillingCountry();
        expect(manageaccounts.getbillingCountry()).toEqual('Billing Country*');
        browser.sleep(2000);
    })
}); 