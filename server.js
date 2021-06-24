import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);