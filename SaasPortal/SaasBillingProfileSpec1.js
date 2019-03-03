var LoginPage = require('./LoginPage.js');
var reusable = require('./SaasReusable.js');
var Excel = require('exceljs');
var AppURL = require('./Env.json');
describe('Saas billing profiles', function() {
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
  var saasBillingProfiles = require('./SaasBillingProfilePage');
  it('should navigate to billing profiles', async function() {
    browser.sleep(5000);
    await saasBillingProfiles.clicksaasBilling();
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    });
    it('should verify title', async function(){
      browser.ignoreSynchronization = true;
      browser.sleep(4000);
      await saasBillingProfiles.getsaasBillingTitle();
      expect(await saasBillingProfiles.getsaasBillingTitle()).toEqual('Billing Profiles');
     });
    it('should select from dropdown', async function(){
      browser.ignoreSynchronization = true;
      browser.sleep(3000);
      var dropdownElement = element(by.xpath('//*[@id="mptable_length"]/label/select'));
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
      it('should edit billing profile', async function(){
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        await saasBillingProfiles.clickbillingDetails();
        browser.sleep(1000);
        //await manageadministrators.geteditSaasAdminTitle();
        //browser.sleep(2000);
        var wrkbook = new Excel.Workbook();
        wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
        var worksheet = wrkbook.getWorksheet('AdminDetails');
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
        expect(managesaasadministrators.geteditAdminRecMessage()).toEqual('Successfully updated SaaS administrator account record.');
        browser.sleep(3000);
        });
     });
    xit('should cancel editing administrator', async function(){
        await managesaasadministrators.clickSaasAdmindetails();
        await managesaasadministrators.clickCancel();
        browser.sleep(5000);
      });
    })