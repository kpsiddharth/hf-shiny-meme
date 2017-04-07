'use strict';

// Instantiate all Hyperledger Fabric Client objects
var hfc = require("/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client")
var utils = require("/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/utils.js")
var peer = require('/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/Peer.js');
var orderer = require('/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/Orderer.js');
var eventHub = require('/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/EventHub.js')

var config = require('./config.json');

var log4js = require('log4js');
var logger = log4js.getLogger('DEPLOY');
logger.setLevel('DEBUG');

var express = require('express')
var app = express()

var client = new hfc();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
