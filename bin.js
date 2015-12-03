#!/usr/bin/env node

var base64 = require('base64-url')

var runner = process.argv[0]
var command = process.argv[1]
var input = process.argv[2]

function commandIsAllowed(c) {
	return c === 'encode' || c === 'decode' || c === 'escape' || c === 'unescape'
}

if (!command || !input || !commandIsAllowed(command)) {
	console.log('Missing required parameters. Run like:')
	console.log(runner + ' [encode|decode|escape|unescape] [input]')
	console.log('E.g., run this: ' + runner + ' decode Tm9kZS5qcyBpcyBhd2Vzb21lLg')
} else {
	console.log(base64[command](input))
}
