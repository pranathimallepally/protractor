var actions = require("./Actions.js");
var envApp = require('./Env.json');
var LoginPage = require('./LoginPage.js');
//var portalHomepage = require("./login.js");
//Node module for Random Character generation
class SaasReusable {
    /**
     *
     * @param {string} sApp
     * @param {string} sEmail
     * @param {string} sPassword
     * @returns {boolean:bStatus}
     * @function loginIntoApp This function is used to Login into the App
     *                        depend on the Application name i.e. SaaS/Enterprise
     */
    async loginIntoApp(sApp) {
            var bStatus = true;
            try {
                //enter the email first
                var emailValue;
                var passValue;
                var otpValue;
                
                var speakeasy = require('speakeasy');
              //var secret = "S7ZN4GZDUTKFUS5JCWRJJMUWKKVLLVU2";
                var secret = "NGG5CGUDCDRDZJ3UJYE2CNEG2C5HPDUR";
                var token = speakeasy.totp({
                secret: secret,
                encoding: 'base32'
            });
            console.log(token);
                //Add Conditions for the Email and Password
                if (sApp.toUpperCase() == "SAAS") {
                    emailValue = envApp.SAASEMAIL;
                    passValue = envApp.SAASPASS;
                    otpValue = token;
                } else {
                    emailValue = envApp.EPEMAIL;
                    passValue = envApp.EPPASS;
                    otpValue = token;
                }



                 await LoginPage.enterUserName(emailValue);
              
                 await LoginPage.clickSigninButton();
                 await LoginPage.enterPassword(passValue);
                 await LoginPage.enterOTP(otpValue);

                 await LoginPage.clickSigninButton();
                 await browser.sleep(10000);
                 browser.ignoreSynchronization = true;
                
                } catch (error) {
                console.log("Error while Login in " + sApp + " Admin");
                bStatus = false;
            }
            return bStatus;
        }
        /**
         *
         * @param {String} sApp
         * @function logOutFromApp This function is also used to perform
         *                         logout from the App
         */
    async logOutFromApp(sApp) {
        //Click on the Test User
        try {
            //  console.log('Object***'+dashboardObject.TestUserText);
            //wait for some times
            await browser.wait(
                EC.presenceOf(element(by.css(dashboardObject.UserLogo))),
                minwait
            );
            await actions.clickOn(
                element(by.css(dashboardObject.UserLogo)),
                "Test User Acccount Clicked"
            );
            // await element(by.css(LoginObject.UserLogo)).click();
            console.log("Test User Logo is clicked");
            await logger.info("PASS", "User Logo is clicked");
            // await browser.manage().timeouts().implicitlyWait(minwait);
            //Click on Logout Link
            //  console.log('Click on Test User Section');
            await browser.wait(
                EC.presenceOf(element(by.css(dashboardObject.LogOutlink))),
                minwait
            );
            await actions.clickOn(
                element(by.css(dashboardObject.LogOutlink)),
                "LogOut Link has been Clicked"
            );
            //await element(by.css(dashboardObject.LogOutlink)).click();
            await console.log("After That Logout Link has been clicked");
            //wait for some times
            // await browser.waitForAngular();
            //Now validate the SuccessFully Logout or not
            if (sApp.toUpperCase() == "SAAS") {
                await browser.wait(
                    EC.presenceOf(element(by.xpath(LoginObject.SaaSHelloText))),
                    MAXWAITTIME
                );
                await expect(element(by.xpath(LoginObject.SaaSHelloText)).isPresent()).toBe(
                    true
                );
                console.log("User is Logout from the the SaaS Application");
            } else {
                await browser.wait(
                    EC.presenceOf(element(by.xpath(LoginObject.EnterpriseHelloText))),
                    MAXWAITTIME
                );
                await expect(
                    element(by.xpath(LoginObject.EnterpriseHelloText)).isPresent()
                ).toBe(true);
                console.log("User is Logout from the the Enterprise Application");
            }
        } catch (error) {
            console.log("Error occurred while Logout from " + sApp + " Application");
        }
    }
    async validateSorting(sColumnName, sDtype) {
        try {
            sDtype = typeof sDtype !== "undefined" ? sDtype : "String";
            //Sort in Ascending order
            var ascending_sorted_arr = [];
            var sColumnXpath = await this.getColumnHeaderXpath(sColumnName);
            console.log('*********************'  +sColumnXpath+'********************');
            console.log("********DESCENDING SORTING BEGINS WITH COLUMN " +sColumnName +"**********");
            browser.sleep(10000);
            await this.clickOn(element(by.xpath(sColumnXpath)),"Click on Column " + sColumnName + " for Sort in Descending");
            // await browser.pause();
            var sColumValueXpath = await this.getColumnValueXpath(sColumnName);
            console.log("********"+sColumValueXpath+"************");
            //get all the list
            var listValues = await browser.findElements(by.xpath(sColumValueXpath));
            //Now Create a array
            for (let index = 0; index < listValues.length; index++) {
                ascending_sorted_arr[index] = await listValues[index].getAttribute("innerHTML");
            }
            //print the array
            console.log("Unsorted Array****" + ascending_sorted_arr);
            //Now create a Sorted Array

            //Now sorted the Value in ascending order
            await ascending_sorted_arr.sort(function (a, b) {
                return a - b;
            });
            //print sorted array
            console.log("ascending sorted Array = " + ascending_sorted_arr, "Descending sorted array = ", ascending_sorted_arr.reverse());
            //Validate one expect
            // expect(unSorted).toEqual(sorted);
            // console.log(
            //     "********DESCENDING SORTING ENDS WITH COLUMN " +
            //     sColumnName +
            //     "**********"
            // );
            // //********************************** */
            // console.log(
            //     "********ASCENDING SORTING BEGINS WITH COLUMN " +
            //     sColumnName +
            //     "**********"
            // );
            // browser.sleep(10000);
            // await this.clickOn(
            //     element(by.xpath(sColumnXpath)),
            //     "Click on Column " + sColumnName + " for Sort in Ascending"
            // );
            // browser.sleep(10000);
            // // await browser.pause();
            // var sColumValueXpath = await this.getColumnValueXpath(sColumnName);
            // //get all the list
            // var listValues = await browser.findElements(by.xpath(sColumValueXpath));
            // //Now Create a array
            // for (let index = 0; index < listValues.length; index++) {
            //     unSorted[index] = await listValues[index].getAttribute("innerHTML");
            // }
            // //print the array
            // console.log("Unsorted Array****" + unSorted);
            // //Now create a Sorted Array
            // sorted = await unSorted.slice();
            // //Now sorted the Value in descending order
            // await sorted.sort(function (a, b) {
            //     return b - a;
            // });
            // //print sorted array
            // console.log("Sorted Array***" + sorted);
            // //Validate one expect
            // expect(unSorted).toEqual(sorted);
            // console.log(
            //     "********ASCENDING SORTING ENDS WITH COLUMN " +
            //     sColumnName +
            //     "**********"
            // );
        } catch (error) {
            console.log("Error Occured while Sorting with***" + sColumnName);
        }
    }

    /**
       *
       * @param {String} sColumnName
       * @function This function is used to validate the
       *           Searching with element
       */
    async performSearchWithColumnValue(sColumnName) {
        try {
            //get the Column Value Xpath
            var sColumXpath = this.getColumnValueXpath(sColumnName);
            //get the size
            var lst_Values = await browser.findElements(by.xpath(sColumXpath));
            var Values = [];
            for (let index = 0; index < lst_Values.length; index++) {
                Values[index] = await lst_Values[index].getAttribute('innerHTML');
            }
            //Enter any Character
            var sRandomValue = Values[0].trim();
            console.log('Searching with Column ' + sColumnName + ' Value***' + sRandomValue + ' begins');
            //logger.info('INFO', 'Searching with Column ' + sColumnName + ' Value***' + sRandomValue + ' begins');
            //Enter Search Values
            await this.type(element(by.css('input[type=\'search\']')), sRandomValue, sRandomValue + ' Value has been typed');
            //wait for some time
            await browser.manage().timeouts().implicitlyWait(MAXWAITTIME);
            //again get the Data
            var afterSearch = await browser.findElements(by.xpath(sColumXpath));
            //get the Text 
            var bStatus = false;
            for (let index = 0; index < afterSearch.length; index++) {
                let sText = await afterSearch[index].getAttribute('innerHTML');
                if (sText == sRandomValue) {
                    bStatus = true;
                } else {
                    bStatus = false;
                }
            }
            //Comparision
            if (bStatus) {
                await expect(bStatus).toBe(true);
                console.log('Search with Column Value***' + sRandomValue + '** Successfull with Column ' + sColumnName);
            } else {
                await expect(bStatus).toBe(true);
                console.log('Search with Column Value***' + sRandomValue + '** not Successfull with Column ' + sColumnName);
            }
            console.log('Searching with Column ' + sColumnName + ' Value***' + sRandomValue + ' ends');
            //logger.info('INFO', 'Searching with Column ' + sColumnName + ' Value***' + sRandomValue + ' ends');
        } catch (error) {
            console.log(
                "Error occurred while searching with Column Value***" + sColumnName
            );
        }
    }

    /**
         *
         * @param {String} sColumnName
         * @function This function is used to get the Column
         *           Header Xpath on the basis of Column Name
         */
    async getColumnHeaderXpath(sColumnName) {
        //Create a Xpath on the basis of Column Name
        var sColumnXpath =
            "//table//thead//th[normalize-space(.)='" + sColumnName + "']";
        console.log("Column Xpath*******" + sColumnXpath);
        return sColumnXpath;
    }

    /**
         *
         * @param {String} sColumnName
         * @returns {String} sColumnValuesXpath
         * @function {getColumnValueXpath} getting the Xpath on the basis
         *                                 of Column Name
         */
    async getColumnValueXpath(sColumnName) {
        //create a Column Header List
        var iColumnIndex;
        var sColumnValuesXpath;
        var Headers = await browser.findElements(by.xpath("//table//thead//th"));
        //Iterate over the array
        for (let index = 0; index < Headers.length; index++) {
            //get the Text
            var sText = await Headers[index].getAttribute("innerHTML");
            // console.log('Text***' + sText);
            if (sText === sColumnName) {
                iColumnIndex = index + 1;
            }
        }
        //Now create a Column Values Xpath
        console.log("***Column Index***" + iColumnIndex);
        //Create a Values Xpath
        sColumnValuesXpath = "//table//tbody//tr//td[" + iColumnIndex + "]";
        //print Column Value Xpath
        console.log("Column Value Xpath****" + sColumnValuesXpath);
        return sColumnValuesXpath;
    }

    async getDataFromTicketTable(){
        var unSorted = [];
        var listValues = await browser.findElements(by.xpath('//*[@id="mptable"]/tbody/tr/td[1]')); //get all the list
        for (let index = 0; index < listValues.length; index++){ //Now Create a array
            unSorted[index] = await listValues[index].getAttribute("innerHTML");
        }
        return unSorted;
    }
    async getData(){
        var excelWorkBook = new excelModule.Workbook();
        try{
            excelWorkBook.xlsx.readFile(filePath).then(async function(){
                var excelSheet =  excelWorkBook.getWorksheet(sheetName);
                console.log('sheet Found');
                var totalRowsIncludingEmptyRows = excelSheet.rowCount;
                var totalColIncludingEmptyCols = excelSheet.columnCount;
                console.log('Total number of rows :' +totalRowsIncludingEmptyRows);
                console.log('Total number of rows :' +totalColIncludingEmptyCols);
                browser.waitForAngularEnabled(false);
                // for(var i = 1 ; i < totalRowsIncludingEmptyRows; i++){
                //     await saasBillingProfiles.clickcreateNewBillingProfile();
                //     browser.sleep(3000);
                //     element(by.name(element1)).sendKeys(excelSheet.getRow(i+1).getCell(1).toString());
                //     browser.sleep(5000);
                //     await saasBillingProfiles.saveNewBillcreation();
                //     browser.sleep(3000);
                //     var billingProfileCreateMessage = await saasBillingProfiles.checkBillingProfileCreationMessage();
                //     console.log(billingProfileCreateMessage);
                //     browser.sleep(3000);
                //     expect(billingProfileCreateMessage).toEqual(expectedResult.expectedProfileCreationMessage)
                         
                // }
            });
        }catch(error){
            console.log('printing error');
            console.log(error);
        }
    }
}
module.exports = new SaasReusable();