#!/usr/bin/env node

var base64 = require('base64-url')

var command = process.argv[2]
var input = process.argv[3]

function commandIsAllowed(c) {
	return typeof base64[command] === 'function'
}

function binarydecode(i) {
 return Buffer.from(base64['unescape'](i), 'base64')
}

if ( command && input && command === 'binarydecode') {

	process.stdout.write(binarydecode(input))

} else if (!command || !input || !commandIsAllowed(command)) {
	console.log('Missing required parameters. Run like:')
	console.log('base64url [encode|decode|escape|unescape] [input]')
	console.log('E.g., run this: base64url decode Tm9kZS5qcyBpcyBhd2Vzb21lLg')
} else {
	console.log(base64[command](input))
}
