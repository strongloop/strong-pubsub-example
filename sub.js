// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-example
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var PORT = process.env.PORT;
var TOPIC = process.env.TOPIC;

var Client = require('strong-pubsub');
var Adapter = require('strong-pubsub-mqtt');

var client = new Client({port: PORT}, Adapter);

client.subscribe(TOPIC);

client.on('message', function(topic, msg) {
  console.log(msg.toString());
});
