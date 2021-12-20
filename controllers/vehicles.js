const vehicles = require("../data/vehicles")

const list = function(req,res){
  console.log("GET /vehicles")
  res.json(vehicles)
}

const show = function(req, res){
  console.log("GET /vehicles/:id", req.params.id)
  
  let id = req.params.id;

  for(let i = 0; i < vehicles.length; i++){
    let currentVehicle = vehicles[i];
    let vehicleId = vehicles[i]._id;
    if(vehicleId == id){
      res.json(currentVehicle)
    }
  }
  res.status(400).json('No member with the id of ' + id);
}

const create = function(req, res){
  console.log("POST /vehicles", req.body)
  let counter = vehicles.length + 1;

  let newVehicle = {
    _id: counter,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
  }
  
  vehicles.push(newVehicle)
  res.json(newVehicle)
}






const vehiclesController = {
  list, show, create
}

module.exports = vehiclesController