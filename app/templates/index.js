'use strict';

const {json} = require('micro');

module.exports = async req => {
	const body = await json(req);

	// let's echo the text
	return {text: body.text};
};
