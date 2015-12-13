# base64-url-cli [![Build Status](https://travis-ci.org/tobiaslabs/base64-url-cli.svg?branch=master)](https://travis-ci.org/tobiaslabs/base64-url-cli)

This is a thin command line wrapper for the awesome
[base64-url](https://www.npmjs.com/package/base64-url) module.

## install

	npm install -g base64-url-cli

## use it

Run it from the command line:

	base64url [encode|decode|escape|unescape] [input]

Encode strings to base64url:

	$ base64url encode "Node.js is awesome."
	Tm9kZS5qcyBpcyBhd2Vzb21lLg

Decode base64url strings:

	$ base64url decode "Tm9kZS5qcyBpcyBhd2Vzb21lLg"
	Node.js is awesome.

Escape strings:

	$ base64url escape "This+is/goingto+escape=="
	This-is_goingto-escape

Unescape strings:

	$ base64url unescape "This-is_goingto-escape"
	This+is/goingto+escape==

## license

Published and released under the [Very Open License](http://veryopenlicense.com)

<3
