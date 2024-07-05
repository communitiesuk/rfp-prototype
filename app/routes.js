//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here


// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/find/download-data', function (req, res) {

    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
      // in your code.
      '64782b7e-e3ff-41f0-a86e-4a9e4f77cafb',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      req.body.emailAddress
    );
  
    // This is the URL the users will be redirected to once the email
    // has been sent
    res.redirect('/find/confirmation');
  
  });