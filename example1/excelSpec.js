var exRead = require('./readExcel');

describe('MSIX Smoke', function () {
 beforeAll(function () {
    browser.get('url');
  });

 it('and Login to MSIX', function () {
    var arrayResult;
    // browser.waitForAngular();
    arrayResult= exRead.testdata();
    console.log(arrayResult);
})
});