var BrowserACtions = require("./Action.js");
var newBrowserACtions = require("./ReusableLib/Actions.js");
var BillingProfile = function(){ 
var billingProfile = element(by.css('[href="#/pages/enterprise-admin/manage-tiers"]'));
var billingProfileTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div/h2'));
var dropDown = element(by.xpath('//*[@id="mttable_length"]'));
var searchText = element(by.xpath('//*[@id="mttable_filter"]/label/input'));
var previousPage = element(by.id('mttable_previous'));
var nextPage = element(by.id('mttable_next'));
var sortFields = element(by.xpath('//*[@id="mttable"]/thead/tr/th[1]'));
var entries = element(by.xpath('//*[@id="manageAdmin_info"]'));
var EC = protractor.ExpectedConditions;

    this.getbillingProfileTitle = async function() {
    return await BrowserACtions.getElementText(billingProfileTitle, 'retrieved manage admin title');
    };
    this.clickSortfeilds = async function(){
    await BrowserACtions.clickOn(sortFields,'clicked to sort fields');
    };
    this.clickPreviousTiers = async function(){
    await BrowserACtions.clickOn(previousPage,'clicked to navigate to previous page');
    };
    this.clickNextTiers = async function(){
    await BrowserACtions.clickOn(nextPage,'clicked to navigate to next page');
    };
    this.clickbillingProfile= async function() {
    await BrowserACtions.clickOn(billingProfile,'clicked billing profile');
    browser.sleep(5000);
    };
    this.dovalidateSorting = async function(){
    return await newBrowserACtions.validateSorting('User Lower Limit');
    };
    this.searchText =async function(){
    return await newBrowserACtions.performSearchWithColumnValue('Cost per User');
    };
    this.getEntriesTitle = async function(){
    return await BrowserACtions.getElementText(entries, 'retrieved no of table entries');
    }
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
      var selectDropdown=  function ( element, optionNum ) {
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
      selectDropdown(dropDown,0);
    };
    module.exports = new BillingProfile();