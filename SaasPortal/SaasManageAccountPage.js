var actions = require("./Actions.js");
var ManageSaasAccount= function(){ 
let Status;
var manageSaasAccount = element(by.css('[href="#/pages/saas-admin/manage-account"]'));
var manageAccountTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
var createAccount = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var createAccountClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/i'));
var enterpriseUrlText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[2]/div/div/label[2]/b'));
var dropDown = element(by.xpath('//*[@id="matable_length"]/label/select'));
var accountNameValue = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[1]/div/div/label[2]/b'));
var searchText = element(by.xpath('//*[@id="matable_filter"]/label/input'));
var sortField = element(by.xpath('//*[@id="matable"]/thead/tr/th[1]'));
var viewAdmin = element(by.id('manageacadminBtn'));
var viewDetails = element(by.id('manageacdetailsBtn'));
var viewBilling = element(by.id('manageacbillingBtn'));
var suspendAccount = element(by.id('manageacsuspendBtn'));
var deleteAccount = element(by.id('manageacdeleteBtn'));
var previousAccountPage = element(by.id('matable_previous'));
var nextAccountPage = element(by.id('matable_next'));
var editCustomerAccountTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var editAccountName = element(by.id('accountName'));
var editBillingProfile = element(by.name('accountStatus'));
var supportTier = element(by.name('Support Tiers'));
var editPrimaryPocName = element(by.name('inputPrimaryName'));
var editPrimaryPocEmail = element(by.name('inputPrimaryEmail'));
var editBillingEmailAddress = element(by.name('inputbillingEmail'));
var editPrimaryPocPhone = element(by.name('inputPrimaryPhone'));
var editBillingAddress = element(by.name('BillingAddress1'));
var editBillingCity = element(by.name('BillingCity'));
var editBillingState = element(by.name('BillingState'));
var editBillingPostal = element(by.name('Postal'));
var editBillingCountry = element(by.name('BillingCountry'));
var editAccountMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var invoiceCheck = element(by.name('isActive'));
var save = element(by.buttonText('Save'));
var cancel = element(by.buttonText('Cancel'));
var update = element(by.buttonText('Update'));
var reset = element(by.buttonText('Reset'));
//var delete = element(by.buttonText('Delete'));
var editAccountWindowClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/i'));
var manageAccountBillingTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
var accountNameBilling = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[1]/div/div/label[1]'));
var accountAdminUrlBilling = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/div[1]/div/div/label[1]'));
var accountBillingDropdown = element(by.xpath('//*[@id="mbtable_length"]/label/select'));
var sortBillingFields = element(by.xpath('//*[@id="mbtable"]/thead/tr/th[1]'));
var accountPreviousBillingPage = element(by.id('mbtable_previous'));
var accountNextBillingPage = element(by.id('mbtable_next'));
var accountBillingSearch = element(by.xpath('//*[@id="mbtable_filter"]/label/input'));
var accountBillingSendInvoice = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var accountSuspend = element(by.buttonText('Suspend'));
var accountUnsuspend = element(by.buttonText('Unsuspend'));
var accountSuspendMesssage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var accountUnsuspendMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var suspendInfo = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[2]/div[1]/p'));
var unsuspendInfo = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[2]/div[1]/p'));
var accountSuspendClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
var accountDelete = element(by.buttonText('Delete'));
var accountDeleteClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
var manageAccountAdminTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
var addNewAdmin = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var addNewAdminTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var enterpriseAdminSort = element(by.xpath('//*[@id="catable"]/thead/tr/th[1]'));
var enterpriseAdminSearch = element(by.xpath('//*[@id="catable_filter"]/label/input'));
var enterpriseAdminEdit = element(by.id('editBtn'));
var enterpriseAdminEditTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var editEnterpriseAdminName = element(by.name('adminName'));
var editEnterpriseAdminPhone = element(by.name('inputPhone'));
var enterpriseAdminUpdatedMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var editEnterpriseAdminClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var enterpriseAdminReset = element(by.id('resetBtn'));
var enterpriseAdminResetTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-header/span'));
var generateOtpButton = element(by.buttonText('Generate OTP'));
var otpField = element(by.id('inputOT'));
var enterpriseAdminResetMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var enterpriseAdminResetClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-header/button/span'));
var enterpriseAdminDelete = element(by.id('deleteBtn'));
var enterpriseAdminDeleteTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/span'));
var enterpriseAdminDeleteClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
var enterpriseAdminPreviousPage = element(by.id('catable_previous'));
var enterpriseAdminNextPage = element(by.id('catable_next'));
var createAdminName = element(by.name('adminName'));
var createAdminEmail = element(by.name('adminEmail'));
var createAdminPhone = element(by.id('inputPhone'));
var createAdminClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var editAccountClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/i'));
var recoveryKeyPair = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div[1]/div/nb-card/nb-card-header'));
var labelCreatenewCustomerAccount = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var labelCAccountName = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[1]/div/div/label'));
var labelBillingProfiles = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[3]/div/div/label'));
var labelSupportTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[4]/div/div/label'));
var labelPrimaryPocName = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[5]/div/div/label'));
var labelPrimaryPocEmail = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[6]/div/div/label'));
var labelBillingEmailAddress = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[7]/div/div/label/span'));
var labelPrimaryPocPhone = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[8]/div/div/label'));
var labelBillingAddress = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[9]/div/div/label'));
var labelBillingCity = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[10]/div/div/label'));
var labelBillingState = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[11]/div/div/label'));
var labelBillingZip = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[12]/div/div/label'));
var labelBillingCountry = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[13]/div/div/label'));
var labelSave = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[15]/div[2]/button[2]'));
var labelSearch = element(by.xpath('//*[@id="matable_filter"]/label'));
var labelAccountName = element(by.xpath('//*[@id="matable"]/thead/tr/th[1]'));
var labelStatus = element(by.xpath('//*[@id="matable"]/thead/tr/th[2]'));
var labelAdmin = element(by.xpath('//*[@id="matable"]/thead/tr/th[3]'));
var labelDetails = element(by.xpath('//*[@id="matable"]/thead/tr/th[4]'));
var labelBilling = element(by.xpath('//*[@id="matable"]/thead/tr/th[5]'));
var labelSuspend = element(by.xpath('//*[@id="matable"]/thead/tr/th[6]'));
var labelDelete = element(by.xpath('//*[@id="matable"]/thead/tr/th[7]'));
var labelPrevious = element(by.xpath('//*[@id="matable_previous"]'));
var labelNext = element(by.xpath('//*[@id="matable_next"]'));
var labelAdminName = element(by.xpath('//*[@id="catable"]/thead/tr/th[1]'));
var labelEmail = element(by.xpath('//*[@id="catable"]/thead/tr/th[2]'));
var labelPhoneNumber = element(by.xpath('//*[@id="catable"]/thead/tr/th[3]'));
var labelModified = element(by.xpath('//*[@id="catable"]/thead/tr/th[4]'));
var labelEdit = element(by.xpath('//*[@id="catable"]/thead/tr/th[5]'));
var labelResetLogin = element(by.xpath('//*[@id="catable"]/thead/tr/th[6]'));
//var labelDelete = element(by.xpath('//*[@id="catable"]/thead/tr/th[7]'));
var labelEditAdminHeader = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var labelAdminName1 = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div[1]/div/div/label'));
var labelPhone = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div[2]/div/div/label'));
var labelCancel = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div[3]/div[2]/button[1]'));
var labelUpdate = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div[3]/div[2]/button[2]'));
var labelValidity = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-body/div[1]/div/div/label'));
var labelExpiryDate = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-body/div[2]/div/div/label'));
var labelOtp = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-body/div[3]/div/div/label'));
var labelGenerateOtp = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-body/div[3]/div/div/div/div/button'));
var labelReset = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div/div/nb-card/nb-card-body/div[4]/div/div/div[2]/button[2]'));
var labelDelete1 = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[3]/button[2]'));

var EC = protractor.ExpectedConditions;
this.getmanageAccountTitle = async function() {
return await actions.getElementText(manageAccountTitle, 'retrieved manage saas admin title');
};
this.getmanageAccountBillingTitle = async function() {
return await actions.getElementText(manageAccountBillingTitle, 'retrieved manage saas admin title');
};
this.getmanageAccountAdminTitle = async function() {
return await actions.getElementText(manageAccountAdminTitle, 'retrieved account title from admin page');
};
this.getenterpriseUrlText = async function() {
return await actions.getElementText(enterpriseUrlText, 'retrieved account title from admin page');
};
this.getaccountNameValue = async function() {
return await actions.getElementText(accountNameValue, 'retrieved account name value');
};
this.getaddNewAdminTitle = async function() {
return await actions.getElementText(addNewAdminTitle, 'retrieved account name value');
};
this.getenterpriseAdminEditTitle = async function() {
return await actions.getElementText(enterpriseAdminEditTitle, 'retrieved enterprise admin title');
};
this.getenterpriseAdminUpdatedMessage = async function() {
return await actions.getElementText(enterpriseAdminUpdatedMessage, 'retrieved enterprise admin updated message');
};
this.geteditCustomerAccountTitle = async function() {
return await actions.getElementText(editCustomerAccountTitle, 'retrieved enterprise admin updated message');
};
this.geteditAccountMessage = async function() {
return await actions.getElementText(editAccountMessage, 'retrieved account updated message');
};
this.getenterpriseAdminResetMessage = async function() {
return await actions.getElementText(enterpriseAdminResetMessage, 'retrieved enterprise admin reset message');
};
this.getsuspendInfo = async function() {
return await actions.getElementText(suspendInfo, 'retrieved info related to account suspension');
};
this.getunsuspendInfo = async function() {
return await actions.getElementText(unsuspendInfo, 'retrieved info related to unsuspend an account');
};
this.getrecoveryKeyPair = async function() {
return await actions.getElementText(recoveryKeyPair, 'retrieved saas billing title info');
};
this.getlabelCreatenewCustomerAccount = async function() {
return await actions.getElementText(labelCreatenewCustomerAccount, 'retrieved label of create customer account header');
};
this.getlabelCAccountName = async function() {
return await actions.getElementText(labelCAccountName, 'retrieved label for account name in create');
};
this.getlabelBillingProfiles = async function() {
return await actions.getElementText(labelBillingProfiles, 'retrieved label for billing profile');
};
this.getlabelSupportTier = async function() {
return await actions.getElementText(labelSupportTier, 'retrieved label for support tier');
};
this.getlabelPrimaryPocName = async function() {
return await actions.getElementText(labelPrimaryPocName, 'retrieved label for primary poc');
};
this.getlabelSearch = async function() {
return await actions.getElementText(labelSearch, 'retrieved search label');
};
this.getlabelPrimaryPocEmail = async function() {
return await actions.getElementText(labelPrimaryPocEmail, 'retrieved label for primary poc email');
};
this.getlabelBillingEmailAddress = async function() {
return await actions.getElementText(labelBillingEmailAddress, 'retrieved label for billing address');
};
this.getlabelPrimaryPocPhone = async function() {
return await actions.getElementText(labelPrimaryPocPhone, 'retrieved label for poc phone');
};
this.getlabelBillingAddress = async function() {
return await actions.getElementText(labelBillingAddress, 'retrieved label for billing address');
};
this.getlabelBillingCity = async function() {
return await actions.getElementText(labelBillingCity, 'retrieved label for billing city');
};
this.getlabelBillingState = async function() {
return await actions.getElementText(labelBillingState, 'retrieved label for billing state');
};
this.getlabelBillingZip = async function() {
return await actions.getElementText(labelBillingZip, 'retrieved label for billing zip');
};
this.getlabelBillingCountry = async function() {
return await actions.getElementText(labelBillingCountry, 'retrieved label for billing country');
};
this.getlabelSave = async function() {
return await actions.getElementText(labelSave, 'retrieved label for save');
};
this.getlabelAccountName = async function() {
return await actions.getElementText(labelAccountName, 'retrieved label for account name');
};
this.getlabelStatus = async function() {
return await actions.getElementText(labelStatus, 'retrieved label for status');
};
this.getlabelAdmin = async function() {
return await actions.getElementText(labelAdmin, 'retrieved label for admin');
};
this.getlabelDetails = async function() {
return await actions.getElementText(labelDetails, 'retrieved label for details');
};
this.getlabelSuspend = async function() {
 return await actions.getElementText(labelSuspend, 'retrieved label for suspend');
};
this.getlabelBilling = async function() {
return await actions.getElementText(labelBilling, 'retrieved label for billing');
};
this.getlabelDelete = async function() {
return await actions.getElementText(labelDelete, 'retrieved label for delete');
};
this.getlabelPrevious = async function() {
return await actions.getElementText(labelPrevious, 'retrieved label for previous');
};
this.getlabelNext = async function() {
return await actions.getElementText(labelNext, 'retrieved label for next');
};
this.getlabelAdminName = async function() {
return await actions.getElementText(labelAdminName, 'retrieved label for admin name');
};
this.getlabelEmail = async function() {
return await actions.getElementText(labelEmail, 'retrieved label for email');
};
this.getlabelPhoneNumber = async function() {
return await actions.getElementText(labelPhoneNumber, 'retrieved label for phone number');
};
this.getlabelModified = async function() {
return await actions.getElementText(labelModified, 'retrieved label for modified');
};
this.getlabelEdit = async function() {
return await actions.getElementText(labelEdit, 'retrieved label for edit');
};
this.getlabelResetLogin = async function() {
return await actions.getElementText(labelResetLogin, 'retrieved label for reser login');
};
this.getlabelEditAdminHeader = async function() {
return await actions.getElementText(labelEditAdminHeader, 'retrieved label for edit admin header');
};
this.getlabelAdminName1 = async function() {
return await actions.getElementText(labelAdminName1, 'retrieved label for admin name');
 };
 this.getlabelPhone = async function() {
return await actions.getElementText(labelPhone, 'retrieved label for phone');
};
this.getlabelCancel = async function() {
return await actions.getElementText(labelCancel, 'retrieved label for cancel');
};
this.getlabelUpdate = async function() {
return await actions.getElementText(labelUpdate, 'retrieved label for update');
};
this.getlabelValidity = async function() {
 return await actions.getElementText(labelValidity, 'retrieved label for validity');
};
this.getlabelExpiryDate = async function() {
 return await actions.getElementText(labelExpiryDate, 'retrieved label for expiry date');
};
this.getlabelOtp = async function() {
return await actions.getElementText(labelOtp, 'retrieved label for otp');
};
this.getlabelGenerateOtp = async function() {
return await actions.getElementText(labelGenerateOtp, 'retrieved label for generate otp');
};
this.getlabelReset = async function() {
return await actions.getElementText(labelReset, 'retrieved label for reset');
};
this.getlabelDelete1 = async function() {
return await actions.getElementText(labelDelete1, 'retrieved label for delete1');
};
this.clickmanageSaasAccount = async function(){
await actions.clickOn(manageSaasAccount,'clicked manage saas account tab');
};
this.clickcreateAccount = async function(){
browser.wait(EC.elementToBeClickable(createAccount), 10000);
await actions.clickOn(createAccount,'clicked to create a saas account');
};
this.clickcreateAccountClose = async function(){
await actions.clickOn(createAccountClose,'clicked to close while creating a saas account');
};
this.clickdropDown = async function(){
await actions.clickOn(dropDown,'clicked to select from the dropdown');
};
this.clicksearchText = async function(){
await actions.clickOn(searchText,'clicked to serch the entered text');
};
this.clicksortField = async function(){
await actions.clickOn(sortField,'clicked to sort the text fields');
};
this.clickviewAdmin = async function(){
browser.wait(EC.elementToBeClickable(viewAdmin), 10000);    
Status = await actions.clickOn(viewAdmin,'clicked to view the admin details');
return Status;
};
this.clickviewDetails = async function(){
await actions.clickOn(viewDetails,'clicked to view details');
};
this.clickviewBilling = async function(){
await actions.clickOn(viewBilling,'clicked to view account billing');
};
this.clicksuspendAccount = async function(){
await actions.clickOn(suspendAccount,'clicked to suspend account');
};
this.getaccountSuspendMesssage = async function(){
await actions.clickOn(accountSuspendMesssage,'retreived account suspension message');
};
this.getaccountUnsuspendMessage = async function(){
await actions.clickOn(accountUnsuspendMessage,'retreived account unsuspension');
};
this.clickdeleteAccount = async function(){
await actions.clickOn(deleteAccount,'clicked to delete an account');
};
this.clickpreviousAccountPage = async function(){
Status = await actions.clickOn(previousAccountPage,'clicked to navigate to previous account page');
return Status;
};
this.clicknextAccountPage = async function(){
Status = await actions.clickOn(nextAccountPage,'clicked to navigate to next account page');
return Status;
};
this.clicksupportTier = async function(){
await actions.clickOn(supportTier,'clicked to select a support tier');
};
this.clickeditBillingCountry = async function(){
await actions.clickOn(editBillingCountry,'clicked to edit billing country');
};
this.clickinvoiceCheck = async function(){
await actions.clickOn(invoiceCheck,'clicked to select invoice');
};
this.clickcancel = async function(){
Status = await actions.clickOn(cancel,'clicked cancel');
return Status;
};
this.clickupdate = async function(){
await actions.clickOn(update,'clicked update button');
};
this.clickreset = async function(){
await actions.clickOn(reset,'clicked update button');
};
this.clicksave = async function(){
await actions.clickOn(save,'clicked update button');
};
//this.clicksave = async function(){
//await actions.clickOn(save,'clicked update button');
//};
this.clickeditAccountWindowClose = async function(){
await actions.clickOn(editAccountWindowClose,'clicked to close edit account window');
};
this.clickenterpriseAdminDeleteClose = async function(){
await actions.clickOn(enterpriseAdminDeleteClose,'clicked to close edit account window');
};
this.clickaccountBillingDropdown = async function(){
await actions.clickOn(accountBillingDropdown,'clicked account billing dropdown');
};
this.clicksortBillingFields = async function(){
await actions.clickOn(sortBillingFields,'clicked to sort billing fields');
};
this.clickaccountPreviousBillingPage = async function(){
Status = await actions.clickOn(accountPreviousBillingPage,'clicked to view previous billing page');
return Status;
};
this.clickaccountNextBillingPage = async function(){
Status = await actions.clickOn(accountNextBillingPage,'clicked to view next billing page');
return Status;
};
this.clickaccountBillingSearch = async function(){
await actions.clickOn(accountBillingSearch,'clicked account billing search');
};
this.clickaccountBillingSendInvoice = async function(){
Status = await actions.clickOn(accountBillingSendInvoice,'clicked to send billing invoice');
return Status;
};
this.clickaccountSuspend = async function(){
await actions.clickOn(accountSuspend,'clicked to suspend an account');
};
this.clickaccountUnsuspend = async function(){
await actions.clickOn(accountUnsuspend,'clicked to unsuspend an account');
};
this.clickaccountSuspendClose = async function(){
Status = await actions.clickOn(accountSuspendClose,'clicked to close account suspension');
return Status;
};
this.clickaccountDelete = async function(){
await actions.clickOn(accountDelete,'clicked to delete an account');
};
this.clickaccountDeleteClose = async function(){
Status = await actions.clickOn(accountDeleteClose,'clicked to close account window close');
return Status;
};
this.clickenterpriseAdminSort = async function(){
await actions.clickOn(enterpriseAdminSort,'clicked to sort enterprise admin fields');
};
this.clickenterpriseAdminSearch = async function(){
await actions.clickOn(enterpriseAdminSearch,'clicked to search enterprise admin details');
};
this.clickenterpriseAdminEdit = async function(){
await actions.clickOn(enterpriseAdminEdit,'clicked to edit an enterprise admin');
};
this.clickeditBillingProfile = async function(){
await actions.clickOn(editBillingProfile,'clicked to edit the billing profile');
};
this.clickaddNewAdmin = async function(){
await actions.clickOn(addNewAdmin,'clicked to add a new enterprise admin');
};
this.clickcreateAdminPhone = async function(){
await actions.clickOn(createAdminPhone,'clicked to add an enterprise admin phone');
};
this.clickcreateAdminName = async function(){
await actions.clickOn(createAdminName,'clicked to add an enterprise admin name');
};
this.inputAdminName= async function(name) {
console.log('add admin name');
await actions.type(createAdminName, name, 'entered name');
browser.sleep(5000);
};
this.inputAdminEmail= async function(email) {
console.log('add admin email');
await actions.type(createAdminEmail, email, 'entered email');
browser.sleep(5000);
};
this.inputAdminPhone= async function(phone) {
console.log('add admin phone');
await actions.type(createAdminPhone, phone, 'entered phone no');
browser.sleep(5000);
};
this.clickcreateAdminEmail = async function(){
await actions.clickOn(createAdminEmail,'clicked to add an enterprise admin email');
};
this.clickcreateAdminClose = async function(){
Status = await actions.clickOn(createAdminClose,'clicked to close enterprise admin creation window');
return Status;
};
this.clickeditAccountClose = async function(){
await actions.clickOn(editAccountClose,'clicked to close edit account window');
};
this.getaccountNameBilling = async function() {
return await actions.getElementText(accountNameBilling, 'retrieved account name title from billing icon');
};
this.getaccountAdminUrlBilling = async function() {
return await actions.getElementText(accountAdminUrlBilling, 'retrieved account url title from billing icon');
};
this.inputeditAccountName= async function(accname) {
await actions.type(editAccountName, accname, 'edited account name');
browser.sleep(5000);
};
this.inputeditPrimaryPocName= async function(accname) {
await actions.type(editPrimaryPocName, accname, 'edited poc name');
browser.sleep(5000);
};
this.inputeditPrimaryPocPhone= async function(phone) {
await actions.type(editPrimaryPocPhone, phone, 'edited poc phone');
browser.sleep(5000);
};
this.inputeditPrimaryPocEmail= async function(email) {
await actions.type(editPrimaryPocEmail, email, 'edited poc email');
browser.sleep(5000);
};
this.inputeditBillingEmailAddress= async function(billingemail) {
await actions.type(editBillingEmailAddress, billingemail, 'edited billing email address');
browser.sleep(5000);
};
this.inputeditBillingAddress= async function(billingaddress) {
await actions.type(editBillingAddress, billingaddress, 'edited billing address');
browser.sleep(5000);
};
this.inputeditBillingCity= async function(billingcity) {
await actions.type(editBillingCity, billingcity, 'edited billing city');
browser.sleep(5000);
};
this.inputeditBillingState= async function(billingstate) {
await actions.type(editBillingState, billingstate, 'edited billing state');
browser.sleep(5000);
};
this.inputeditBillingPostal= async function(billingpostal) {
await actions.type(editBillingPostal, billingpostal, 'edited billing postal');
browser.sleep(5000);
};
this.inputeditEnterpriseAdminName= async function(name) {
await actions.type(editEnterpriseAdminName, name, 'edited enterprise admin name');
browser.sleep(5000);
};
this.inputeditEnterpriseAdminPhone= async function(phone) {
await actions.type(editEnterpriseAdminPhone, phone, 'edited enterprise phone');
browser.sleep(5000);
};
this.clickeditEnterpriseAdminClose = async function(){
Status = await actions.clickOn(editEnterpriseAdminClose,'clicked to close enterprise admin window');
return Status;
};
this.clickenterpriseAdminReset = async function(){
browser.wait(EC.elementToBeClickable(enterpriseAdminReset), 10000);
await actions.clickOn(enterpriseAdminReset,'clicked to reset enterprise admin otp');
};
this.clickenterpriseAdminResetClose = async function(){
Status = await actions.clickOn(enterpriseAdminResetClose,'clicked close whlie reset enterprise admin otp');
return Status;
};
this.clickenterpriseAdminDelete = async function(){
await actions.clickOn(enterpriseAdminDelete,'clicked to delete enterprise admin');
};
this.clickenterpriseAdminPreviousPage = async function(){
Status = await actions.clickOn(enterpriseAdminPreviousPage,'clicked to navigate to previous admin page');
return Status;
};
this.clickenterpriseAdminNextPage = async function(){
Status = await actions.clickOn(enterpriseAdminNextPage,'clicked to navigate to next admin page');
return Status;
};
this.clickgenerateOtpButton = async function(){
await actions.clickOn(generateOtpButton,'clicked to generate otp');
};
this.enterSearchText =async function(){
Status = await actions.performSearchWithColumnValue('Account Name');
return Status;
};
this.enterAdminSearchText =async function(){
Status = await actions.performSearchWithColumnValue('Email');
return Status;
};
this.enterBillingSearchText = async function(){
Status = await actions.performSearchWithColumnValue('Billing Date');
return Status;
}
this.dovalidateSorting = async function(){
Status = await actions.validateSorting('Account Name');
return Status;
}
this.dovalidateSortingAdmin = async function(){
Status = await actions.validateSorting('Email');
return Status;
}
this.dovalidateSortingBilling = async function(){
Status = await actions.validateSorting('Billing Date');
return Status;
}
this.getenterpriseAdminResetTitle = async function() {
return await actions.getElementText(enterpriseAdminResetTitle, 'retrieved manage saas admin reset title');
};
this.getenterpriseAdminDeleteTitle = async function() {
return await actions.getElementText(enterpriseAdminDeleteTitle, 'retrieved manage saas admin delete title');
};
this.getotpField = async function() {
return await actions.getElementText(otpField, 'retrieved otp field title');
};
}
module.exports = new ManageSaasAccount();









    


    