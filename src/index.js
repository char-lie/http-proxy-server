import express from 'express';
import proxyRequest from './proxy';

const app = express();

app.get('/:url', (req, res) => {
  proxyRequest(req.params.url)
    .then(({ status, body, headers }) => {
      res.status(status);
      res.set(headers);
      res.send(body);
    })
    .catch(e => {
      console.error(`${new Date()}: ${e}`);
      res.status(500)
      res.send();
    });
})

app.listen(3000);
