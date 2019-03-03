var portalHomepage = require('./login');
var Excel = require('exceljs');
var BrowserACtions = require('./Action.js');
var reusable = require("./ReusableLib/Reusable.js");
describe('Manage Upgrades', function() {
    /*Login to the enterprise portal*/
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
        browser.sleep(1000);
        return worksheet;
        }); 
        }catch(err){
        console.log(err);
        }
    });
var invoiceHistory = require('./invoiceHistoryPage.js');
    /*Select invoice history */
    it('should navigate to invoice history', async function() {
        //await angularHomepage.get();
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        await invoiceHistory.clickInvoiceHistory();
        browser.sleep(5000);
    });
    /*Retreive and check the titles*/
    it('should verify title', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await invoiceHistory.getInvoiceHistoryTitle();
        browser.sleep(3000);
        expect(invoiceHistory.getInvoiceHistoryTitle()).toEqual('Invoice History');
        browser.sleep(3000);
    });
    /*Check dropdown functionality*/
    it('should select from dropdown', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var dropdownElement = element(by.xpath('//*[@id="manageinvoices_length"]/label/select'));
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
        selectDropdownbyNum(dropdownElement,1);
        });
    /*Search the entered text in the table*/
    xit('should search for entered text', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        try{
         var wrkbook = new Excel.Workbook();
         wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
         var worksheet = wrkbook.getWorksheet('loginDetails');
         browser.waitForAngularEnabled(false);
         element(by.xpath('//*[@id="manageinvoices_filter"]/label/input')).click().clear();
         await invoiceHistory.enterSearchText(worksheet.getCell('A36').value);
        browser.sleep(3000);
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
            await invoiceHistory.clickSortField();
            browser.sleep(3000);
         });*/
    /*Sort the table fields in ascending and descending order*/
    it('should sort the given table',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        await invoiceHistory.dovalidateSorting();
        browser.sleep(3000);
    })
    /*Search the entered text in the table*/
    it('should search for the given text',async function(){
        browser.ignoreSynchronization= true;
        browser.sleep(3000);
        await invoiceHistory.searchText();
        browser.sleep(2000);
    })
    /*Check navigation to the previous invoice page*/
    it('should navigate to previous page', async function(){
       browser.ignoreSynchronization = true;
       browser.sleep(3000);
       await invoiceHistory.clickInvoicePreviousPage();
       browser.sleep(3000);
    });
    /*Check navigation to the next invoice page*/
    it('should navigate to next page', async function(){
       browser.ignoreSynchronization = true;
       browser.sleep(3000);
       await invoiceHistory.clickInvoiceNextPage();
       browser.sleep(3000);
    });
});