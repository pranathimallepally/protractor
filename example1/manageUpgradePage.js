var BrowserACtions = require("./Action.js");
var ManageUpgrade = function(){
var manageUpgrade = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/ul/li[7]/a/span'));
var manageUpgradeTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div/h2'));
var accountNameText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div/div[1]/div/div/label[1]'));
var accountNameValue = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[1]/div/div/label[2]/b'));
var accountAdminUrlTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div/div[2]/div/div/label[1]'));
var accountAdminUrlValue = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[2]/div/div/label[2]/b'));
var dropDown = element(by.xpath('//*[@id="uptable_length"]/label/select'));
var searchText = element(by.xpath('//*[@id="uptable_filter"]/label/input'));
var sortField = element(by.xpath('//*[@id="uptable"]/thead/tr/th[1]'));
var previousUpgradePage = element(by.xpath('//*[@id="uptable_previous"]'));
var nextUpgradePage = element(by.xpath('//*[@id="uptable_next"]'));
var releaseNotes = element(by.id('releasenotes'));
var closeReleaseNotes = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
this.getmanageUpgradeTitle = async function() {
return await BrowserACtions.getElementText(manageUpgradeTitle, 'retrieved manage admin title');
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
    await BrowserACtions.clickOn(sortField,'clicked to sort fields');
    };
    this.clickPreviousUpgradePage = async function(){
    await BrowserACtions.clickOn(previousUpgradePage,'clicked to navigate to previous page');
    }
    this.clickNextUpgradePage = async function(){
    await BrowserACtions.clickOn(nextUpgradePage,'clicked to navigate to next page');
    }
    this.clickReleaseNotes = async function(){
    await BrowserACtions.clickOn(releaseNotes,'clicked to view release notes');
    }
    this.clickCloseReleaseNotes = async function(){
    await BrowserACtions.clickOn(closeReleaseNotes,'clicked to close release notes');
    }
    this.clickManageUpgrade= async function() {
    //await manageAdministartors.click();
    await BrowserACtions.clickOn(manageUpgrade,'clicked manage upgrades');
    browser.sleep(5000);
    };
    }
  module.exports = new ManageUpgrade();
