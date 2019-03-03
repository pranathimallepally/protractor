var BrowserACtions = require("./Action.js");
var ManageActiveDirectory = function(){ 
var accountName = element(by.xpath('//*[@id="inputAccountName"]'));
var accountUrl = element(by.id('inputAccountAdminUrl'));
let Status;
var manageActiveDirectory = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/ul/li[5]/a/span'));
var manageActiveDirectoryTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div/h2'));
var downloadFile = element(by.css('[href ="https://www.pdbenterprise.com/downloads/PDBADBridge/latest/PDBADBridge04-27-2018-1840.rar"]'));
var showToken = element(by.buttonText('Show Token'));
var hideToken = element(by.buttonText('Hide Token'));
var showURL = element(by.buttonText('Show URL'));
var hideURL = element(by.buttonText('Hide URL'));
var dropDown = element(by.xpath('//*[@id="agnttable_length"]/label/select'));
var searchText = element(by.xpath('//*[@id="agnttable_filter"]/label/input'));
var previousPage = element(by.xpath('//*[@id="agnttable_previous"]'));
var nextPage = element(by.xpath('//*[@id="agnttable_next"]'));
var sortFields = element(by.xpath('//*[@id="agnttable"]/thead/tr/th[1]'));

this.getAccountNameFromHomePage = async function(){
return await BrowserACtions.getElementText(accountName,'retreived account name');
};
this.getAccountUrlFromHomePage = async function(){
return await BrowserACtions.getElementText(accountUrl,'retreived account url');
};
this.getmanageActiveDirectoryTitle = async function() {
return await BrowserACtions.getElementText(manageActiveDirectoryTitle, 'retrieved manage active directory title');
};
this.clickSortfields = async function(){
Status = await BrowserACtions.clickOn(sortFields,'clicked to sort fields');
return Status;
};
this.clickPreviousPage = async function(){
Status = await BrowserACtions.clickOn(previousPage,'clicked to navigate to previous page');
return Status;
}
this.clickNextPage = async function(){
Status = await BrowserACtions.clickOn(nextPage,'clicked to navigate to next page');
return Status;
};
this.clickManageActiveDirectory= async function() {
await BrowserACtions.clickOn(manageActiveDirectory,'clicked manage active directory');
browser.sleep(5000);
};
this.clickDownloadFile = async function(){
await BrowserACtions.clickOn(downloadFile,'clicked to download file');
};
this.clickShowToken = async function(){
await BrowserACtions.clickOn(showToken,'clicked show token button');
};
this.clickHideToken = async function(){
await BrowserACtions.clickOn(hideToken,'clicked hide token button');
};
this.clickShowURL = async function(){
await BrowserACtions.clickOn(showURL,'clicked show url button');
};
this.clickHideURL = async function(){
await BrowserACtions.clickOn(hideURL,'clicked hide url button');
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
  //var textData = "pranathi.m@axiomio.com";
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
}
module.exports = new ManageActiveDirectory();
  
