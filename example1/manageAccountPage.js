var BrowserACtions = require("./Action.js");
var ManageAccount = function(){ 
var manageAccount = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/ul/li[1]/a/span'));
var editManageAccount = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var nameOfAccount = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[1]/div/div/label'));
var nameOfAdminUrl = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[2]/div/div/label'));
var nameOfPrimaryPOC = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[3]/div/div/label'));
var emailOfPrimaryPOC = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[4]/div/div/label'));
var phoneOfPrimaryPOC = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[5]/div/div/label'));
var billingEmailAddress = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[6]/div/div/label'));
var billingAddress = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[7]/div/div/label'));
var billingCity = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[8]/div/div/label'));
var billingState = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[9]/div/div/label'));
var billingPostalCode = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[10]/div/div/label'));
var billingCountry = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[1]/nb-card/nb-card-body/div[11]/div/div/label'));
var cancel = element(by.buttonText('Cancel'));
var cancelAccountSetting = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[3]/nb-card/nb-card-body/div[3]/div/div/div[2]/button[1]'));
var save = element(by.buttonText('Save'));
var reset = element(by.buttonText('Reset'));
var nameOfCurrentBillingProfile = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[2]/nb-card/nb-card-body/div/div[1]/div/div/div[1]/label[1]'));
var nameOfCurrentDefaultPay = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[2]/nb-card/nb-card-body/div/div[1]/div/div/div[1]/label[1]'));
var enterCreditCardNo = element(by.xpath('//*[@id="root"]/form/div/div[2]/span[1]/span[2]/label/input'));
var addAsPaymentButton = element(by.buttonText('Add as Payment Method'));
var accountNameInput = element(by.name('accountname'));
var pocNameInput = element(by.name('pocname'));
var pocEmailInput = element(by.name('pocemail'));
var pocPhoneInput = element(by.name('pocphone'));
var billingEmailInput = element(by.name('billingEmailAddress'));
var billingAddressInput = element(by.name('billingAddress'));
var billingCityInput = element(by.name('billingCity'));
var billingStateInput = element(by.name('billingState'));
var billingZipInput = element(by.name('billingZip'));
var billingCountryInput = element(by.name('BillingCountry'));
var paymentInformation = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/ul/li[2]/a'));
var accountSettings = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/ul/li[3]/a'));
var linkPaymentAcccount = element(by.buttonText('Link Payment Account'));
var Continue = element(by.buttonText('Continue'));
var close = element(by.xpath('//*[@id="plaid-link-container"]/div/div[1]/div'));
var creditCard = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[2]/nb-card/nb-card-body/nb-tabset/ul/li[1]/a'));
var bankAccount = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[2]/nb-card/nb-card-body/nb-tabset/ul/li[2]/a'));
var invoiceMe = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[2]/nb-card/nb-card-body/nb-tabset/ul/li[3]/a'));
var iorganizationNameInput = element(by.name('accuntname'));
var iprimaryContactInput = element(by.name('inputshippingName'));
var ideliveryAddressInput = element(by.name('shippingAddress'));
var ideliveryCityInput = element(by.name('shippingCity'));
var ideliveryStateInput = element(by.name('shippingState'));
var ideliveryZipInput = element(by.name('shippingZip'));
var icontactPhone = element(by.name('shippingpocphone'));
var icontactEmail = element(by.name('shippingEmailAddress'));
var cancelInvioceme = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[2]/nb-card/nb-card-body/nb-tabset/nb-tab[3]/nb-card/nb-card-body/div[7]/div/div/div[2]/button[1]'));
var changeAvatarSmall = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[3]/nb-card/nb-card-body/div[2]/div/div/div[2]/ul[1]/li/input'));
var changeAvatarMedium = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[3]/nb-card/nb-card-body/div[2]/div/div/div[2]/ul[2]/li/input'));
var changeAvatarLarge = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-form-layouts/nb-card/nb-card-body/form/div/div/nb-tabset/nb-tab[3]/nb-card/nb-card-body/div[2]/div/div/div[2]/ul[3]/li/input'));

this.getnameOfAccount = async function() {
return await BrowserACtions.getElementText(nameOfAccount, 'retrieved name of account');
};
this.getnameOfAdminUrl = async function() {
return await BrowserACtions.getElementText(nameOfAdminUrl, 'retrieved name of admin url');
};
this.getnameOfPrimaryPOC = async function() {
return await BrowserACtions.getElementText(nameOfPrimaryPOC, 'retrieved name of primary poc');
};
this.getemailOfPrimaryPOC = async function() {
return await BrowserACtions.getElementText(emailOfPrimaryPOC, 'retrieved email of primary poc');
};
this.getphoneOfPrimaryPOC = async function() {
return await BrowserACtions.getElementText(phoneOfPrimaryPOC, 'retrieved phone of primary poc');
};
this.getbillingEmailAddress = async function() {
//return await manageAdministartorsTitle.getText();
return await BrowserACtions.getElementText(billingEmailAddress, 'retrieved billing email address');
};
this.getbillingAddress = async function() {
return await BrowserACtions.getElementText(billingAddress, 'retrieved billing address');
};
this.getbillingCity = async function() {
return await BrowserACtions.getElementText(billingCity, 'retrieved billing city');
};
this.getbillingState = async function() {
return await BrowserACtions.getElementText(billingState, 'retrieved billing state');
};
this.getbillingPostalCode = async function() {
return await BrowserACtions.getElementText(billingPostalCode, 'retrieved billing postal code');
};
this.getbillingCountry = async function() {
return await BrowserACtions.getElementText(billingCountry, 'retrieved billing country');
};
this.getNameOfCurrentBillingProfile = async function() {
return await BrowserACtions.getElementText(nameOfCurrentBillingProfile, 'retrieved current billing profile');
};
this.getNameOfCurrentDefaultPay = async function() {
return await BrowserACtions.getElementText(nameOfCurrentDefaultPay, 'retrieved current default pay');
};
this.enteredCreditCardNo= async function() {
await BrowserACtions.type(enterCreditCardNo, number, 'entered credit card number');
browser.sleep(5000);
};
this.clickEditManageAccount = async function(){
await BrowserACtions.clickOn(editManageAccount, 'clicked edit manage accounts ');
};
this.clickSave = async function(){
await BrowserACtions.clickOn(save,'saved');
};
this.clickCancel = async function(){
await BrowserACtions.clickOn(cancel,'cancelled save');
};
this.clickCancelAccountSetting = async function(){
await BrowserACtions.clickOn(cancelAccountSetting,'cancelled save');
};
this.clickReset = async function(){
await BrowserACtions.clickOn(reset,'Reset avatar');
};
this.clickPaymentInformation = async function(){
await BrowserACtions.clickOn(paymentInformation,'clicked payment information');
};
this.clickAccountSettings = async function(){
await BrowserACtions.clickOn(accountSettings,'clicked account settings');
};
this.clickaddAsPaymentButton = async function(){
 await BrowserACtions.clickOn(addAsPaymentButton,'added payment');
};
this.clickCreditCardButton = async function(){
await BrowserACtions.clickOn(creditCard,'choosed credit card option');
};
this.clickBankAccountButton = async function(){
await BrowserACtions.clickOn(bankAccount,'choosed bank account option');
};
this.clickInvoicemeButton = async function(){
await BrowserACtions.clickOn(invoiceMe,'choosed invoice me option');
};
this.clickChangeAvatarSmall = async function(){
await BrowserACtions.clickOn(changeAvatarSmall,'selected small');
};
this.clickChangeAvatarMedium = async function(){
await BrowserACtions.clickOn(changeAvatarMedium,'selected medium');
};
this.clickChangeAvatarLarge = async function(){
await BrowserACtions.clickOn(changeAvatarLarge,'selected large');
};
this.enteraccountNameInput = async function(name){
await BrowserACtions.type(accountNameInput,name,'edited account name');
};
this.enterpocNameInput = async function(pname){
await BrowserACtions.type(pocNameInput,pname,'edited poc name');
};
this.enterpocEmailInput= async function(pemail){
await BrowserACtions.type(pocEmailInput,pemail,'edited poc email');
};
this.enterpocPhoneInput = async function(pocphone){
await BrowserACtions.type(pocPhoneInput,pocphone,'edited poc phone');
};
this.enterbillingEmailInput = async function(bemail){
await BrowserACtions.type(billingEmailInput,bemail,'edited billing email');
};
this.enterbillingAddressInput = async function(baddress){
await BrowserACtions.type(billingAddressInput,baddress,'edited billing address');
};
this.enterbilingCityInput = async function(bcity){
await BrowserACtions.type(billingCityInput,bcity,'edited billing state');
};
this.enterbillingStateInput = async function(bstate){
await BrowserACtions.type(billingStateInput,bstate,'edited billing state');
};
this.enterbillingZipInput = async function(bzip){
await BrowserACtions.type(billingZipInput,bzip,'edited billing zipcode');
};
/*this.enterbillingCountryInput = async function(bcountry){
    await BrowserACtions.type(billingCountryInput,bcountry,'edited billing country');
};*/
this.enterIorganizationNameInput = async function(name){
await BrowserACtions.type(iorganizationNameInput,name,'invoice account name');
};
this.enterIprimaryContactInput = async function(name){
await BrowserACtions.type(iprimaryContactInput,name,'invoice primary contact');
};
this.enterIdeliveryAddressInput = async function(name){
await BrowserACtions.type(ideliveryAddressInput,name,'invoice delivery address');
};
this.enterIdeliveryCityInput = async function(name){
await BrowserACtions.type(ideliveryCityInput,name,'invoice delivery city');
};
this.enterIdeliveryStateInput = async function(name){
await BrowserACtions.type(ideliveryStateInput,name,'invoice delivery state');
};
this.enterIdeliveryZipInput = async function(name){
await BrowserACtions.type(ideliveryZipInput,name,'invoice delivery zip');
};
this.enterIcontactPhone = async function(name){
await BrowserACtions.type(icontactPhone,name,'invoice contact phone');
};
this.enterIcontactEmail = async function(name){
await BrowserACtions.type(icontactEmail,name,'invoice contact email');
};
this.clickCancelInvioceme = async function(){
await BrowserACtions.clickOn(cancelInvioceme,'cancelled invoice');
};
this.clickLinkPaymentAcccount = async function(){
await BrowserACtions.clickOn(linkPaymentAcccount,'clicked link payment');
};
this.clickContinue = async function(){
await BrowserACtions.clickOn(Continue,'clicked continue');
};
this.clickClose = async function(){
await BrowserACtions.clickOn(close,'clicked close');
}
this.clickManageAccount = async function(){
await BrowserACtions.clickOn(manageAccount,'clicked accounts');
}
}
module.exports = new ManageAccount();


  

