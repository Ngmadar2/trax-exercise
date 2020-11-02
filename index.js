const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const contactItems = [];

/* first task - answering for whos-there route */
app.get('/whos-there', (req, res) => {
  res.send('Hi Trax! This is Nitzan');
});

/* second task - Create a route for getting all the contacts  */
app.get('/contacts', (req, res) => {
  res.json({ result: contactItems });
});

/* third task - Create a route for adding a new contact  */
app.post('/contact', (req, res) => {
  contactItems.push(req.body);
  res.json({ result: req.body });
});

/* fourth task - Create a route for finding a contact by name */
app.get('/contact/search', (req, res) => {
  const pName = req.query.name;
  const givenPerson = contactItems.find((person) => person.name === pName);

  if (givenPerson) {
    res.json({ result: givenPerson });
    return;
  }
  res.status(404).json({ result: 'Not found' });
});

app.listen(3000, () => {});
