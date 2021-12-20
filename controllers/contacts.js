const contacts = require("../data/contacts");

const list = function(req, res){
    console.log("GET /contacts")
    res.json(contacts)
  
}

const show = function(req, res){
  console.log("GET /contacts/:id", req.params.id)
  
  let id = req.params.id;

  for(let i = 0; i < contacts.length; i++){
    let currentContact = contacts[i];
    let contactId = contacts[i]._id;
    if(contactId == id){
      res.json(currentContact)
    }
  } 
  res.status(400).json('No member with the id of ' + id);
}


const create = function(req, res){
  console.log("POST /contacts")
  let counter = contacts.length + 1;

  let newContact = {
    _id : counter,
    name : req.body.name,
    occupation : req.body.occupation,
    avatar : req.body.avatar
  }
  
  contacts.push(newContact)
  res.json(newContact)
}

const contactsController = {
  list, show, create
}

module.exports = contactsController