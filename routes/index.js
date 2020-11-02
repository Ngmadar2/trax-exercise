const express = require('express');

const {
  whosThereHandler,
  gettingContactsHandler,
  addingNewContactHandler,
  findContactByNameHandler,
} = require('../handlers');

const router = express.Router();

/* first task - answering for whos-there route */
router.get('/whos-there', whosThereHandler);

/* second task - Create a route for getting all the contacts  */
router.get('/contacts', gettingContactsHandler);

/* third task - Create a route for adding a new contact  */
router.post('/contact', addingNewContactHandler);

/* fourth task - Create a route for finding a contact by name */
router.get('/contact/search', findContactByNameHandler);

module.exports = router;
