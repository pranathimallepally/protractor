
//var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
directConnect: true,
// Capabilities to be passed to the webdriver instance
capabilities: {
'browserName': 'chrome',
'shardTestFiles': true,
  'maxInstances': 3
},
// Framework to use
framework: 'jasmine',

plugins: [{
    package: 'protractor-screenshoter-plugin',
    screenshotPath: './REPORTS/e2e',
    screenshotOnExpect: 'failure+success',
    screenshotOnSpec: true,
    withLogs: true,
    writeReportFreq: 'asap',
    imageToAscii: 'none',
    clearFoldersBeforeTest: true
  }],

specs: [
 'SaasManageAdminSpec.js',
'SaasManageAccountSpec.js',
'SaasBillingProfileSpec.js',
//'SaasActivation.js'
],
// Options to be passed to Jasmine.
jasmineNodeOpts: {
defaultTimeoutInterval: 900000
},
onPrepare: async function(){
minwait = 30000;
MAXWAITTIME = 90000;
browser.manage().timeouts().setScriptTimeout(60000);
browser.manage().window().setSize(1600, 1000);
return;
return global.browser.getProcessedConfig().then(function(config) {
    //it is ok to be empty
});
/*jasmine.getEnv().addReporter(new HtmlReporter({
baseDirectory: 'tmp/screenshots',
preserveDirectory: false
}).getJasmine2Reporter());/*
},
 /*onComplete: function() {
    return new Promise(function (fulfill, reject){
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,//465,
            secure: true, // use SSL
            auth: {
                user: 'pdb1200.three@gmail.com',
                pass: 'Welcome2018!'
            }
        });
        var mailOptions = {
            from: 'pdb1200.three@gmail.com', // sender address (who sends)
            to: 'pdb1200.four@gmail.com',  // list of receivers (who receives)
            subject: 'Hello through conf', // Subject line
            text: 'Hello world ', // plaintext body
            html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js', // html body
    };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                reject(err);
            }
            fulfill(info);
        });
    });
 }*/
}
}
