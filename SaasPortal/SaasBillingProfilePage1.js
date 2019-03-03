var actions = require("./Actions.js");
var ManageSaasBilling = function(){ 
var saasBilling  = element(by.css('[href="#/pages/saas-admin/manage-billingprofiles"]'));
var saasBillingTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
var createNewBillingProfile = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var billingInfo = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/p'));
var dropDown = element(by.xpath('//*[@id="mptable_length"]/label/select'));
var searchText = element(by.xpath('//*[@id="mptable_filter"]/label/input'));
var sortFields = element(by.xpath('//*[@id="mptable"]/thead/tr/th[1]'));
var billingDetails = element(by.id('mbpdetailsBtn'));
var editBillingProfileName = element(by.name('inputBillingProfileNameName'));
var billingFrequency = element(by.name('accountStatus'));
var cancel = element(by.buttonText('Cancel'));
var update = element(by.buttonText('Update'));
var editBillingProfileWindow = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var closeEditBillingProfile = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var billingTier = element(by.id('mbpbillingBtn'));
var createNewBillingTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var billingTierDropdown = element(by.xpath('//*[@id="mbttable_length"]/label/select'));
var billingTierSort = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[1]'));
var billingTierSearch = element(by.xpath('//*[@id="mbttable_filter"]/label/input'));
var billingTierPreviousPage = element(by.id('mbttable_previous'));
var billingTierNextPage = element(by.id('mbttable_next'));
var deleteBilling = element(by.id('mbpdeleteBtn'));
var deleteBillingText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/span'));
var deleteBillingClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
var deleteBillingTierText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/span'));
var deleteBillingTierClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
var previousBillingPage = element(by.id('mptable_previous'));
var nextBillingPage = element(by.id('mptable_next'));
var editBillingTierDetails = element(by.id('mbtdetailsBtn'));
var editBillingTierText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var editBillingTierClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var editUserCost = element(by.name('inputUserCost'));
var deleteTier = element(by.id('mbtdeleteBtn'));
//var delete = element(by.buttonText('Delete'));
this.getsaasBillingTitle = async function() {
return await actions.getElementText(saasBillingTitle, 'retrieved saas billing title info');
};
this.getbillingInfo = async function() {
return await actions.getElementText(billingInfo, 'retrieved billing information');
};
this.getdeleteBillingText = async function() {
return await actions.getElementText(deleteBillingText, 'retrieved billing text info');
};
this.getdeleteBillingTierText = async function() {
return await actions.getElementText(deleteBillingTierText, 'retrieved delete billing tier text info');
};
this.geteditBillingTierText = async function() {
return await actions.getElementText(editBillingTierText, 'retrieved edit billing tier text info');
};
this.clicksaasBilling = async function(){
await actions.clickOn(saasBilling,'clicked to navigate to saas billing');
};
this.clickcreateNewBillingProfile = async function(){
await actions.clickOn(createNewBillingProfile,'clicked to create a new billing profile');
};
this.clickdropDown = async function(){
await actions.clickOn(dropDown,'clicked to create a new billing profile');
};
this.clicksortFields = async function(){
await actions.clickOn(sortFields,'clicked to sort billing profile table');
};
this.clickbillingDetails = async function(){
await actions.clickOn(billingDetails,'clicked to view billing details');
};
this.clickbillingTier = async function(){
await actions.clickOn(billingTier,'clicked to view billing tier');
};
this.clickdeleteBilling = async function(){
await actions.clickOn(deleteBilling,'clicked to view billing tier');
};
this.clickpreviousBillingPage = async function(){
await actions.clickOn(previousBillingPage,'clicked to view previous billing page');
};
this.clicknextBillingPage = async function(){
await actions.clickOn(nextBillingPage,'clicked to view next billing page');
};
this.clickCancel = async function(){
await actions.clickOn(cancel,'clicked cancel button');
};
this.clickupdate = async function(){
await actions.clickOn(update,'clicked update button');
};
this.clickEditBillingProfileWindow = async function(){
await actions.clickOn(editBillingProfileWindow,'clicked to open edit profile window');
};
this.clickCloseEditBillingProfile = async function(){
await actions.clickOn(closeEditBillingProfile,'clicked to open edit profile window');
};
this.clickCreateNewBillingTier = async function(){
await actions.clickOn(createNewBillingTier,'clicked to create a new billing tier');
};
this.clickBillingTierDropdown = async function(){
await actions.clickOn(billingTierDropdown,'clicked to select a billing tier');
};
this.clickBillingTierSort = async function(){
await actions.clickOn(billingTierSort,'clicked to sort the billing  tier');
};
this.clickBillingTierSearch = async function(){
await actions.clickOn(billingTierSearch,'clicked to search billing tier fields');
};
this.clickbillingTierPreviousPage = async function(){
await actions.clickOn(billingTierPreviousPage,'clicked to navigate to previous biling tier page');
};
this.clickbillingTierNextPage = async function(){
await actions.clickOn(billingTierNextPage,'clicked to navigate to next biling tier page');
};
this.clickDeleteBillingClose = async function(){
await actions.clickOn(deleteBillingClose,'clicked to close delete billing window');
};
this.clickDeleteBillingClose = async function(){
await actions.clickOn(deleteBillingClose,'clicked to close delete billing window');
};
this.clickDeleteBillingTierClose = async function(){
await actions.clickOn(deleteBillingTierClose,'clicked to close delete billing tier window');
};
this.clickeditBillingTierDetails = async function(){
await actions.clickOn(editBillingTierDetails,'clicked to edit billing tier details');
};
this.clickeditBillingTierClose = async function(){
await actions.clickOn(editBillingTierClose,'clicked to close edit billing tier');
};
this.clickBillingFrequency = async function(){
await actions.clickOn(billingFrequency,'clicked to change billing frequency');
};
this.clickDeleteTier = async function(){
await actions.clickOn(deleteTier,'clicked to delete a billing tier');
};
this.inputeditBillingProfileName= async function(text) {
await actions.type(editBillingProfileName, text, 'entered to edit billing profile name');
browser.sleep(5000);
};
this.inputEditUserCost= async function(text) {
await actions.type(editUserCost, text, 'entered to edit the user cost in the billing tier');
browser.sleep(5000);
};
this.inputsearchText= async function(text) {
await actions.type(searchText, text, 'entered text to search');
browser.sleep(5000);
};
}
module.exports = new ManageSaasBilling();