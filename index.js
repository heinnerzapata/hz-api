import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/test1', (reqq, res) => {
  res.status(200).send({
    success: 'true',
    message: 'test1 retrieved successfully',
    res1: db
  });
});

app.post('/api/test1', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  }
  else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }

  const newElement = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  };

  db.push(newElement);

  return res.status(201).send({
    success: 'true',
    message: 'new element added succesfully',
    newElement
  });
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});