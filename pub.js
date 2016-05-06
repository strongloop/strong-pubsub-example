// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-example
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var PORT = process.env.PORT;
var TOPIC = process.env.TOPIC;

var Client = require('strong-pubsub');
var Adapter = require('strong-pubsub-mqtt');
var readline = require('readline');
var client = new Client({port: PORT}, Adapter);
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function prompt() {
  rl.question('to "' + TOPIC + '": ', function(answer) {
    client.publish(TOPIC, answer);
    prompt();
  });
})();
