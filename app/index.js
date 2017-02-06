'use strict';

const Generator = require('yeoman-generator');
const kebabcase = require('lodash.kebabcase');
const superb = require('superb');

module.exports = class extends Generator {
	constructor(a, b) {
		super(a, b);

		this.option('cli', {
			type: Boolean,
			desc: 'Add a CLI'
		});
	}

	prompting() {
		return this.prompt([
			{
				name: 'appName',
				message: 'What do you want to name your app?',
				default: kebabcase(this.appname)
			},
			{
				name: 'description',
				message: 'What is your app description?',
				default: `My ${superb()} microservice`
			},
			{
				name: 'username',
				message: 'What is your GitHub username?',
				store: true,
				validate: username => username.length > 0 ? true : 'You have to provide a username'
			},
			{
				name: 'cli',
				message: 'Do you need a CLI?',
				type: 'confirm',
				default: Boolean(this.options.cli),
				when: () => this.options.cli === undefined
			}
		]).then(props => {
			const cli = this.options.cli || props.cli;
			const appName = kebabcase(props.appName);

			this.props = Object.assign({
				name: this.user.git.name(),
				email: this.user.git.email()
			}, props, {appName, cli});
		});
	}

	writing() {
		const mv = (from, to) => {
			this.fs.move(this.destinationPath(from), this.destinationPath(to));
		};

		this.fs.copyTpl([
			`${this.templatePath()}/**`,
			'!**/cli.js'
		], this.destinationPath(), this.props);

		if (this.props.cli) {
			this.fs.copy(this.templatePath('cli.js'), this.destinationPath('cli.js'));
		}

		mv('editorconfig', '.editorconfig');
		mv('gitignore', '.gitignore');
		mv('travis.yml', '.travis.yml');
		mv('_package.json', 'package.json');
	}

	install() {
		this.installDependencies({bower: false});
	}
};
