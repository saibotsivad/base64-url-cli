const test = require('tape')
const spawn = require('tape-spawn')

test('test encode', function (t) {
	const st = spawn(t, 'node bin.js encode "Node.js is awesome."')
	st.stdout.match(/Tm9kZS5qcyBpcyBhd2Vzb21lLg/)
	st.end()
})

test('test decode', function (t) {
	const st = spawn(t, 'node bin.js decode "Tm9kZS5qcyBpcyBhd2Vzb21lLg"')
	st.stdout.match(/Node\.js is awesome\./)
	st.end()
})

test('test escape', function (t) {
	const st = spawn(t, 'node bin.js escape "This+is/goingto+escape=="')
	st.stdout.match(/This-is_goingto-escape/)
	st.end()
})

test('test decode', function (t) {
	const st = spawn(t, 'node bin.js unescape "This-is_goingto-escape"')
	st.stdout.match(/This\+is\/goingto\+escape==/)
	st.end()
})
