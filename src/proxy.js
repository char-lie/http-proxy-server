import http from 'http';

export default function(hostname) {
  return new Promise((fulfill, reject) => {
    http.get({
      hostname,
      port: 80,
      path: '/',
      agent: false,
    }, response => {
      let body = new Buffer('');
      response.on('data', chunk => {
        body = Buffer.concat([body, chunk]);
      });
      response.on('end', () => {
        fulfill({
          body,
          headers: response.headers,
          status: response.statusCode,
        })
      });
    }).on('error', e => {
      reject(e);
    });
  });
};
