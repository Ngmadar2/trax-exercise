const contactItems = [];

/* first task - answering for whos-there route */
const whosThereHandler = (req, res) => {
  res.send('Hi Trax! This is Nitzan');
};

/* second task - Create a route for getting all the contacts  */
const gettingContactsHandler = (req, res) => {
  res.json({ result: contactItems });
};

/* third task - Create a route for adding a new contact  */
const addingNewContactHandler = (req, res) => {
  contactItems.push(req.body);
  res.json({ result: req.body });
};

/* fourth task - Create a route for finding a contact by name */
const findContactByNameHandler = (req, res) => {
  const pName = req.query.name;
  const givenPerson = contactItems.find((person) => person.name === pName);

  if (givenPerson) {
    res.json({ result: givenPerson });
    return;
  }
  res.status(404).json({ result: 'Not found' });
};

module.exports = {
  whosThereHandler,
  gettingContactsHandler,
  addingNewContactHandler,
  findContactByNameHandler,
};
