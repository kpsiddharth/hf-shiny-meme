'use strict';

// Instantiate all Hyperledger Fabric Client objects
// Hardcoding these paths for now, until I figure out if thes
// artifacts are downloadable from anywhere or if I should 
// be pointing them to a Github URL.
var hfc = require("/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client")
var utils = require("/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/utils.js")
var Peer = require('/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/Peer.js');
var Orderer = require('/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/Orderer.js');
var eventHub = require('/home/siddhartha/go/src/github.com/hyperledger/fabric-sdk-node/node_modules/fabric-client/lib/EventHub.js')

// Hyperledger Fabric Configuration information
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
	logger.debug('Example app listening on port 3000!')

	// Construct the entire Fabric here
	// This will be the Fabric Administration node
  	var chain = client.newChain(config.chainName);
	chain.addOrderer(new Orderer(config.orderer.orderer_url));
	logger.debug('.. Adding new Orderer at: ' + config.orderer.orderer_url);

	for (var i = 0; i < config.peers.length; i++) {
		logger.debug('.. Adding new Peer at: ' + config.peers[i].peer_url);
		chain.addPeer(new Peer(config.peers[i].peer_url));
	}
})
