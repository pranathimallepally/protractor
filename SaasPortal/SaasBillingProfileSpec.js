var LoginPage = require('./LoginPage.js');
var reusable = require('./SaasReusable.js');
var Excel = require('exceljs');
var AppURL = require('./Env.json');
var saasBillingProfiles = require('./SaasBillingProfilePage');
var expectedResult = require('./expectedresult.json');
var actions = require("./Actions.js");
var actions1 = require("./SaasReusable");

describe('Saas billing profiles :', function(){
/*Login to the saas portal*/
  it('Check login saas portal', async function() {
    await global.browser.manage().window().maximize();
    await browser.get(AppURL.SAASURL);
    await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
    
    try {
      var blogin = await reusable.loginIntoApp("SAAS");
      console.log(blogin);
      if (blogin == true) {

      }else {
        throw "Not able to login";
      }
    }catch (error) {
      console.log("Error while Login ***" + error);
      expect(false).toBe(true);
    }
  });
/*Check navigation to billing profiles and verify the titles*/
  it('As a SaaS Admin, check navigate to billing profiles or not by verifying title', async function() {
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await saasBillingProfiles.clicksaasBilling();
    browser.sleep(3000);
    expect(await saasBillingProfiles.getsaasBillingTitle()).toEqual('Billing Profiles');
    browser.sleep(2000);
    //await saasBillingProfiles.getDataFromExcel();
  });
/*check description on billing profiles page*/
  it('As a SaaS Admin, check the description on Billing profile page ', async function(){
    browser.ignoreSynchronization = true;
    var billingInfo = await saasBillingProfiles.getbillingInfo();
    console.log(billingInfo);
    browser.sleep(3000);
    expect(billingInfo).toEqual(expectedResult.expectedBIllingInfo);
  });
/*check navigation to previous billing profile page*/
  it('As a SaaS Admin, navigate to create new billing profile page', async function(){
    browser.ignoreSynchronization = true;
    await saasBillingProfiles.clickcreateNewBillingProfile();
    browser.sleep(3000);
    var newBillingProfileWindowTitle = await saasBillingProfiles.getNewOrEditBillingWindowTitle();
    newBillingProfileWindowTitle = newBillingProfileWindowTitle.slice('x', -2)
    browser.sleep(3000);
    expect(newBillingProfileWindowTitle).toEqual(expectedResult.expectedCreateNewTierWindowTitle);
  });
/*Create a new billing profile*/
  it('As a SaaS Admin, Able to create a new billing profile', async function(){
    browser.ignoreSynchronization = true;
    // await saasBillingProfiles.newBillingProfileCreation('billingProfileautomation.xlsx','ProfileCreation');
    // browser.sleep(3000);
    await saasBillingProfiles.newBillingProfileName('DataCops');
    browser.sleep(3000);
    await saasBillingProfiles.newBillingFrequency();
    browser.sleep(3000);
    await saasBillingProfiles.saveNewBillcreation();
    browser.sleep(3000);
    var billingProfileCreateMessage = await saasBillingProfiles.checkBillingProfileCreationMessage();
    console.log(billingProfileCreateMessage);
    browser.sleep(3000);
    expect(billingProfileCreateMessage).toEqual(expectedResult.expectedProfileCreationMessage)
    /* need to work on drop down */
  });
/*check selections from the drop down*/
  it('should select from dropdown', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var dropdownElement = element(by.name('mptable_length'));
    var returnValue;
    var selectDropdownbyNum =  function ( element, optionNum ){
      if (optionNum){
      var options =  element.all(by.tagName('option')).then(function(options){
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
    selectDropdownbyNum(dropdownElement,1);
  });
/*check creating a new billing profile with invalid data*/
  it('As a SaaS Admin, able to create a new billing profile with invalid data ', async function(){
    await saasBillingProfiles.clickcreateNewBillingProfile();
    browser.sleep(2000);
    browser.ignoreSynchronization = true;
    await saasBillingProfiles.newBillingProfileName('DataCops');
    browser.sleep(3000);
    await saasBillingProfiles.newBillingFrequency();
    browser.sleep(3000);
    await saasBillingProfiles.saveNewBillcreation();
    browser.sleep(3000);
    expect(await saasBillingProfiles.getErrorMessageProfileCreation()).toEqual(expectedResult.expectedProfileCreationErrorMessage)
    await saasBillingProfiles.cancelProfileCreation();
    browser.sleep(4000);
    /* need to work on drop down */
  });
/*check editing billing profile information*/
  it('As a SaaS Admin, Verify editing billing profile information', async function(){
    var profileName = 'DataCops';
    await saasBillingProfiles.clicksaasBilling();
    browser.sleep(2000);
    await saasBillingProfiles.inputsearchText(profileName);
    browser.sleep(3000);
    await saasBillingProfiles.clickbillingDetails();
    browser.sleep(3000);
    var editBillingProfileWindowTitle = (await saasBillingProfiles.getNewOrEditBillingWindowTitle()).slice('x', -2);
    browser.sleep(3000);
    expect(editBillingProfileWindowTitle).toEqual(expectedResult.expectedEditTierWindowTitle);
    browser.sleep(2000);
    await saasBillingProfiles.newBillingProfileName('securebridge');
    await saasBillingProfiles.updateProfile();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getUpdateMessge()).toEqual(expectedResult.expectedProfileUpdateMessage); 
  });
/*check cancelling edit billing tier information*/
  it('As a SaaS Admin, Verify cancel in edit billing tier information', async function(){
    var profileName = 'securebridge';
    await saasBillingProfiles.clicksaasBilling();
    browser.sleep(2000);
    await saasBillingProfiles.inputsearchText(profileName);
    browser.sleep(3000);
    await saasBillingProfiles.clickbillingDetails();
    browser.sleep(3000);
    await saasBillingProfiles.cancelProfileCreation();
    browser.sleep(2000);
    //expect(await saasBillingProfiles.getUpdateMessge()).toEqual(expectedResult.expectedProfileUpdateMessage);  
  });
/*check support ticket table*/
  it('Verify Support Ticket Table ',async function(){ 

    await saasBillingProfiles.emptyInputText();
    browser.sleep(2000);
    var sorted = [],unSorted = [], sortingDataFromUI = [], reverseSort = [];
    var headerRows = element.all(by.xpath('//*[@id="mptable"]/thead')).all(by.tagName('tr'));
    var headerIndex = headerRows.all(by.tagName('th'));
    var countHeader = await headerIndex.count();
    console.log('total number of rows : ' +countHeader);
    var ticketTableData = element.all(by.xpath('//*[@id="mptable"]/tbody/tr'));
    var ticketData = ticketTableData.all(by.tagName('td'));
    var rowCount = await ticketTableData.count();
    var rowText = await ticketTableData.getText();
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!  :' +rowCount);

    unSorted = await reusable.getDataFromTicketTable();
    /* verifying descending order sortig of suport ticket table*/ 

    reverseSort = unSorted.reverse();
    console.log(sorted);
    await actions.clickOn(element(by.xpath('//*[@id="mptable"]/thead/tr/th['+ 1 +']')),'click on column');
    browser.sleep(5000);
    sortingDataFromUI = await reusable.getDataFromTicketTable();
    console.log(reverseSort);
    console.log(sortingDataFromUI);
    await expect(reverseSort).toEqual(sortingDataFromUI);

    /* verifying ascending order sortig of suport ticket table*/ 

    
    console.log('unsorted array :'+unSorted);
    sorted = unSorted.sort();
    console.log('sorted array  : ' +sorted);
    await actions.clickOn(element(by.xpath('//*[@id="mptable"]/thead/tr/th['+ 1 +']')),'click on column');
    browser.sleep(5000);
    sortingDataFromUI = await reusable.getDataFromTicketTable();
    console.log(sorted);
    console.log(sortingDataFromUI);
    await expect(sorted).toEqual(sortingDataFromUI);
  });

/*check new billing tier creation page opening*/
  it('As a SaaS Admin, Able to open create new billing tier page', async function(){
    var profileName = 'securebridge';
    await saasBillingProfiles.newTierCreation(profileName);
    browser.sleep(3000);
    var billingTierTille = expectedResult.expectedBillingTierTitile + ' ' +profileName;
    console.log(billingTierTille);
    expect(await saasBillingProfiles.billingTierTitle()).toEqual(billingTierTille);
  });
/*check dropdown selections*/
  it('should select from dropdown', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    var dropdownElement = element(by.name('mbttable_length'));
    var returnValue;
    var selectDropdownbyNum =  function ( element, optionNum ){
      if (optionNum){
      var options =  element.all(by.tagName('option')).then(function(options){
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
    selectDropdownbyNum(dropdownElement,1);
  });
/*check new billing tier creation*/
  it('As a SaaS Admin, Able to create new billing tier ', async function(){
    await saasBillingProfiles.clickCreateNewTier();
    browser.sleep(2000);
    await saasBillingProfiles.enterUpperTierupperLimit(20);
    browser.sleep(2000);
    await saasBillingProfiles.enterTierCost(200);
    browser.sleep(2000);
    await saasBillingProfiles.saveNewBillcreation();
    browser.sleep(3000);
    await saasBillingProfiles.getTierCreationMessage();
    expect(await saasBillingProfiles.getTierCreationMessage()).toEqual(expectedResult.expectedBillingTierCreationSuccessMessage);
  });
/*check billing tier creation with invalid data and cancel creating a billing tier*/
  it('As a SaaS Admin, Able to create new billing tier with invalid detail and click cancel ', async function(){
    await saasBillingProfiles.clickCreateNewTier();
    browser.sleep(2000);
    await saasBillingProfiles.enterUpperTierupperLimit(10);
    browser.sleep(2000);
    await saasBillingProfiles.enterTierCost(200);
    browser.sleep(2000);
    await saasBillingProfiles.saveNewBillcreation();
    browser.sleep(3000);
    expect(await saasBillingProfiles.getTierCreationFailureMessage()).toEqual(expectedResult.expectedBillingTierFailureMessage);
    browser.sleep(3000);
    await saasBillingProfiles.cancelProfileCreation();
    browser.sleep(2000);
  });
/*check edit billing tier*/
  it('As a SaaS Admin, Able to Edit billing tier', async function(){
    await saasBillingProfiles.editBillingTier();
    browser.sleep(2000);
    await saasBillingProfiles.enterTierCost(100);
    browser.sleep(2000);
    await saasBillingProfiles.updateProfile();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getTierCreationMessage()).toEqual(expectedResult.expectedBIllingTierUpdateMessage);
  });
/*check cancel editing billing tier and deleting a billing tier*/
  it('As a SaaS Admin, Able to cancel editing and delete billing tier', async function(){
    await saasBillingProfiles.editBillingTier();
    browser.sleep(2000);
    await saasBillingProfiles.enterTierCost(100);
    browser.sleep(2000);
    await saasBillingProfiles.cancelProfileCreation();
    browser.sleep();
    await saasBillingProfiles.tierDeletion();
    browser.sleep(3000);
    await saasBillingProfiles.deleteProfile();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getTierCreationMessage()).toEqual(expectedResult.expectedBIllingTierDeleteMessage); 
  });
/*check deleting a billing profile*/
  it('As a SaaS Admin, Able to delete billing profile', async function(){
    var profileName = 'securebridge';
    await saasBillingProfiles.clicksaasBilling();
    browser.sleep(2000);
    await saasBillingProfiles.inputsearchText(profileName);
    browser.sleep(3000);
    await saasBillingProfiles.clickdeleteBilling();
    browser.sleep(2000);
    await saasBillingProfiles.deleteProfile();
    browser.sleep(3000);
    expect(await saasBillingProfiles.getBillingProfileDeletionMessage()).toEqual(expectedResult.expectedProfileDeletionMesage);
  });

  /* verify sorting sorting of the support tickt table  */
  it('should edit billing profile', async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(3000);
    await saasBillingProfiles.clickbillingDetails();
    browser.sleep(1000);
    var wrkbook = new Excel.Workbook();
    wrkbook.xlsx.readFile('SaasDetails.xlsx').then(async function() { 
      var worksheet = wrkbook.getWorksheet('AdminDetails');
      element(by.name('inputFirstName')).click().clear().sendKeys(worksheet.getCell('A1').value);
      browser.sleep(3000);
      element(by.name('inputLastName')).click().clear().sendKeys(worksheet.getCell('A2').value);
      browser.sleep(3000);
      element(by.name('inputphoneNumber')).click().clear().sendKeys(worksheet.getCell('A3').value);
      browser.sleep(3000);
      element(by.buttonText('Update')).click();
      browser.sleep(3000);
    });
  });
  /*Verify the labels*/
  it('should verify the labels',async function(){
    browser.ignoreSynchronization = true;
    browser.sleep(2000);
    await saasBillingProfiles.clickcreateNewBillingProfile();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelBillingProfileName()).toEqual(expectedResult.exlabelBillingProfileName);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelFrequency()).toEqual(expectedResult.exlabelFrequency);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelCancel()).toEqual(expectedResult.exlabelCancel);
    browser.sleep(2000);
    //expect(await saasBillingProfiles.getlabelSave()).toEqual(expectedResult.exlabelSave);
    //browser.sleep(2000);
    await saasBillingProfiles.cancelProfileCreation();
    browser.sleep(4000);
    expect(await saasBillingProfiles.getlabelBillingProfileName1()).toEqual(expectedResult.exlabelBillingProfileName1);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelFrequency1()).toEqual(expectedResult.exlabelFrequency1);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelDetails()).toEqual(expectedResult.exlabelDetails);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelBillingTiers()).toEqual(expectedResult.exlabelBillingTiers);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelSearch()).toEqual(expectedResult.exlabelSearch);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelPrevious()).toEqual(expectedResult.exlabelPrevious);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelNext()).toEqual(expectedResult.exlabelNext);
    browser.sleep(2000);
   /* await saasBillingProfiles.clickbillingTier();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelBillingTierName()).toEqual(expectedResult.exlabelBillingTierName);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelUserLowerLimit()).toEqual(expectedResult.exlabelUserLowerLimit);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelUserUpperLimit()).toEqual(expectedResult.exlabelUserUpperLimit);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelCostPerUser()).toEqual(expectedResult.exlabelCostPerUser);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelDetails1()).toEqual(expectedResult.exlabelDetails1);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelDelete1()).toEqual(expectedResult.exlabelDelete1);
    browser.sleep(2000);
    await saasBillingProfiles.editBillingTier();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelEditBillingTier()).toEqual(expectedResult.exlabelEditBillingTier);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelUserCost()).toEqual(expectedResult.exlabelUserCost);
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelUpdate()).toEqual(expectedResult.exlabelUpdate);
    browser.sleep(2000);
    await saasBillingProfiles.tierDeletion();
    browser.sleep(2000);
    expect(await saasBillingProfiles.getlabelDeleteBillingTier()).toEqual(expectedResult.exlabelDeleteBillingTier);
    browser.sleep(2000);*/
    
    //expect(await saasBillingProfiles.getlabelCreateBillingTier()).toEqual(expectedResult.exlabelCreateBillingTier);
    //browser.sleep(2000);
})

  /*it('should cancel editing administrator', async function(){
      await managesaasadministrators.clickSaasAdmindetails();
      await managesaasadministrators.clickCancel();
      browser.sleep(5000);
    });*/
})