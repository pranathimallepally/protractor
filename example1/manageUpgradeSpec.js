var portalHomepage = require('./login');
var Excel = require('exceljs');
var BrowserACtions = require('./Action.js');
var reusable = require("./ReusableLib/Reusable.js");
describe('Manage Upgrades', function() {
    /* Login to the enterprise portal*/
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
        }catch(err){
        console.log(err);
        }
        });
    var manageUpgrades = require('./manageUpgradePage.js');
    /* select manage upgrades*/
    it('should navigate to manage upgrades', async function() {
        //await angularHomepage.get();
        browser.ignoreSynchronization = true;
         browser.sleep(5000);
         await manageUpgrades.clickManageUpgrade();
        browser.sleep(5000);
    });
    /* Retreive and verify the titles*/
    it('should verify title', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(4000);
        await manageUpgrades.getmanageUpgradeTitle();
        browser.sleep(3000);
        //console.log(manageadministrators.getmanageAdministartorsTitle);
        expect(manageUpgrades.getmanageUpgradeTitle()).toEqual('Manage Upgrades');
        browser.sleep(3000);
        await manageUpgrades.getAccountNameTitle();
        expect(await manageUpgrades.getAccountNameTitle()).toEqual('Account Name :');
        await manageUpgrades.getAccountnamevalue();
        expect(await manageUpgrades.getAccountnamevalue()).toEqual('DataCops');
        await manageUpgrades.getAccountAdminUrlTitle();
        expect(await manageUpgrades.getAccountAdminUrlTitle()).toEqual('Account Admin URL :');
        await manageUpgrades.getAccountAdminUrlValue();
        expect(await manageUpgrades.getAccountAdminUrlValue()).toEqual('https://datacops.dev.pdbenterprise.com');
      });
      /*Select an option from the dropdown list*/
      it('should select from dropdown', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var dropdownElement = element(by.xpath('//*[@id="uptable_length"]/label/select'));
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
       /* search the entered text*/ 
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
            browser.sleep(3000);
             return worksheet;
             }); 
            }catch(err){
             console.log(err);
         }
         });
         /* Sort the table fields*/
         it('should sort text fields', async function(){
            browser.ignoreSynchronization = true;
            browser.sleep(3000);
            await manageUpgrades.clickSortfeilds();
            browser.sleep(3000);
         });
         /*Navigate to the previous page*/
         it('should navigate to previous page', async function(){
            browser.ignoreSynchronization = true;
            browser.sleep(3000);
            await manageUpgrades.clickPreviousUpgradePage();
            browser.sleep(3000);
         });
          /*Navigate to the next page*/
         it('should navigate to next page', async function(){
            browser.ignoreSynchronization = true;
            browser.sleep(3000);
            await manageUpgrades.clickNextUpgradePage();
            browser.sleep(3000);
         });
         /* Show if the release notes are available*/
         it('should click to show available release notes',async function(){
             browser.ignoreSynchronization = true;
             browser.sleep(3000);
             await manageUpgrades.clickReleaseNotes();
             browser.sleep(3000);
         })
         /* Close the available release notes*/
         it('should click to close release notes',async function(){
            browser.ignoreSynchronization = true;
            browser.sleep(3000);
            await manageUpgrades.clickCloseReleaseNotes();
            browser.sleep(3000);
        })
        })

