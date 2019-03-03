var LoginPage = require('./LoginPage.js');
var reusable = require('./SaasReusable.js');
var Excel = require('exceljs');
var AppURL = require('./Env.json');
var expected_result = require('./expectedresult.json');
describe('Manage Saas Admin', function() {
  /*Login to the portal*/
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
  var managesaasadministrators = require('./SaasManageAdminPage');
  /*Navigate to manage admin*/
    it('should navigate to manage admin', async function() {
    browser.sleep(5000);
    await managesaasadministrators.clickManageSaasAdministartors();
    browser.sleep(5000);
    expect(await managesaasadministrators.getManageSaasAdministratorTitle()).toEqual(expected_result.ManageSaasAdministratorTitle);
    browser.ignoreSynchronization = true;
    });
    /*Verify the titles*/
    it('should verify title', async function(){
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      await managesaasadministrators.getManageSaasAdministratorTitle();
      expect(await managesaasadministrators.getManageSaasAdministratorTitle()).toEqual(expected_result.ManageSaasAdministratorTitle);
     });
     /*Select from the dropdown*/
    it('should select from dropdown', async function(){
      browser.ignoreSynchronization = true;
      browser.sleep(3000);
      var dropdownElement = element(by.xpath('//*[@id="sutable_length"]/label/select'));
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
          var tabledata = element.all(by.xpath('//*[@id="sutable"]/tbody/tr'));
          var rowCount = await tabledata.count();
          console.log(+rowCount);
          expect(returnValue).toBeGreaterThan(rowCount);
      });
      /*Edit a saas administrator*/
    it('should edit an saas administrator', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        await managesaasadministrators.searchText('Test');
        await managesaasadministrators.clickSaasAdmindetails();
        browser.sleep(1000);
        //await manageadministrators.geteditSaasAdminTitle();
        //browser.sleep(2000);
        var wrkbook = new Excel.Workbook();
        var file = await wrkbook.xlsx.readFile('SaasDetails.xlsx');
        var worksheet = file.getWorksheet('AdminDetails');
        //browser.waitForAngularEnabled(false);
        //await manageadministrators.enterSearchText('renamed');
        element(by.name('inputFirstName')).click().clear().sendKeys(worksheet.getCell('A1').value);
        browser.sleep(3000);
        element(by.name('inputLastName')).click().clear().sendKeys(worksheet.getCell('A2').value);
        browser.sleep(3000);
        element(by.name('inputphoneNumber')).click().clear().sendKeys(worksheet.getCell('A3').value);
        browser.sleep(3000);
        element(by.buttonText('Update')).click();
        await managesaasadministrators.geteditAdminRecMessage();
        expect(managesaasadministrators.geteditAdminRecMessage()).toEqual(expected_result.editAdminRecMessage);
        browser.sleep(3000);
      });
     xit('should edit saas administrator',async function(){
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      await managesaasadministrators.clickSaasAdmindetails();
    //var wrkbook = new Excel.Workbook();
      //wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
      //var worksheet = wrkbook.getWorksheet('AdminDetails');
      element(by.name('inputFirstName')).click().clear().sendKeys('edited admin');
      browser.sleep(3000);
      element(by.buttonText('Update')).click();
      browser.sleep(3000);
      
    });
    /*Cancel editing an administrator*/
    it('should cancel editing administrator', async function(){
        await managesaasadministrators.clickSaasAdmindetails();
        var a= await managesaasadministrators.clickCancel();
        expect(true).toBe(a);
        browser.sleep(5000);
      });
      /*Close edit admin window*/
    it('should close edit admin window',async function(){
        await managesaasadministrators.clickSaasAdmindetails();
        var b = await managesaasadministrators.clickCloseAddSaasAdmin();
        expect(true).toBe(b);
        browser.sleep(3000);
      });
      /*Click add new admin*/
    it('should click add new admin', async function() {
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        await managesaasadministrators.clickaddSaasAdmin();
        browser.sleep(5000);
        var str = await managesaasadministrators.getaddSaasAdminText();
        var substr= str.substring(0,33);
        browser.sleep(5000);
        expect(substr).toEqual(expected_result.addSaasAdminText);
       });
       /*Add a new saas admin*/
    it('should add a new saas admin', async function() {
        browser.ignoreSynchronization = true;
        browser.sleep(5000);
        try{
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('AdminDetails');
        browser.waitForAngularEnabled(false);
        await managesaasadministrators.inputSaasAdminFirstName(worksheet.getCell('A4').value);
        browser.sleep(3000);
        await managesaasadministrators.inputSaasAdminLastName(worksheet.getCell('A5').value);
        browser.sleep(3000);
        await managesaasadministrators.inputSaasAdminEmail(worksheet.getCell('A6').value);
        browser.sleep(3000);
        await managesaasadministrators.inputSaasAdminPhone(worksheet.getCell('A7').value);
        browser.sleep(5000);
        await managesaasadministrators.clickSave();  
        browser.sleep(5000);
        return worksheet;
       }); 
       }
       catch(err){
          console.log(err);
       }
     });
     /*Verify admin added successfully*/
    it('should verify admin added successfully', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        await managesaasadministrators.getadminAddMessage();
        browser.sleep(1000);
        expect(managesaasadministrators.getadminAddMessage()).toEqual(expected_result.adminAddMessage);
      })
      /*Cancel adding an admin*/
    it('should cancel adding an admin',async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        await managesaasadministrators.clickaddSaasAdmin();
        var c = await managesaasadministrators.clickCancel();
        expect(true).toBe(c);
        browser.sleep(2000);
    })
    /*Close the add admin window*/
    it('should close add admin window',async function(){
        await managesaasadministrators.clickaddSaasAdmin();
        var d = await managesaasadministrators.clickCloseAddSaasAdmin();
        expect(true).toBe(d);
        browser.sleep(5000);
      });
      /*Cancel deleting an admin*/
    it('should cancel deleting an admin',async function(){
      element(by.xpath('//*[@id="sutable_filter"]/label/input')).click().clear().sendKeys('test1');
      await managesaasadministrators.clicksaasAdminDelete();
      browser.sleep(2000);
      var e = await managesaasadministrators.clickCancel();
      expect(true).toBe(e);
      browser.sleep(2000);
    });
    /*Close the admin deletion window*/
    it('should close admin deletion window',async function(){
      element(by.xpath('//*[@id="sutable_filter"]/label/input')).click().clear().sendKeys('test1');
      await managesaasadministrators.clicksaasAdminDelete();
      browser.sleep(2000);
      var f= await managesaasadministrators.clickDeleteClose();
      expect(true).toBe(f);
      browser.sleep(2000);
    });
    /*Delete an admin*/
    it('should delete an admin',async function(){
      element(by.xpath('//*[@id="sutable_filter"]/label/input')).click().clear().sendKeys('test1');
      await managesaasadministrators.clicksaasAdminDelete();
      browser.sleep(2000);
      await managesaasadministrators.clickConfirmDelete();
      browser.sleep(2000);
      expect(await managesaasadministrators.getdeleteMessage()).toEqual(expected_result.deleteMessage);
      browser.sleep(2000);
    });
    /*check navigation to previous page*/
    it('should navigate to previous page', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var g = await managesaasadministrators.clickpreviousSaasAdminPage();
        expect(true).toBe(g);
        browser.sleep(30000);
     });
     /*check navigation to the next page*/
    it('should navigate to next page', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var h = await managesaasadministrators.clicknextSaasAdminPage();
        expect(true).toBe(h);
        browser.sleep(30000);
     });
     /*check sorting in ascending and descending order*/
    it('should sort the given table',async function(){
         browser.ignoreSynchronization = true;
         browser.sleep(5000);
         await managesaasadministrators.clickManageSaasAdministartors();
         browser.sleep(1000);
         var i = await managesaasadministrators.dovalidateSorting();
         expect(true).toBe(i);
         browser.sleep(3000);
     })
     /*Search the table with entered text*/
    it('should search for the given text',async function(){
         browser.ignoreSynchronization= true;
         browser.sleep(3000);
         var j =await managesaasadministrators.searchText();
         expect(true).toBe(j);
         browser.sleep(2000);
     })
     /*Verify the labels*/
     it('should verify the labels',async function(){
         browser.ignoreSynchronization= true;
         browser.sleep(3000);
         element(by.xpath('//*[@id="sutable_filter"]/label/input')).clear().sendKeys('account');
         expect(await managesaasadministrators.getlabelFirstName()).toEqual(expected_result.exlabelFirstName);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelLastName()).toEqual(expected_result.exlabelLastName);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelEmail()).toEqual(expected_result.exlabelEmail);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelPhoneNumber()).toEqual(expected_result.exlabelPhoneNumber);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelDetails()).toEqual(expected_result.exlabelDetails);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelDelete()).toEqual(expected_result.exlabelDelete);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelSearch()).toEqual(expected_result.exlabelSearch);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelPrevious()).toEqual(expected_result.exlabelPrevious);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelNext()).toEqual(expected_result.exlabelNext);
         browser.sleep(2000);
         await managesaasadministrators.clickSaasAdmindetails();
         browser.sleep(2000);
         var a = await managesaasadministrators.getlabelDetailsHeader();
             a = a.slice('x', -2)
         expect(a).toEqual(expected_result.exlabelDetailsHeader);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelFirstNameDetails()).toEqual(expected_result.exlabelFirstNameDetails);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelLastNameDetails()).toEqual(expected_result.exlabelLastNameDetails);
         browser.sleep(2000);
         //expect(await managesaasadministrators.getlabelPhone()).toEqual(expected_result.exlabelPhone);
         //browser.sleep(2000);
         expect(await managesaasadministrators.getlabelCancel()).toEqual(expected_result.exlabelCancel);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelUpdate()).toEqual(expected_result.exlabelUpdate);
         browser.sleep(2000);
         await managesaasadministrators.clickCancel();
         browser.sleep(2000);
         await managesaasadministrators.clicksaasAdminDelete();
         browser.sleep(2000);
         var b= await managesaasadministrators.getlabelDeleteHeader();
         b= b.slice('x', -5)
         //expect(b).toEqual(expected_result.exlabelDeleteHeader);
         browser.sleep(2000);
         expect(await managesaasadministrators.getlabelDeleteButton()).toEqual(expected_result.exlabelDeleteButton);
         browser.sleep(2000);
        })
      })