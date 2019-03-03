var actions = require("./Actions.js");
var ManageSaasAdministartors= function(){ 
let Status;
var manageSaasAdministartors = element(by.css('[href="#/pages/saas-admin/manage-saasusers"]'));
var manageSaasAdministartorTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
var addSaasAdmin = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
var addSaasAdminText = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));                                     
var saasAdminFirstName = element(by.name('inputFirstName'));
var saasAdminLastName = element(by.name('inputLastName'));
var saasAdminEmail = element(by.name('inputemail'));
var saasAdminPhone = element(by.name('inputphoneNumber'));
var save = element(by.buttonText('Save'));
var cancel = element(by.buttonText('Cancel'));
var adminAddMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var closeAddSaasAdmin = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var dropDown = element(by.xpath('//*[@id="sutable_length"]/label/select'));
var searchText = element(by.xpath('//*[@id="sutable_filter"]/label/input'));
var sortFields = element(by.xpath('//*[@id="sutable"]/thead/tr/th[1]'));
var previousSaasAdminPage = element(by.id('sutable_previous'));
var nextSaasAdminPage = element(by.id('sutable_next'));
var saasAdmindetails = element(by.id('saasusersdetailsBtn'));
var editSaasAdminTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var saasAdminDelete = element(by.id('saasusersdeleteBtn'));
var editSaasAdminFirstName = element(by.name('inputFirstName'));
var editSaasAdminLastName = element(by.name('inputLastName'));
var editSaasAdminPhone = element(by.name('inputphoneNumber'));
var editAdminRecMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var updateSaasDetails = element(by.buttonText('Update'));
var updateClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
var deleteClose = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]/button/i'));
var deleteMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
var confirmDelete = element(by.buttonText('Delete'));
var labelFirstName = element(by.xpath('//*[@id="sutable"]/thead/tr/th[1]'));
var labelLastName = element(by.xpath('//*[@id="sutable"]/thead/tr/th[2]'));
var labelEmail = element(by.xpath('//*[@id="sutable"]/thead/tr/th[3]'));
var labelPhoneNumber = element(by.xpath('//*[@id="sutable"]/thead/tr/th[4]'));
var labelDetails = element(by.xpath('//*[@id="sutable"]/thead/tr/th[5]'));
var labelDelete = element(by.xpath('//*[@id="sutable"]/thead/tr/th[6]'));
var labelSearch = element(by.xpath('//*[@id="sutable_filter"]/label'));
var labelPrevious = element(by.xpath('//*[@id="sutable_previous"]'));
var labelNext = element(by.xpath('//*[@id="sutable_next"]'));
var labelDetailsHeader = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
var labelFirstNameDetails = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[1]/div/div/label'));
var labelLastNameDetails = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[2]/div/div/label'));
var labelPhone = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[3]/div/div/label'));
var labelCancel = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[4]/div[2]/button[1]'));
var labelUpdate = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[4]/div[2]/button[2]'));
var labelDeleteHeader = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]'));
var labelDeleteButton = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[3]/button[2]'));
this.getManageSaasAdministratorTitle = async function() {
return await actions.getElementText(manageSaasAdministartorTitle, 'retrieved manage saas admin title');
};
this.geteditSaasAdminTitle = async function() {
return await actions.getElementText(editSaasAdminTitle, 'retrieved edit saas admin title');
};
this.geteditAdminRecMessage = async function() {
return await actions.getElementText(editAdminRecMessage, 'retrieved message of successfully edited saas admin');
}; 
this.getadminAddMessage = async function() {
return await actions.getElementText(adminAddMessage, 'retrieved message of successfully added saas admin');
};
this.getaddSaasAdminText = async function() {
return await actions.getElementText(addSaasAdminText, 'retrieved header text in add new saas admin');
};
this.getlabelFirstName = async function() {
return await actions.getElementText(labelFirstName, 'retrieved first name label');
};
this.getlabelLastName = async function() {
return await actions.getElementText(labelLastName, 'retrieved last name label');
};
this.getlabelEmail = async function() {
return await actions.getElementText(labelEmail, 'retrieved email label');
};
this.getlabelPhoneNumber = async function() {
return await actions.getElementText(labelPhoneNumber, 'retrieved phone number label');
};
this.getlabelDetails = async function() {
return await actions.getElementText(labelDetails, 'retrieved details label');
};
this.getlabelDelete = async function() {
return await actions.getElementText(labelDelete, 'retrieved delete label');
};
this.getlabelSearch = async function() {
return await actions.getElementText(labelSearch, 'retrieved search label');
};
this.getlabelPrevious = async function() {
return await actions.getElementText(labelPrevious, 'retrieved previous label');
};
this.getlabelNext = async function() {
return await actions.getElementText(labelNext, 'retrieved next label');
};
this.getlabelDetailsHeader = async function() {
return await actions.getElementText(labelDetailsHeader, 'retrieved details header label');
};
this.getlabelFirstNameDetails = async function() {
return await actions.getElementText(labelFirstNameDetails, 'retrieved firstname label from details');
};
this.getlabelLastNameDetails = async function() {
return await actions.getElementText(labelLastNameDetails, 'retrieved lastname label from details');
};
this.getlabelPhone = async function() {
return await actions.getElementText(labelPhone, 'retrieved phone label');
};
this.getlabelCancel = async function() {
return await actions.getElementText(labelCancel, 'retrieved cancel label');
};
this.getlabelUpdate = async function() {
return await actions.getElementText(labelUpdate, 'retrieved update label');
};
this.getlabelDeleteHeader = async function() {
return await actions.getElementText(labelDeleteHeader, 'retrieved delete header label');
};
this.getlabelDeleteButton = async function() {
return await actions.getElementText(labelDeleteButton, 'retrieved delete button label');
};
this.getdeleteMessage = async function() {
return await actions.getElementText(deleteMessage, 'retrieved delete admin message');
};
this.clickManageSaasAdministartors = async function(){
await actions.clickOn(manageSaasAdministartors,'clicked manage saas admin tab');
};
this.clickaddSaasAdmin = async function(){
await actions.clickOn(addSaasAdmin,'clicked add saas admin tab');
};
this.clickSave = async function(){
await actions.clickOn(save,'clicked save button');
};
this.clickCancel = async function(){
Status = await actions.clickOn( cancel,'clicked cancel button');
return Status;
};
this.clickCloseAddSaasAdmin = async function(){
Status = await actions.clickOn(closeAddSaasAdmin,'clicked close saas admin window');
return Status;
};
this.clicksortFields = async function(){
await actions.clickOn(sortFields,'clicked to sort text fields');
};
this.clickpreviousSaasAdminPage = async function(){
Status = await actions.clickOn(previousSaasAdminPage,'clicked to navigate to previous admin page');
return Status;
};
this.clicknextSaasAdminPage = async function(){
Status = await actions.clickOn(nextSaasAdminPage,'clicked to navigate to next saas admin page');
return Status;
};
this.clickSaasAdmindetails = async function(){
await actions.clickOn(saasAdmindetails,'clicked to view saas admin details');
};
this.clicksaasAdminDelete= async function(){
await actions.clickOn(saasAdminDelete,'clicked to delete saas admin');
};
this.clickUpdateSaasDetails= async function(){
await actions.clickOn(updateSaasDetails,'clicked to update saas admin details');
};
this.clickUpdateClose= async function(){
await actions.clickOn(updateClose,'clicked to close saas admin update window');
};
this.clickDeleteClose= async function(){
Status = await actions.clickOn(deleteClose,'clicked to close saas admin delete window');
return Status;
};
this.clickConfirmDelete= async function(){
await actions.clickOn(confirmDelete,'confirm admin deletion');
};
this.inputSaasAdminFirstName= async function(firstname) {
await actions.type(saasAdminFirstName, firstname, 'entered first name');
browser.sleep(5000);
};
this.inputSaasAdminLastName= async function(lastname) {
await actions.type(saasAdminLastName, lastname, 'entered last name');
browser.sleep(5000);
};
this.inputSaasAdminEmail= async function(email) {
await actions.type(saasAdminEmail, email, 'entered saas admin email');
browser.sleep(5000);
};
this.inputSaasAdminPhone= async function(phone) {
await actions.type(saasAdminPhone, phone, 'entered saas admin phone');
browser.sleep(5000);
};
this.inputEditSaasAdminFirstName= async function(firstname) {
await actions.type(editSaasAdminFirstName, firstname, 'entered to edit saas admin first name');
browser.sleep(5000);
};
this.inputEditSaasAdminLastName= async function(lastname) {
await actions.type(editSaasAdminLastName, lastname, 'entered to edit saas admin last name');
browser.sleep(5000);
};
this.inputEditSaasAdminPhone= async function(phone) {
await actions.type(editSaasAdminPhone, phone, 'entered to edit saas admin phone');
browser.sleep(5000);
};
this.dovalidateSorting = async function(){
Status =  await actions.validateSorting('Email');
return Status;

};
this.searchText =async function(){
Status = await actions.performSearchWithColumnValue('First Name');
return Status;
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
module.exports = new ManageSaasAdministartors();

    
    
    

    





