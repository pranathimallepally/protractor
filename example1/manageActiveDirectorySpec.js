var portalHomepage = require('./login');
var Excel = require('exceljs');
var reusable = require("./ReusableLib/Reusable.js");
var expected_result = require('../expectedresult.json');
describe('Manage Active Directory', function() {
let accountNamefromHomePage;
let accountUrlFromHomePage;
/* Login to the enterprise portal*/
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

var manageactivedirectory = require('./manageActiveDirectoryPage');
/* Download the .exe file*/
it('should download the .exe file',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await manageactivedirectory.clickManageActiveDirectory();
    browser.sleep(2000);
    await manageactivedirectory.clickDownloadFile();
});
/* view the generated token*/
it('should show token', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await manageactivedirectory.clickManageActiveDirectory();
    browser.sleep(2000);
    await manageactivedirectory.clickShowToken();
});
/* Hide the generated token*/
it('should hide token', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await manageactivedirectory.clickManageActiveDirectory();
    browser.sleep(2000);
    await manageactivedirectory.clickHideToken();
});
/* View the url*/
it('should show url', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await manageactivedirectory.clickManageActiveDirectory();
    browser.sleep(2000);
    await manageactivedirectory.clickShowURL();
});
/* Hide the url*/
it('should hide url', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await manageactivedirectory.clickManageActiveDirectory();
    browser.sleep(2000);
    await manageactivedirectory.clickHideURL();
});
/* Select an option from the dropdown*/
it('should select from dropdown', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var dropdownElement = element(by.xpath('//*[@id="agnttable_length"]/label/select'));
    //await manageadministrators.selectDropdownbyNum(dropdownElement,2);
    //browser.sleep(30000);
    //console.log("message");
    var returnValue;
    var selectDropdownbyNum =  function ( element, optionNum ) {
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
 selectDropdownbyNum(dropdownElement,0);
 var tabledata = element.all(by.xpath('//*[@id="agnttable"]/tbody/tr'));
        //var rows = tabledata.all(by.tagName('td'));
        var rowCount = await tabledata.count();
        console.log(+rowCount);
        expect(returnValue).toBeGreaterThan(rowCount);
});
    /* search for the entered text*/
    it('should search for entered text', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        try{
         var wrkbook = new Excel.Workbook();
         wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
         var worksheet = wrkbook.getWorksheet('loginDetails');
         browser.waitForAngularEnabled(false);
         await manageactivedirectory.enterSearchText(worksheet.getCell('A10').value);
        browser.sleep(30000);
        return worksheet;
         }); 
        }
        catch(err){
         console.log(err);
        }
     });
     /* sort the fields */
     it('should sort text fields', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var a = await manageactivedirectory.clickSortfields();
        expect(true).toBe(a);
        browser.sleep(30000);
     });
     /* navigate to previous page*/
     it('should navigate to previous page', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var b = await manageactivedirectory.clickPreviousPage();
        expect(true).toBe(b);
        browser.sleep(30000);
     });
     /* navigate to the next page*/
     it('should navigate to next page', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var c= await manageactivedirectory.clickNextPage();
        expect(true).toBe(c);
        browser.sleep(30000);
     });
    });
