'use strict';

const listen = require('test-listen');
const micro = require('micro');
const test = require('ava');
const got = require('got');

require('async-to-gen/register')({includes: /index\.js$/});
const app = require('./'); // eslint-disable-line import/order

test('echo back the text', async t => {
	const service = micro(app);
	const url = await listen(service);

	const res = await got(url, {
		method: 'post',
		json: true,
		headers: {'content-type': 'application/json'},
		body: JSON.stringify({text: 'Hello!'})
	});

	t.is(res.body.text, 'Hello!');
});
