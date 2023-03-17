const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

app.all('/*', basicAuth(function(user, password) {
  return user === 'MKPortfolio20230213' && password === 'W2xH3jXd';
}));

app.use(express.static(__dirname + '/dist/'))

exports.app = functions.https.onRequest(app)

exports.getAutocompleteResponse = functions
  .region("asia-northeast1")
  .runWith({
    // Keep 5 instances warm for this latency-critical function
    minInstances: 5,
  })
  .https.onCall((data, context) => {
    // Autocomplete a user's search term
  });
