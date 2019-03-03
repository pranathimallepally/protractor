var BrowserACtions = require("./Action.js");
var newBrowserACtions = require("./ReusableLib/Actions.js");
var ManageAdministartors= function(){ 
var manageAdministartors = element(by.css('[href="#/pages/enterprise-admin/manage-admin"]'));
var addNewAdmin = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var adminName = element(by.name('adminName'));
var adminEmail = element(by.name('adminEmail'));
var adminPhone = element(by.name('inputphone'));
var adminOtp = element(by.name('inputOTP'));
var resetOtp = element(by.id('input-otp'));
var generateOtp = element(by.buttonText('Generate OTP'));
var save = element(by.buttonText('Save'));
var cancel = element(by.buttonText('Cancel'));
var close = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button'));
var manageAdministartorsTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
var accountNameText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[1]/div/div/label[1]'));
var accountNameValue = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[1]/div/div/label[2]/b'));
var accountAdminUrlTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[2]/div/div/label[1]'));
var accountAdminUrlValue = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[2]/div/div/label[2]/b'));
var dropdownElement1 = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select')).element(by.cssContainingText('option', '50'));
var dropdownElement = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select'));
var searchText =  element(by.xpath('//*[@id="manageAdmin_filter"]/label/input'));
var sortFields =  element(by.xpath('//*[@id="manageAdmin"]/thead/tr/th[1]'));
var previousAdminPage = element(by.id('manageAdmin_previous'));
var nextAdminPage = element(by.id('manageAdmin_next'));
var checkAdminAddedMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var editAdministrator =  element(by.id('maeditBtn'));
var EC = protractor.ExpectedConditions;
var editAdministratorTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var editAdministratorRecordText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var editAdministratorClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var resetButton = element(by.id('maresetbtn'));
var reset = element(by.buttonText('Reset'));
var resetMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var deleteAdminButton = element(by.id('madeleteBtn'));
var confirmDelete = element(by.buttonText('Yes'));
var cancelDelete = element(by.buttonText('No'));
var deleteText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var selectDropdownbyNum = function ( element, optionNum ) {
  if (optionNum){
    var options = element.all(by.tagName('option'))   
      .then(function(options){
        options[optionNum].click();
      });
  }
};
   this.getManageAdministratorTitle = async function() {
   return await BrowserACtions.getElementText(manageAdministartorsTitle, 'retrieved manage admin title');
   };
   this.getAccountNameTitle = async function() {
   return await BrowserACtions.getElementText(accountNameText, 'retreived account name title');
   };
   this.getAccountnamevalue = async function() {
   return await BrowserACtions.getElementText(accountNameValue, 'retrieved account name value');
  };
   this.getAccountAdminUrlTitle = async function() {
   return await BrowserACtions.getElementText(accountAdminUrlTitle, 'retrieved admin url title');
   };
   this.getAccountAdminUrlValue = async function() {
   return await BrowserACtions.getElementText(accountAdminUrlValue, 'retrieved account admin url');
  };
  
  var returnValue;
  var selectDropdownbyNum =  function ( element, optionNum ) {
  if (optionNum){
     var options =  element.all(by.tagName('option'))   
      .then(function(options){
        options[optionNum].click();
        var dtext = options[optionNum].getText();
        dtext.getAttribute('value').then(function(inputValue) {
         // console.log(inputValue);
          returnValue = inputValue;
          console.log(returnValue)
          //return inputValue;
          return returnValue;
        });
      });
   browser.sleep(3000);
    }
};
  this.enterSearchText = async function(text){
    await searchText.sendKeys(text);
    browser.sleep(3000);
    var tabledata = element.all(by.tagName("table"));
    var rows = tabledata.all(by.tagName("tr"));
    var cells = rows.all(by.tagName("td")).first();
    var cell = rows.all(by.tagName("td"));
    cells.getText('t').then(function(t){
      console.log(t);
    });
  for(i=0;i<=2;i++){
    var data = cell.get(i).getText();
    var textData;
    textData = text;
    var flag = 0;
    data.getText('te').then(function(te){
    if(te==textData)
    {
      console.log(te);
      flag = 1; 
      console.log('1');
    }
    });
    if(flag==1)
    break;
    }
  }
  this.clickSortfeilds = async function(){
  await BrowserACtions.clickOn(sortFields,'clicked to sort fields');
  };
  this.clickPreviousAdmin = async function(){
  await BrowserACtions.clickOn(previousAdminPage,'clicked to navigate to previous page');
  }
  this.clickNextAdmin = async function(){
  await BrowserACtions.clickOn(nextAdminPage,'clicked to navigate to next page');
  }
  this.clickManageAdministrator= async function() {
  await BrowserACtions.clickOn(manageAdministartors,'clicked manage administrator');
  browser.sleep(5000);
  };
  this.clickAddNewAdmin= async function() {
  await BrowserACtions.clickOn(addNewAdmin,'clicked to add a new admin');
  browser.sleep(5000);
  };
  this.inputAdminName= async function(name) {
  console.log('add admin name');
  await BrowserACtions.type(adminName, name, 'entered name');
  browser.sleep(5000);
  };
  this.inputAdminPhone= async function(phone) {
  await BrowserACtions.type(adminPhone, phone, 'entered phone no');
  browser.sleep(5000);
  };
  this.inputAdminEmail= async function(email) {
  await BrowserACtions.type(adminEmail, email, 'entered email address');
  browser.sleep(5000);
  };
  this.clickGenerateOtpButton= async function() {
  await BrowserACtions.clickOn(generateOtp,'clicked to generate otp');
  browser.sleep(5000);
  };
  this.clickSaveButton= async function() {
  await BrowserACtions.clickOn(save,'clicked save button');
  browser.sleep(5000);
  };
  this.clickCancelButton= async function() {
  await BrowserACtions.clickOn(cancel,'clicked cancel button');
  browser.sleep(5000);
  };
  this.clickCloseButton= async function() {
  await BrowserACtions.clickOn(close,'clicked close button');
  browser.sleep(5000);
  };
  this.getAdminAddedMessage = async function() {
  return await BrowserACtions.getElementText(checkAdminAddedMessage, 'retrived admin added message');
  };
  this.clickEditAdmin = async function() {
  browser.wait(EC.elementToBeClickable(editAdministrator), 10000);
  await BrowserACtions.clickOn(editAdministrator,'clicked edit admin');
  browser.sleep(5000);
  };
  this.getEditAdminTitle = async function() {
  return await BrowserACtions.getElementText(editAdministratorTitle, 'retrieved edit administrator title');
  };
  this.getEditAdminText = async function() {
  return await BrowserACtions.getElementText(editAdministratorRecordText, 'retrieved text for edit administrator');
  }
 this.clickEditAdminClose = async function(){
 await BrowserACtions.clickOn(editAdministratorClose,'clicked edit admin close button');
  }
  this.clickResetogin = async function() {
  browser.wait(EC.elementToBeClickable(resetButton), 10000);
  await BrowserACtions.clickOn(resetButton,'clicked reset button');
  browser.sleep(5000);
  };
  this.clickReset = async function(){
  await BrowserACtions.clickOn(reset,'clicked reset to reset login');
  }
  this.getResetLoginText = async function() {
  return await BrowserACtions.getElementText(resetMessage, 'retrieved reset login text')
  }
  this.clickDeleteAdmin = async function(){
  await BrowserACtions.clickOn(deleteAdminButton,'clicked delete admin button');
  }
  this.clickConfirmDelete = async function(){
  await BrowserACtions.clickOn(confirmDelete,'clicked confirm deletion');
  }
  this.clickCancelDelete = async function(){
  await BrowserACtions.clickOn(cancelDelete,'clicked cancel delete');
  }
  this.getDeleteText = async function(){
  return await BrowserACtions.getElementText(deleteText, 'retrieved deelted confirm message');
  }
  this.dovalidateSorting = async function(){
    return await newBrowserACtions.validateSorting('Email');
  };
  this.searchText =async function(){
    return await newBrowserACtions.performSearchWithColumnValue('Admin Name');
  };
  this.inputOtpReset = async function(){
    return await BrowserACtions.type(resetOtp, otp, 'entered otp for reset');
  }
}
module.exports = new ManageAdministartors();