//var actions = require("./ReusableLib/Actions.js");

describe('angularjs homepage', function() {
  var dtext1;
  it('should greet the named user', async function() 
  {
    
    browser.driver.manage().window().maximize();
    browser.get('https://xyz.dev.pdbenterprise.com');
    //browser.ignoreSynchronization = true;
    browser.sleep(5000);
    element(by.id('input-email')).sendKeys('pdb1200.four@gmail.com');
    browser.sleep(5000);
    element(by.buttonText('Sign In')).click();
    browser.sleep(5000);
    element(by.id('input-password')).sendKeys('Welcome2018!');
    element(by.id('input-otp')).sendKeys('123456');
    browser.sleep(5000);
    element(by.buttonText('Sign In')).click();
    browser.driver.sleep(5000);
   // var nortonlink = element(by.css('[href="#/pages/enterprise-admin/manage-users"]'));
    //nortonlink.click();
    //browser.driver.sleep(10000);
    //var dropdownElement = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select')).element(by.cssContainingText('option', '25'));
    //var dropdownElement = element(by.xpath('[@id="manageusers_length"]/label/select')).element(by.cssContainingText('option', '25'));
    //var length = await element(by.id('manageusers_info')).getText();
    //console.log(length);
    //element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a[1]')).click();
    browser.driver.sleep(10000);
    //element(by.name('inputFirstName')).sendKeys('Joe');
    //element(by.name('inputLastName')).sendKeys('Jones');
    //element(by.name('inputPrimaryEmail')).sendKeys('jj@sci.com');
    //element(by.name('inputPrimaryPhone')).sendKeys('1234567890');
    //element(by.buttonText('Cancel')).click();
    //element(by.buttonText('Save')).click();
    //browser.driver.sleep(10000);
    //element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[2]/a[2]')).click();
    //browser.driver.sleep(10000);
    //element(by.css('[href="https://www.pdbenterprise.com/downloads/TestData/latest/test.csv"]')).click();
    //browser.driver.sleep(10000);
    //element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/nb-sidebar[1]/div/div/nb-menu/ul/li/a/span')).click();
    //browser.driver.sleep(3000);
    //element(by.buttonText('Browse')).click();
    //browser.driver.sleep(3000);
    // set file detector
//var remote = require('../../node_modules/protractor/example/angular_material');
//browser.setFileDetector(new remote.FileDetector());
//var fileToUpload = '../users.xlsx';
//var absolutePath = path.resolve(__dirname, fileToUpload);
//var fileElem = element(by.css('input[type="file"]'));
// Unhide file input
//browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
//fileElem.sendKeys(absolutePath);
//browser.driver.sleep(100);
// click upload button
//element(by.css('button[data-ng-click="uploadFile(file)"]')).click(); // does post request

/*var path = require("path");


       //robot.moveMouse(648, 264) //May need to change based on desktop size
       var uploadPath = path.resolve(__dirname,'../Users.xlsx'); //change to your upload file's path
       //robot.setKeyboardDelay(1000);
       console.log(uploadPath); //for debugging
       //robot.typeString(uploadPath);
       //robot.keyTap("enter");
       browser.sleep(3000);
       var EC = protractor.ExpectedConditions;
       var a=element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[2]/div/input'));
       browser.wait(EC.visibilityOf(a), 20000).then(function(){
        a.clear().then(function(){
            a.sendKeys('1');
        });
        });
       //a.sendKeys('b');
       /*function seta(UID: ){
        //browser.wait(EC.elementToBeClickable(a), 20000).then(function(){
            a.sendKeys(UID);
      });
      }
      seta('abc1234');
      browser.sleep(3000);*/
    await element(by.css('[href="#/pages/enterprise-admin/manage-admin"]')).click();
    browser.sleep(8000); 
     //var t=await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-header/div/div[1]/h2')).getText();
     // await expect(t).toEqual('Manage Administrators for');
      //console.log(t);
    //var testelement= await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select')).click();
    
    
        //await actions.selectByIndexValue(testelement,2,'testmessage');
       // var testelement= await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select')).element(by.cssContainingText('option', '50')).click();
    //browser.sleep(4000);  
    //element(by.name('manageAdmin_length')).element(by.cssContainingText('option', '50')).click();
    //var length = await element(by.id('manageAdmin_info')).getText();
    //console.log(length);
    /*try{
     var tabledata1 = await element.all(by.css("table"));
var tabledata = await element.all(by.id('manageAdmin'));
    // get rows 
     var rows = await tabledata.all(by.tagName("tr"));
    
    // get cell values
     var cells = await rows.all(by.tagName("td"));
    
     await expect(cells.get().getText()).toEqual("1234567890");
    browser.sleep(5000);
    //await expect(cells.get(1).getText()).toEqual("something")
    //await expect(cells.get(2).getText()).toEqual("something")
    console.log(tabledata[0]);
    }
    catch(error)
    {
      console.log("Error");
    }
     /*var ernstTrs =await  element.all(by.tagName('tr')).filter(tr => {
      var tds =  tr.all(by.tagName('td'));
      return tds.get(0).getText().then(text => {
        return text.includes('JD');
      });
    });
    browser.sleep(3000);
    console.log('yes');*/
    //var search = await element(by.xpath('//*[@id="manageAdmin_filter"]/label/input')).sendKeys('JD');

  //var sort = await element(by.xpath('//*[@id="manageAdmin"]/thead/tr/th[1]')).click();
    //browser.sleep(5000);

    var EC = protractor.ExpectedConditions;
//var pdfLink = element(by.xpath('//*[@id="manageAdmin"]/tbody/tr[1]/td[5]/a'));
/*var pdfLink = element(by.id('maeditBtn'));
browser
browser.wait(EC.elementToBeClickable(pdfLink), 5000);  // wait up to 5 seconds

pdfLink.click();
browser.sleep(5000);

element(by.name('adminName')).click().clear().sendKeys('John');
browser.sleep(3000);
element(by.buttonText('Save')).click();
browser.sleep(3000);*/

               
//await element(by.xpath('//*[@id="manageAdmin_filter"]/label/input')).sendKeys('pdb1200.one@gmail.com');
//browser.sleep(30000);
//var table = $$('table tr');
//table.each(function(row) {
 //var rowElems = row.$$('td');
 //expect(rowElems.count()).toBe(7);
 //browser.sleep(3000);
 //var elem=element(by.id('maresetbtn'));
 //browser.wait(EC.elementToBeClickable(elem), 5000);
 //elem.click();
 //browser.actions().mouseMove(elem).click();
 //browser.sleep(2000);
 //element(by.buttonText('Generate OTP')).click();
 //browser.sleep(2000);
 //element(by.buttonText('Reset')).click();
 //browser.sleep(1000);
 //element(by.buttonText('Cancel')).click();
 //browser.sleep(1000);
element(by.xpath('//*[@id="manageAdmin_filter"]/label/input')).sendKeys('123');
 /*browser.sleep(30000);
 var del = element(by.id('madeleteBtn'));
 browser.wait(EC.elementToBeClickable(del), 6000);
 del.click();
 browser.sleep(3000);
 element(by.buttonText('No')).click();
 browser.sleep(1000);
 element(by.buttonText('yes')).click();
 browser.sleep(1000);*/
 //await  element(by.css('[href="#/pages/enterprise-admin/profile"]')).click();
 //await element(by.partialText('Pranathi Mallepall').click());
 //await element(by.css('[href="#/pages/enterprise-admin/manage-admin"]')).click();
 //await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/nb-layout-header/nav/ngx-header/nb-actions/nb-action/nb-user/div/div[2]/div')).click();
 //await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/nb-layout-header/nav/ngx-header/nb-actions/nb-action/nb-user/div/div[3]/ul/li[2]/a')).click();
 //browser.sleep(2000);
 //await element(by.buttonText('Cancel')).click();
 //browser.sleep(2000);
 //await element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/nb-layout-header/nav/ngx-header/nb-actions/nb-action/nb-user/div/div[3]/ul/li[3]/a')).click();
 //browser.sleep(2000);
 //var logout = element(by.css('[href="#/auth"]')).click();
 //console.log(rowElems);
 //expect(rowElems.get(0).getText()).toContain("pdb1200.one@gmail.com");
/* var tabledata = element.all(by.tagName("table"));
 var rows = tabledata.all(by.tagName("tr"));
 var cells = rows.all(by.tagName("td")).first();
 var cell = rows.all(by.tagName("td"));
 cells.getText('t').then(function(t){
//console.log(t);
 });
var el = element(by.xpath('//*[@id="manageAdmin"]/tbody/tr[1]/td[2]'));
//console.log(el);
/*var c= cells.getText();*/
/*el.getText('text').then(function(text){
//console.log(text);
});
//expect(el.getText()).toEqual(" ");
for(i=0;i<=2;i++){
   var data = cell.get(i).getText();
   var textData = "pranathi.m@axiomio.com";
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
expect(cell.get(0).getText()).toEqual("Pranathi Mallepall");
expect(cell.get(1).getText()).toEqual("pranathi.m@axiomio.com");
//expect(cell.get(2).getText()).toEqual("pranathi.m@axiomio.com");


//expect(cell.get(1).getText()).toEqual("pranathi.m@axiomio.com");
//expect(cell.get(0).getText()).toEqual("pranathi.m@axiomio.com");
 
 //expect(cells.get(0).getText()).toEqual("pdb");
 //expect(cells.get(1).getText()).toEqual("something")
 //expect(cells.get(2).getText()).toEqual("something")
 //});*/
var dropDown = element(by.xpath('/html/body/pdb-app/ngx-pages/ngx-sample-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-tables/ngx-smart-table/nb-card/nb-card-body/div[2]/div[1]/label/select'));
  //var returnValue;
  /*var selectDropdownbyNum =  function async( element, optionNum ) {
  if (optionNum){
     var options =  element.all(by.tagName('option'))   
      .then(function(options){
        options[optionNum].click();
        var dtext = options[optionNum].getText();
        dtext.getAttribute('value').then(function(inputValue) {
         // console.log(inputValue);
          returnValue = inputValue;
          console.log(returnValue)
          //return inputValue;
          return returnValue;
        });
      });
   browser.sleep(3000);
    }
};*/
browser.sleep(2000);
var selectDropdownbyNum =  async function( element, optionNum ) {
  try{
  browser.ignoreSynchronization = true;
  console.log('In try block');
  if (optionNum){
    console.log('In if block');
    var options =  element.all(by.tagName('option')).get(2); 
    //console.log(options.size());
    await options.click();
    //var dtext = await options[optionNum].getText();
    var dtext = await options.getText();
    dtext1 = dtext;
    console.log('dtext ' +dtext);
   /* var val1 = await options[dtext].getAttribute('value'); 
         // console.log(inputValue);
         // returnValue = inputValue;
          console.log(val1);
          //return inputValue;*/

          return dtext1;
        browser.sleep(3000);
    }
  } catch(e){
    console.log('error');
  }
};

selectDropdownbyNum(dropDown,0);
//expect(element.all(by.css("table tbody tr")).count()).toBe(1);
// console.log(dtext);
console.log('12345678');
expect(element.all(by.css("table tbody tr")).count()).toEqual(dtext1);
 });
 });
 //});

 
  
