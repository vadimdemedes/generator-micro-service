#!/usr/bin/env node

'use strict';

const {spawn} = require('child_process');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

const args = process.argv.slice(2);
spawn('npm', ['start', '--'].concat(args), {
	cwd: __dirname,
	stdio: 'inherit'
});
