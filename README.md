# HTTP Proxy

Here is a simple HTTP proxy server.

## Installation

First of all you should install and build the package
```
npm i && npm run build
```

## Usage

Run the server
```
npm start
```

Go to URL `localhost:3000/{site-url}`,
where `{site-url}` is a URL of the site
you want to view by this proxy server.
For example,
[localhost:3000/domains.google](http://localhost:3000/domains.google)
will provide you with content of [domains.google](https://domains.google/)
page.

**Note:** `headers` passed as well as `body`,
so redirects **will** work if they exist on requested web-page.
