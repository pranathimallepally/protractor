class BrowserACtions {

    /**
         *
         * @param {String} sElement
         * @param {String} message
         * @function This function is used to validate the
         *           validate the UI as per element name
         */
        async validateElement(sElement, message) {
            //add Validation
            try {
                var bStatus;
               
                    bStatus = await sElement.isDisplayed();
               

                if (bStatus) {
                    await expect(bStatus).toBe(true);
                    //logger.info("PASS", "UI Element***" + message + " is displayed");
                    console.log("UI Element***" + message + " is displayed");
                    return true;
                } else {
                    await expect(bStatus).toBe(true);
                    //logger.info("PASS", "UI Element***" + message + " is not displayed");
                    console.log("UI Element***" + message + " is not displayed");
                }
            } catch (error) {
                //logger.info("FAIL", "UI Element***" + message + " is not displayed");
                console.log("UI Element***" + message + " is not displayed");
                return false;
                // console.log('Error occurred while validating the Element****' + sElement + " with Selector****" + sXpath)
            }
        }








    /**
     * 
     * @param {Element} oElement 
     * @param {Integer} timeout 
     * @function  This function is used to validate 
     *            Whether is is Displayed and Enabled both
     */
    waitAndFindElement(oElement, timeout) {
        browser.controlFlow().execute(function () {
            timeout = typeof timeout !== 'undefined' ? timeout : 40000;
            browser.wait(function () {
                return oElement.isPresent().then(function (displayed) {
                    browser.sleep(500);
                    return displayed;
                });
            }, timeout);

            browser.wait(function () {
                return oElement.isEnabled().then(function (enabled) {
                     browser.sleep(500);
                    return enabled;
                });
            }, timeout);
        });

    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} message 
     * @function  This function is used to performed 
     *            Click on the element displayed
     */
    clickOn(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        try {
            message = message || 'Perform Click Operation on page control';
            return oElement.click().then(function () {
                browser.sleep(3000);
                
                console.log(message);
                //logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            message = message || 'Perform Click Operation on page control';
            console.log('ERROR', "Failed to execute  clickOn action due to " + err.message);
            //logger.info('ERROR', "Failed to execute  clickOn action due to " + err.message);
            return false;
        }
    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} message 
     * @function This function is used to Clear the Text
     *            from Input Text Box
     */
    clearText(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Clearing the text field for the element' + oElement;
        return oElement.clear().then(function () {
            console.log(message);
            return true;
        }, function (err) {
            logger.info('Failed to clear the text field for the element due to' + err.message);
            return false;
        });
    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} value 
     * @param {String} message 
     * @function  This function is used to type the 
     *             Value in the Input field
     */
    type(oElement, value, message) {
       
        this.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Enter data';
        return oElement.clear().then(function (iscleared) {
            //logger.info('Text fieled cleared');
            return oElement.sendKeys(value).then(function (status) {
                console.log(message + ' as Value***' + value);
               // logger.info('PASS', message + ' as Value**' + value);
                return status;
            });

        });
    };

    /**
     * 
     * @param {Element} oElement 
     * @param {String} message 
     * @function function to get all the value of 
     *           Select dropdown
     */
    getAllOptionsDropdown(oElement, message) {

        this.waitAndFindElement(oElement, MAXWAITTIME);
        try {
            message = message || 'Perform getOptionsDropdown Operation to get all option items from dropdown list on page';
            logger.info('PASS', message);
            return oElement.all(by.tagName('option')).then(function (values) {
                return values.getText();
            })
        } catch (err) {
            logger.info('ERROR', "Failed to execute  getOptionsDropdown action due to " + err.message);
            return null;
        };
    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} message 
     * @function This function is used to get the selected value
     *           from dropdown 
     */
    getSelectedOptions(oElement, message) {

        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform getSelectedOptions Operation to get selected Items/Options from dropdown list on page';
            logger.info('PASS', message);
            return oElement.all(by.css('option[selected="selected"]')).then(function (values) {
                return values.getText();
            })
        } catch (err) {

            logger.info('ERROR', "Failed to execute  selectItemByText action due to " + err.message);
            return null;
        };

    };
    /**
     * 
     * @param {Element} oElement 
     * @param {Integer} indexvalue 
     * @param {String} message 
     * @function  This function is used for performing dropdown 
     *             selection on the basis of Option's Index
     */
    selectByIndexValue(oElement, indexvalue, message) {

        try {
            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform selectByIndexValue Operation to select item / option by index from dropdown list on page';
            console.log("indexvalueddd" + indexvalue)
            oElement.all(by.css('option:nth-child("' + indexvalue + '")')).click().then(function () {
                console.log(message + '*** as Index Option**' + indexvalue);
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('FAIL', message);
            logger.info('ERROR', "Failed to execute  selectByIndexValue action due to " + err.message);
            return false;
        };

    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} inputText 
     * @param {String} message 
     * @function This function is used for performing dropdown value 
     *           selection on the basis of Option's Partial Text
     */
    selectByPartialText(oElement, inputText, message) {

        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform selectByPartialText Operation to select item / option by partial text from dropdown list on page';
            oElement.all(by.cssContainingText('option', inputText)).click().then(function () {
                console.log(message + ' as Partial Text***' + inputText)
                logger.info('PASS', message + ' as Partial Text');
                return true;
            })
        } catch (err) {

            logger.info('FAIL', message);
            logger.info('ERROR', "Failed to execute  selectByPartialText action due to " + err.message);
            return false;
        }

    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} inputText 
     * @param {String} message 
     * @function function to perform drodown value selection 
     *           on the basis of Option's Text displayed
     */
    selectItemByTextvalue(oElement, inputText, message) {

        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform selectItemByTextvalue Operation to select item / option by text from dropdown list on page';
            oElement.all(by.xpath('//option[text()="' + inputText + '"]')).click().then(function () {
                console.log(message + ' as value**' + inputText)
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {

            logger.info('FAIL', 'Failed to execute  selectItemByTextvalue action due to' + err.message);
            return false;
        };
    };

    /**
     * Get Item Count from dropdown list
     * @param oElement
     * @param message
     * @return {itencount}
     */
    getItemCount(oElement, message) {
        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            var itencount = 0;
            message = message || 'Perform getItemCount Operation to select item / option by text from dropdown list on page';
            return oElement.all(by.tagName('option')).count().then(function (intItemsCount) {
                return intItemsCount;
            });

        } catch (err) {

            logger.info('ERROR', "Failed to execute  getItemCount action due to " + err.message);
        };

    };

    /**
     * 
     * @param {Element} oElement 
     * @param {String} message 
     * @function function to validate whether element is enabled or not
     */
    isElementDisabled(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        var result = false;
        message = message || 'Perform isElementDisabled Operation on current page';
        oElement.isEnabled().then(function (expStatus) {
            expect(expStatus).toBeFalsy();
            logger.info('INFO', message + ':' + expStatus);
            return expStatus;
        });

    };
    /**
     * 
     * @param {Element} oElement 
     * @param {String} message 
     * @function function to get the element text
     */
    getElementText(oElement, message) {

        try {
            message = message || 'Reading inner text of' + oElement;
            this.waitAndFindElement(oElement, MAXWAITTIME);
            return oElement.getText().then(function (txt) {
                if (typeof txt === 'object') {
                    txt = txt.toString();
                };
                if (txt.length !== 0) {
                    console.log('PASS', message);
                    //logger.info('PASS', message);
                    return txt;
                } else return 'Blank';
            })
        } catch (err) {
             console.log('Failed to open the application due to  ' + err.message);
            //logger.info('Failed to open the application due to  ' + err.message);
            return false;
        };
    };


    //=====================window===============
    /**
     * Switch to window with index
     * @param index
     * @param message
     * @return {boolean}
     */

    switchToWindow(index, message) {
        try {
            message = message || 'Switching to window with index';
            return browser.getAllWindowHandles().then(function (handles) {
                if (handles.length > 1) {
                    return browser.switchTo().window(handles[index]).then(function () {
                        browser.sleep(500);
                        logger.info('PASS', message);
                        return true;
                    });
                }
            })
        } catch (err) {
            logger.info('ERROR', "Failed to switching window due to " + err.message);
            return false;
        }
    };
    //============================Commons================


    /**
     * To generate a random number of given length
     * @param  {String} type (Number or String)
     * @param  {Number} length of the string required
     * @return {Number or String} returns number/string of length provided with random alphabets
     */
    randomNo(type, length) {
        try {
            var oresult = undefined;
            switch (type.toUpperCase()) {
                case 'STRING':
                    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for (var i = 0; i < length; i++) {
                        oresult = oresult + str.charAt(Math.floor(Math.random() * str.length));
                    }
                    logger.info('random string of length ' + length + ' for is :' + oresult);
                    break;
                case 'NUMBER':
                    var oresult = Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
                    logger.info('random number of length ' + length + ' for is :' + oresult);
                    break;
                default:
                    oresult = undefined;
                    break;
            }
        } catch (err) {
            logger.info('ERROR', "Failed to retrieving text from alert due to " + err.message);
            return false;
        }
        return oresult;
    };
    /**
     * 
     * @param {String} keyValue 
     * @param {String} message 
     * @function This function is use to press different Keys
     */
    pressKey(keyValue, message) {
        var message = message || 'Enter the Key' + keyValue;
        try {
            switch (keyValue.toUpperCase()) {

                case 'ENTER':
                    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
                        logger.info('PASS', message);
                        return true;
                    })
                    break;

                case 'TAB':
                    browser.actions().sendKeys(protractor.Key.TAB).perform().then(function () {
                        logger.info('PASS', message);
                        return true;
                    })
                    break;

                default:
                    time = undefined;
                    break;
            }
        } catch (err) {
            console.log("catch error and the error is: " + err.message);
            logger.info('ERROR', "Failed to press Key due to " + err.message);
            return false;
        }
    };
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
        return true;
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
        return true;
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
}
module.exports = new BrowserACtions();