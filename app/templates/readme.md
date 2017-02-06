# <%= appName %> [![Build Status](https://travis-ci.org/<%= username %>/<%= appName %>.svg?branch=master)](https://travis-ci.org/<%= username %>/<%= appName %>)

> <%= description %>

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/<%= username %>/<%= appName %>)


## Usage
<% if (cli) { %>
```bash
$ npm install --global <%= appName %>
$ <%= appName %>
```<% } else { %>
```bash
$ git clone <%= username %>/<%= appName %>.git
$ cd <%= appName %>
$ npm start
```
<% } %>


## Deployment

This microservice can be deployed to [now](https://zeit.co/now) by Zeit.
Assuming you've got `now` installed and set up:

```bash
$ now <%= username %>/<%= appName %>
```

Alternative, deploy right now without even leaving the browser:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/<%= username %>/<%= appName %>)


## License

MIT © <%= name %>
