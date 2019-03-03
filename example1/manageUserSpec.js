var portalHomepage = require('./login');
var Excel = require('exceljs');
var BrowserActions = require('./Action.js');
var reusable = require("./ReusableLib/Reusable.js");
var manageusers = require('./manageUsersPage');

describe('Manage Users', function() {
    it('should login to the portal', async function() {
        await portalHomepage.get();
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        try{
            console.log('started wexecuting try block');
            var wrkbook = new Excel.Workbook();
            console.log('Work book created');
            wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
                console.log('excel sheet found');
                var worksheet = wrkbook.getWorksheet('loginDetails');
                browser.waitForAngularEnabled(false);
                // var valueFromExcel = worksheet.getCell('A1').value;
                // console.log(valueFromExcel);
                //var excelValue = portalHomepage.inputEmail(worksheet.getCell('A1').value);
                portalHomepage.inputEmail(worksheet.getCell('A1').value);
                browser.sleep(10000);
                await portalHomepage.clickSignin();
                browser.sleep(5000);
                portalHomepage.inputPassword(worksheet.getCell('A2').value);
                await reusable.loginIntoApp();
                browser.sleep(2000);
                //portalHomepage.inputOtp(worksheet.getCell('A3').value);
                await portalHomepage.clickSignin();
                //console.log('Value from sheet : ' +excelValue);
                browser.sleep(5000);  
                return worksheet;
            }); 
        }catch(err){
            console.log(err);
        }
       //var valueSheet = await BrowserACtions.input(valueFromExcel);
        //console.log('value from actions : ' +valueSheet);
        //portalHomepage.inputEmail(valueSheet);
    //});  


        
        //await portalHomepage.inputEmail('vvvgkrishna.a@axiomio.com');
        /*await portalHomepage.clickSignin();
        browser.sleep(2000);
        await portalHomepage.inputPassword('Welcome2018!');
        await portalHomepage.inputOtp('123456');
        await portalHomepage.clickSignin();
        browser.sleep(5000);*/
    });
    
    it('should navigate to manage user', async function() {
       //await angularHomepage.get();
       browser.ignoreSynchronization = true;
        browser.sleep(5000);
        await manageusers.clickManageUser1();
       browser.sleep(5000);
       await global.browser.manage().window().maximize();
      // browser.executeScript('window.scrollTo(720, 881);');
       //await manageusers.clickAddUser();
       //browser.sleep(5000);
   });
    xit('should add a new user', async function() {
    browser.ignoreSynchronization = true;
    browser.sleep(5000);
    try{
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('testData.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('loginDetails');
        browser.waitForAngularEnabled(false);
        manageusers.inputFirstName(worksheet.getCell('A4').value);
        browser.sleep(5000);  
        return worksheet;
        }); 
    }catch(err){
        console.log(err);
    }
    /*await manageusers.inputFirstName(worksheet.getCell('A1').value);
    //await manageusers.inputFirstName('Alex');
    browser.sleep(5000);
    await manageusers.inputLastName('Jones');
    browser.sleep(5000);
    await manageusers.inputPrimaryEmail('alexjones@gmail.com');
    browser.sleep(5000);
    await manageusers.inputPrimaryPhone('5428956257');
    browser.sleep(5000);
    await manageusers.clickCancelButton();
    browser.sleep(5000);
    //await manageusers.clickSaveButton();
    //browser.sleep(2000); */ 
   });
   xit('should import users',async function(){
       browser.ignoreSynchronization = true;
       await manageusers.clickImportUserButton();
       browser.sleep(3000);
   });
   xit('should download user list',async function(){
       browser.ignoreSynchronization = true;
       await manageusers.clickDownloadListButton();
       browser.sleep(3000);
   })
   xit('should browse user list',async function(){
    browser.ignoreSynchronization = true;
    await manageusers.clickBrowseUserButton();
    browser.sleep(3000);
})
var path = require("path");
 
  xit("Upload file",function(){
        var filePath = "/Users/admin/Downloads/test.csv";
        var fpath = path.resolve(__dirname,filePath);
        browser.ignoreSynchronization = true;
        browser.sleep(1000);
       // var wel = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[2]/input'));
        var ele=element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[2]/div/input'));      
        browser.sleep(3000);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(ele), 20000).then(async function(){
           await ele.sendKeys(fpath);
            browser.sleep(1000);
      });
      
        //ele.sendKeys(fpath);
        //browser.sleep(1000);
    });
    xit('should get manage user title',async function(){
        browser.ignoreSynchronization = true;
        await manageusers.getManageUserTitle();
        browser.sleep(3000);
    });
    it('should get title',async function(){
        browser.ignoreSynchronization = true;
        await manageusers.getManageUserTitle();
        browser.sleep(3000);
    });
    it('should sort the given table',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        await manageusers.dovalidateSorting();
        browser.sleep(3000);
    })
    it('should search for the given text',async function(){
        browser.ignoreSynchronization= true;
        browser.sleep(3000);
        await manageusers.searchText();
        browser.sleep(2000);
    })
});
    