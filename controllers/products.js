const products = require("../data/products")

const list = function(req,res){
  console.log("GET /products")
  res.json(products)
}

const show = function(req, res){
  console.log("GET /products/:id", req.params.id)
  
  let id = req.params.id;

  for(let i = 0; i < products.length; i++){
    let currentProduct = products[i];
    let productsId = products[i]._id;
    if(productsId == id){
      res.json(currentProduct)
    }
  }
  res.status(400).json('No member with the id of ' + id);
}

const create = function(req, res){
  console.log("POST /products", req.body)
  let counter = products.length + 1;
  let input = req.body
  let newProduct = {
    _id: counter,
    name: input.name,
    description :input.description 
  }
  
  products.push(newProduct)
  res.json(newProduct)
}




const productsController = {
  list, show, create
}

module.exports = productsController