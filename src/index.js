import express from 'express';
import proxyRequest from './proxy';

const app = express();

app.get('/:url', (req, res) => {
  proxyRequest(req.params.url).then(({ status, body, headers }) => {
    res.status(status);
    res.set(headers);
    res.send(body);
  }).catch(e => {
    res.status(500)
    res.send(`An error occurred ${e}`);
  });
})

app.listen(3000);
