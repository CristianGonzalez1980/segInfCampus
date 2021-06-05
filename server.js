import express from 'express';
import path from 'path';
import './src/Connection.js';
import User from './src/User.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.post('/users', async (req, res) => {
  console.log(req.boy);
  const newUser = new User({ userName: req.body.userName, password: req.body.password })
  console.log(newUser)
  const userSaved = await newUser.save();
  return res.json(userSaved);
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);