var BrowserACtions = require("./Action.js");
var newBrowserACtions = require("./ReusableLib/Actions.js");
var Excel = require('exceljs');

var manageUsersPage = function(){ 

  var manageUser = element(by.css('[href="#/pages/enterprise-admin/manage-users"]'));
  var addNewUser = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a[1]'));
  var firstName = element(by.name('inputFirstName'));
  var lastName = element(by.name('inputLastName'));
  var primaryEmail = element(by.name('inputPrimaryEmail'));
  var primaryPhone = element(by.name('inputPrimaryPhone'));
  var cancelButton = element(by.buttonText('Cancel'));
  var saveButton = element(by.buttonText('Save'));
  var importUser = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a[2]'));
  var downloadList = element(by.css('[href="https://www.pdbenterprise.com/downloads/TestData/latest/test.csv"]'));
  var browseUser = element(by.buttonText('Browse'));
  var manageUserTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
  //var dropdownElement = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select')).element(by.cssContainingText('option', '25'));
  this.clickManageUser1= async function(){
    await BrowserACtions.clickOn(manageUser,'clicked manage user');
    browser.sleep(4000);
  };


  /*this.clickManageUser= async function() {
      await manageUser.click();
      browser.sleep(5000);
    };*/
    this.clickAddUser= async function() {
      await addNewUser.click();
      browser.sleep(5000);
    };
    this.inputFirstName= async function(fname) {
      await BrowserACtions.type(firstName, fname, 'entered first name');
      browser.sleep(5000);
    };
    this.inputLastName= async function(lname) {
      await lastName.sendKeys(lname);
      browser.sleep(5000);
    };
    this.inputPrimaryEmail= async function(email) {
      await primaryEmail.sendKeys(email);
      browser.sleep(5000);
    };
    this.inputPrimaryPhone= async function(phone) {
      await primaryPhone.sendKeys(phone);
      browser.sleep(5000);
    };
    this.clickCancelButton= async function() {
      await cancelButton.click();
      browser.sleep(5000);
    };
    /*this.clickSaveButton= async function() {
      await saveButton.click();
      browser.sleep(5000);
    };*/
    this.clickImportUserButton= async function() {
      await importUser.click();
      browser.sleep(5000);
    };
    this.clickDownloadListButton= async function() {
      await downloadList.click();
      browser.sleep(5000);
    };
    this.clickBrowseUserButton= async function() {
      await browseUser.click();
      browser.sleep(5000);
    };
    this.getManageUserTitle= async function() {
      //return await manageUserTitle.getText();
      return await BrowserACtions.getElementText(manageUserTitle, 'retrieved title');
    };
    this.dovalidateSorting = async function(){

      return await newBrowserACtions.validateSorting('User Email');
    };
    this.searchText =async function(){
      return await newBrowserACtions.performSearchWithColumnValue('User Name');
    };
  
};
module.exports = new manageUsersPage();