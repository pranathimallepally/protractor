var portalHomepage = require('./login');
var Excel = require('exceljs');
var BrowserACtions = require('./Action.js');
var reusable = require("./ReusableLib/Reusable.js");
var expected_result = require('../expectedresult.json');
describe('Microsoft office 365 integration', function() {
/* Login to the portal*/
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
}catch(err){
    console.log(err);
}
});
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
            //portalHomepage.inputOtp(worksheet.getCell('A3').value);
            await reusable.loginIntoApp();
            await portalHomepage.clickSignin();
            //console.log('Value from sheet : ' +excelValue);
            browser.sleep(5000);  
            return worksheet;
        }); 
    }catch(err){
        console.log(err);
    }
//browser.restart();
});

var microsoftoffice365integration = require('./microsoftOffice365IntegrationPage.js');
/* Open office 365 integration page*/
it('should open offfice 365 integration page', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await microsoftoffice365integration.clickMicrosoftOffice365Integration();
    expect(microsoftoffice365integration.getOffice365Title()).toEqual();
    browser.sleep(2000);
})
/* check page titles*/
it('should verify title of the page', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.getOffice365Title();
    expect(microsoftoffice365integration.getOffice365Title()).toEqual();
    browser.sleep(2000);
})
/* View auhorization token*/
it('should show authorization token', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clickShowAuthorizationToken();
    browser.sleep(2000);
    await microsoftoffice365integration.clickHideAuthorizationToken();
    browser.sleep(2000);
})
/*Reset the existing token*/
it('should reset token',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clickResetToken();
    browser.sleep(2000);
})
/* Confirm reset token*/
it('should confirm reset token',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clickConfirmResetToken();
    browser.sleep(2000);
})
/* Cancel reseting a token*/
it('should cancel reset token',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clickResetToken();
    browser.sleep(2000);
    await microsoftoffice365integration.clickCancelResetToken();
    browser.sleep(2000);
})
/* Open office portal*/
it('should open office portal',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clickPortalOfficeNavigation();
    browser.sleep(2000);
    var winHandles=browser.getAllWindowHandles();
    winHandles.then(function(handles) 
    {
        var parentWindow=handles[0];
        var popUpWindow=handles[1];
        browser.switchTo().window(popUpWindow);
        browser.switchTo().window(parentWindow);
    })
    browser.sleep(3000);
})
/* Open azure portal*/
it('should open azure portal', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clickPortalAzureNavigation();
    browser.sleep(2000);
    var winHandles=browser.getAllWindowHandles();
    winHandles.then(function(handles) 
    {
        var parentWindow=handles[0];
        var popUpWindow=handles[1];
        browser.switchTo().window(popUpWindow);
        browser.switchTo().window(parentWindow);
    })
    browser.sleep(3000);
})
/* Open workflow documentation*/
it('should open link for documentation on workflow',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await microsoftoffice365integration.clicklink();
    browser.sleep(2000);
    var winHandles=browser.getAllWindowHandles();
    winHandles.then(function(handles) 
    {
        var parentWindow=handles[0];
        var popUpWindow=handles[1];
        browser.switchTo().window(popUpWindow);
        browser.switchTo().window(parentWindow);
    })
    browser.sleep(3000);
})
});
