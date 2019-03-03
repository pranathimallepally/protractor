var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: "pdb1200.one@gmail.com",
        pass: "Welcome2019!"
    }
});
var mailOptions = {
    from: 'pdb1200.one@gmail.com', // sender address
    to: 'pdb1200.two@gmail.com', // list of receivers
    subject: 'Reporest Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'path': 'F:/index.html',
            //'path':'file:///C:/Users/pdb12/AppData/Roaming/npm/node_modules/protractor/Protractor/examples/REPORTS/e2e/index.html',
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		//response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		//response.send(info);
    }
});