var BrowserACtions = require("./Action.js");
var MicrosoftOffice365Integration = function(){ 
var microsoftOffice365Integration = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/ul/li[6]/a'));
var showAuthorizationToken = element(by.buttonText('Show authorization token'));
var hideAuthorizationToken = element(by.buttonText('Hide authorization token'));
var resetToken = element(by.buttonText('Reset token'));
var confirmResetToken = element(by.buttonText('Yes'));
var cancelResetToken = element(by.buttonText('No'));
var Office365Title = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div/h2'));
///html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[3]/a[1]
var portalOfficeNavigation = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[3]/a[1]'));
var portalAzureNavigation = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[3]/a[2]'));
var link = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[3]/a[3]'));
this.getOffice365Title = async function() {
return await BrowserACtions.getElementText(Office365Title, 'retrieved microsoft office365 title');
};
this.clickMicrosoftOffice365Integration = async function(){
await BrowserACtions.clickOn(microsoftOffice365Integration,'clicked microsoft office 365 integration');
};
this.clickShowAuthorizationToken= async function(){
await BrowserACtions.clickOn(showAuthorizationToken,'clicked show authorization token button');
};
this.clickHideAuthorizationToken= async function(){
await BrowserACtions.clickOn(hideAuthorizationToken,'clicked hide authorization token button');
};
this.clickResetToken= async function(){
await BrowserACtions.clickOn(resetToken,'clicked reset token button');
};
this.clickConfirmResetToken= async function(){
await BrowserACtions.clickOn(confirmResetToken,'clicked reset token button');
};
this.clickCancelResetToken= async function(){
await BrowserACtions.clickOn(cancelResetToken,'clicked reset token button');
};
this.clickPortalOfficeNavigation= async function(){
await BrowserACtions.clickOn(portalOfficeNavigation,'clicked portal office navigation button');
};
this.clickPortalAzureNavigation= async function(){
await BrowserACtions.clickOn(portalAzureNavigation,'clicked portal azure navigation button');
};
this.clicklink = async function(){
await BrowserACtions.clickOn(link,'clicked the link for documentation details');
};
}
module.exports = new MicrosoftOffice365Integration();


