var portalHomepage = require('./login');
var Excel = require('exceljs');
var BrowserACtions = require('./Action.js');
var reusable = require("./ReusableLib/Reusable.js");
describe('Billing Profiles', function() {
/*login to the enterprise portal*/
it('should login to the portal', async function() {
    await portalHomepage.get();
    browser.sleep(5000);
    try{
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
var billingprofiles = require('./billingProfilePage');
/*Select navigate profiles */
it('should navigate to billing profiles', async function() {
    browser.ignoreSynchronization = true;
    browser.sleep(5000);
    await billingprofiles.clickbillingProfile();
    browser.sleep(5000);
});
/*Retreive and check the titles*/
xit('should verify title', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(4000);
    await billingprofiles.getbillingProfileTitle();
    console.log(billingprofiles.getbillingProfileTitle);
    expect(billingprofiles.getbillingProfileTitle()).toEqual('Billing Profile: Default Annual Profile');
});
/*Check the dropdown functioality*/
it('should select from dropdown', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var dropDown = element(by.xpath('//*[@id="mttable_length"]'));
    //await manageadministrators.selectDropdownbyNum(dropdownElement,2);
    //browser.sleep(30000);
    //console.log("message");
    var returnValue;
    var selectDropdown =  function ( element, optionNum ){ 
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
        console.log(optionNum);
    };
    selectDropdown(dropDown,2);
    var tabledata = element.all(by.xpath('//*[@id="mttable"]/tbody/tr'));
    //var rows = tabledata.all(by.tagName('td'));
    var rowCount = await tabledata.count();
    console.log(+rowCount);
    expect(returnValue).toBeGreaterThan(rowCount);
});
/*Count the number of table rows obtained after selecting an option from the dropdown*/
it('should count table rows', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var tabledata = element.all(by.xpath('//*[@id="mttable"]/tbody/tr'));
    //var rows = tabledata.all(by.tagName('td'));
    var rowCount = await tabledata.count();
    console.log(+rowCount);
 });
 /*Sort the table data in ascending and descending order*/
 xit('should sort text fields', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await billingprofiles.clickSortfeilds();
    browser.sleep(30000);
 });
 /*Search the entered text in the table*/
 it('should search for entered text', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    try{
     var wrkbook = new Excel.Workbook();
     wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
     var worksheet = wrkbook.getWorksheet('loginDetails');
     browser.waitForAngularEnabled(false);
     await billingprofiles.enterSearchText(worksheet.getCell('A25').value);
    browser.sleep(30000);
     return worksheet;
     }); 
     }
     catch(err){
     console.log(err);
     }
 });
 /*Check navigation to the previous billing page*/
 xit('should navigate to previous page', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await billingprofiles.clickPreviousTiers();
    browser.sleep(3000);
 });
 /*Check navigation to the next billing page*/
 xit('should navigate to next page', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await billingprofiles.clickNextTiers();
    browser.sleep(3000);
 });
 /*Sort the table data in ascending and descending order*/
 xit('should sort the given table',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(5000);
    await billingprofiles.dovalidateSorting();
    browser.sleep(3000);
})
/*Search the entered text in the table*/
xit('should search for the given text',async function(){
    browser.ignoreSynchronization= true;
    browser.sleep(3000);
    await billingprofiles.searchText();
    browser.sleep(2000);
})
});