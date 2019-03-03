var actions = require("./Actions.js");
var saasResuable = require("./SaasReusable.js");


function selectDropdown(element, optionNum) {
    console.log('inside selectDropDownbyNum');
    browser.sleep(3000);      
    if (optionNum) {
        console.log('inside IF Loop');
        element.all(by.tagName('option')).then(function(options) {
            console.log('promice cleared');
            console.log(optionNum);
            browser.sleep('5000');
            var selectText = options[optionNum].getText();
            console.log(selectText);
            options[optionNum].click();
            console.log('Desired value selected');
        });
    }else{
        console.log('Invalid index');
    }
}

var ManageSaasBilling = function(){ 
    
    var saasBilling  = element(by.css('[href="#/pages/saas-admin/manage-billingprofiles"]'));
    var saasBillingTitle = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2'));
    var createNewBillingProfile = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
    var billingInfo = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]/p'));
    var dropDown = element(by.xpath('//*[@id="mptable_length"]/label/select'));
    var searchText = element(by.xpath('//*[@id="mptable_filter"]/label/input'));
    var sortFields = element(by.xpath('//*[@id="mptable"]/thead/tr/th[1]'));
    var billingDetails = element(by.id('mbpdetailsBtn'));
    var billingProfileNameEntry = element(by.name('inputBillingProfileNameName'));
    var billingFrequency = element(by.name('accountStatus'));
    //var billingFrequency = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[2]/div/div/div/select'));
    var cancel = element(by.buttonText('Cancel'));
    var update = element(by.buttonText('Update'));
    var saveButton = element(by.buttonText('Save'));
    var deleteButton = element(by.buttonText('Delete'));
    var createNewOrEditBillingProfileWindowTItle = by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header');
    var editBillingProfile = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
    var closeEditBillingProfile = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header/button/span'));
    var billingTier = element(by.id('mbpbillingBtn'));
    var createNewBiilingTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'));
    var billingTierDropdown = element(by.xpath('//*[@id="mbttable_length"]/label/select'));
    var billingTierSort = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[1]'));
    var billingTierSearch = element(by.xpath('//*[@id="mbttable_filter"]/label/input'));
    var billingTierPreviousPage = element(by.id('mbttable_previous'));
    var billingTierNextPage = element(by.id('mbttable_next'));
    var deleteBilling = element(by.id('mbpdeleteBtn'));
    var previousBillingPage = element(by.id('mptable_previous'));
    var nextBillingPage = element(by.id('mptable_next'));
    var editBillingTierDetails = element(by.id('mbtdetailsBtn'));
    var profileErrorMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div[1]'));
    var profileCreateOrDeleteOrEditMaessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]'));
    var createNewTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a'))
    var tierUpperLimit = element(by.name('inputLastName'));
    var tierCost = element(by.name('inputUserCost'));
    var deletTier = element(by.id('mbtdeleteBtn'));
    var tierFailureMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div[1]'));
    var tierCreationMessage = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[1]'));
    var labelBillingProfileName = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[1]/div/div/label'));
    var labelFrequency = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[2]/div/div/label'));
    var labelCancel = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[3]/div[2]/button[1]'));
    var labelSave = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[3]/div[2]/button[2]'));
    var labelBillingProfileName1 = element(by.xpath('//*[@id="mptable"]/thead/tr/th[1]'));
    var labelFrequency1 = element(by.xpath('//*[@id="mptable"]/thead/tr/th[2]'));
    var labelDetails = element(by.xpath('//*[@id="mptable"]/thead/tr/th[3]'));
    var labelBillingTiers = element(by.xpath('//*[@id="mptable"]/thead/tr/th[4]'));
    var labelDelete = element(by.xpath('//*[@id="mptable"]/thead/tr/th[5]'));
    var labelSearch = element(by.xpath('//*[@id="mptable_filter"]/label'));
    var labelPrevious = element(by.xpath('//*[@id="mptable_previous"]'));
    var labelNext = element(by.xpath('//*[@id="mptable_next"]'));
    var labelBillingTierName = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[1]'));
    var labelUserLowerLimit = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[2]'));
    var labelUserUpperLimit = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[3]'));
    var labelCostPerUser = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[4]'));
    var labelDetails1 = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[5]'));
    var labelDelete1 = element(by.xpath('//*[@id="mbttable"]/thead/tr/th[6]'));
    var labelEditBillingTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
    var labelUserCost = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[1]/div/div/label'));
    var labelUpdate = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-body/div/div/div[2]/div[2]/button[2]'));
    var labelDeleteBillingTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/div[1]'));
    var labelCreateBillingTier = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/ngb-modal-window/div/div/ngx-modal/form/div/div/nb-card/nb-card-header'));
    
    this.getsaasBillingTitle = async function() {
        return await actions.getElementText(saasBillingTitle, 'retrieved saas billing title info');
    };

    this.getbillingInfo = async function() {
        return await actions.getElementText(billingInfo, 'retrieved billing information');
    };

    this.clicksaasBilling = async function(){
        await actions.clickOn(saasBilling,'clicked to navigate to saas billing');
    };
    this.getlabelBillingProfileName = async function(){
       return await actions.getElementText(labelBillingProfileName,'retreived label of billing profile');
    };
    this.getlabelFrequency = async function(){
        return await actions.getElementText(labelFrequency,'retreived label of frequency');
    };
    this.getlabelCancel = async function(){
        return await actions.getElementText(labelCancel,'retreived label of cancel');
    };
    this.getlabelSave = async function(){
        return await actions.getElementText(labelSave,'retreived label of save');
    };
    this.getlabelBillingProfileName1 = async function(){
        return await actions.getElementText(labelBillingProfileName1,'retreived label of billing profile');
    };
    this.getlabelFrequency1 = async function(){
        return await actions.getElementText(labelFrequency1,'retreived label for frequency');
    };
    this.getlabelDetails = async function(){
        return await actions.getElementText(labelDetails,'reteived label for details');
    };
    this.getlabelBillingTiers = async function(){
        return await actions.getElementText(labelBillingTiers,'retreived label of billing tier');
    };
    this.getlabelDelete = async function(){
        return await actions.getElementText(labelDelete,'retreived label of delete');
    };
    this.getlabelSearch = async function(){
        return await actions.getElementText(labelSearch,'retrieved label of search');
    };
    this.getlabelPrevious = async function(){
        return await actions.getElementText(labelPrevious,'reteived label of previous');
    };
    this.getlabelNext = async function(){
        return await actions.getElementText(labelNext,'reteived label of next');
    };
    this.getlabelBillingTierName = async function(){
        return await actions.getElementText(labelBillingTierName,'reteived label of billing tier name');
    };
    this.getlabelUserLowerLimit = async function(){
        return await actions.getElementText(labelUserLowerLimit,'retreived label of user lower limit');
    };
    this.getlabelUserUpperLimit = async function(){
        return await actions.getElementText(labelUserUpperLimit,'reteived label of user upper limit');
    };
    this.getlabelCostPerUser = async function(){
        return await actions.getElementText(labelCostPerUser,'retreived label of cost per user');
    };
    this.getlabelDetails1 = async function(){
        return await actions.getElementText(labelDetails1,'retreived label of details1');
    };
    this.getlabelDelete1 = async function(){
        return await actions.getElementText(labelDelete1,'retreived label of delete1');
    };
    this.getlabelEditBillingTier = async function(){
        return await actions.getElementText(labelEditBillingTier,'retreived label of edit billing tier');
    };
    this.getlabelUserCost = async function(){
        return await actions.getElementText(labelUserCost,'retreived label of user cost');
    };
    this.getlabelUpdate = async function(){
        return await actions.getElementText(labelUpdate,'retreived label of update');
    };
    this.getlabelDeleteBillingTier = async function(){
        return await actions.getElementText(labelDeleteBillingTier,'retreived label of delete billing tier');
    };
    this.getlabelCreateBillingTier = async function(){
        return await actions.getElementText(labelCreateBillingTier,'retreived label of create billing tier');
    }

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

    this.inputsearchText= async function(text) {
        await actions.type(searchText, text, 'entered text to search');
        browser.sleep(5000);
    };

    this.getNewOrEditBillingWindowTitle = async function(){
        return await actions.getElementText(element(createNewOrEditBillingProfileWindowTItle),'get the title from create new billing window');
    };

    this.getErrorMessageProfileCreation = async function(){
        return await actions.getElementText(profileErrorMessage,'Get Error Message');
    };

    this.newBillingProfileName = async function(billingName) {
        await actions.type(billingProfileNameEntry, billingName, 'entered to edit billing profile name');
        browser.sleep(3000);
    };

    this.newBillingProfileCreation = async function(filePath,sheetName){
        await actions1.getDataFromExcel(filePath,sheetName,billingProfileNameEntry);
    }

    this.newBillingFrequency = async function(){
        billingFrequency.click();
        //selectDropdown(billingFrequency,1);   
    };

    this.saveNewBillcreation = async function(){
        await actions.clickOn(saveButton,'Save new Tier');
    };

    this.checkBillingProfileCreationMessage = async function(){
        return await actions.getElementText(profileCreateOrDeleteOrEditMaessage,'check profile creation message');
    }

    this.getBillingProfileDeletionMessage = async function(){
        return await actions.getElementText(profileCreateOrDeleteOrEditMaessage,'Check profile deletion message');
    }

    this.inputEditUserCost= async function(text) {
    await actions.type(editUserCost, text, 'entered to edit the user cost in the billing tier');
    browser.sleep(5000);
    };

    this.newTierCreation = async function(text){
        await actions.type(searchText, text, 'entered text to search');
        browser.sleep(3000);
        await actions.clickOn(billingTier,'open new billing tier creation padge');
    };

    this.billingTierTitle = async function(){
        return await actions.getElementText(saasBillingTitle,'Get Billing Tier title');
    };

    this.deleteProfile = async function(){
        await actions.clickOn(deleteButton,'Delete billing Profile');
    };

    this.cancelProfileCreation =async function(){
        await actions.clickOn(cancel,'Cancel profile creation');
    };

    this.updateProfile = async function(){
        await actions.clickOn(update,'Update billing profile');
    };

    this.getUpdateMessge = async function(){
        return await actions.getElementText(profileCreateOrDeleteOrEditMaessage,'Get update text');
    };

    this.clickCreateNewTier = async function(){
        await actions.clickOn(createNewTier,'New tier creation page opened');
    };

    this.enterUpperTierupperLimit = async function(tierLimit){
        await actions.type(tierUpperLimit,tierLimit,'Set Upper Limit');
    };

    this.enterTierCost = async function(cost){
        await actions.type(tierCost,cost,'Set tier cost')
    };

    this.getTierCreationMessage = async function(){
        return await actions.getElementText(tierCreationMessage,'Get Tier Cration Success Message ');
    }; 

    this.getTierCreationFailureMessage = async function(){
        return await actions.getElementText(tierFailureMessage,'Get Tier Cration Failure Message ');
    }; 

    this.editBillingTier = async function(){
        await actions.clickOn(editBillingTierDetails,'Edit billing Tier');
    };

    this.tierDeletion = async function(){
        await actions.clickOn(deletTier,'Select Delete tier');
    }
    
    this.getDataFromExcel = async function(){
        await actions.getDataFromExcel();
    }

    this.emptyInputText = async function(){
        element(by.xpath('//*[@id="mptable_filter"]/label/input')).click().clear();
    };
   
}
module.exports = new ManageSaasBilling();