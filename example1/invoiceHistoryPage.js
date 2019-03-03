var BrowserACtions = require("./Action.js");
var newBrowserACtions = require("./ReusableLib/Actions.js");
var InvoiceHistory = function(){
var invoiceHistory = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/ul/li[9]/a/span'));
var invoiceHistoryTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div/h2'));
var searchText = element(by.xpath('//*[@id="manageinvoices_filter"]/label/input'));
var sortField = element(by.xpath('//*[@id="manageinvoices"]/thead/tr/th[1]'));
var invoicePreviousPage = element(by.id('manageinvoices_previous'));
var invoiceNextPage = element(by.id('manageinvoices_next'));
this.getInvoiceHistoryTitle = async function(){
return await BrowserACtions.getElementText(invoiceHistoryTitle,'retreived invoice history title');
}
this.clickInvoiceHistory = async function(){
return await BrowserACtions.clickOn(invoiceHistory,'clicked invoice history');
}
this.clickSortField = async function(){
return await BrowserACtions.clickOn(sortField,'clicked to sort fields');
}
this.clickInvoicePreviousPage = async function(){
return await BrowserACtions.clickOn(invoicePreviousPage,'clicked to navigate to previous invoice page');
}
this.clickInvoiceNextPage = async function(){
return await BrowserACtions.clickOn(invoiceNextPage,'clicked to navigate to next invoice page');
}
this.dovalidateSorting = async function(){
return await newBrowserACtions.validateSorting('Invoice Period');
};
this.searchText =async function(){
return await newBrowserACtions.performSearchWithColumnValue('Invoices');
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
}
module.exports = new InvoiceHistory();










