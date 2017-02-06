'use strict';

import path from 'path';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';
import test from 'ava';

const generator = path.join(__dirname, '../app');

test.serial('generates expected files', async () => {
	await helpers
		.run(generator)
		.withPrompts({
			appName: 'test',
			username: 'test',
			cli: false
		})
		.toPromise();

	assert.file([
		'.editorconfig',
		'.gitignore',
		'.travis.yml',
		'index.js',
		'package.json',
		'test.js',
		'license.md',
		'readme.md'
	]);

	assert.noFile('cli.js');
});

test.serial('CLI option', async () => {
	await helpers
		.run(generator)
		.withPrompts({
			appName: 'test',
			username: 'test',
			cli: true
		})
		.toPromise();

	assert.file('cli.js');
	assert.fileContent('package.json', /"bin": "cli.js"/);
});
