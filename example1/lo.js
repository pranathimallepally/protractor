//import { browser, element, by, ExpectedConditions, protractor} from 'protractor';
//import { Alert } from 'selenium-webdriver';
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Browser Window Operation', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// navigate to the url
	//	browser.get("https://chercher.tech/protractor/handle-browser-windows-protractor");
		// get the Session id of the Parent
	/*	browser.getWindowHandle().then(function(parentGUID){
			// click the button to open new window
			element(by.id("two-window")).click();
			browser.sleep(5000);
			// get the All the session id of the browsers
			browser.getAllWindowHandles().then(function(allGUID){
				// print the title of th epage
				console.log("Page title before Switching : "+ browser.getTitle());
				console.log("Total Windows : "+allGUID.length);
				// iterate the values in the set
				for(let guid of allGUID){
					// one enter into if blobk if the GUID is not equal to parent window's GUID
					if(guid !=parentGUID){
						// switch to the guid
						browser.switchTo().window(guid);
						// break the loop
						break;
					}
				}
				// search on the google page
				element(by.name("q")).sendKeys("success");
				// print the title after switching
				browser.sleep(5000).then(function(){
					console.log("Page title after Switching to goolge : "+ browser.getTitle());
				})
				// close the browser
				browser.close();
				// switch back to the parent window
				browser.switchTo().window(parentGUID);
				// print the title
				browser.sleep(5000).then(function(){
					console.log("Page title after switching back to Parent: "+ browser.getTitle());
				})
			})
    })*/
    browser.actions()
       .sendKeys(protractor.Key.chord(protractor.Key.CONTROL, protractor.Key.SHIFT ,"n"))
       .perform();
       //let _2ndBrowser = browser.forkNewInstance();
       //let url = 'https://google.com';
       //var agent = browser;
       var customer = browser.forkNewDriverInstance();
      // agent.ignoreSynchronization = true;
        customer.ignoreSynchronization = true;
        //agent.get('http://engager-stage.brandembassy.com/');
        //browser.sleep(10000);
       customer.get('https://google.com');
       browser.sleep(10000);
	});
});
