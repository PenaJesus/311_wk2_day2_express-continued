const comments = require("../data/comments");

const list = function(req,res){
  console.log("GET /comments")
  res.json(comments)
}

const show = function(req,res){
  console.log("GET /comments/:id", req.params.id)
  
  let id = req.params.id;

  for(let i = 0; i < comments.length; i++){
    let currentComment = comments[i];
    let commentId = comments[i]._id;
    if(commentId == id){
      res.json(currentComment)
    }
  }
  res.status(400).json('No member with the id of ' + id);
}

const create = function(req, res){
  console.log("POST /comments")
  let counter = comments.length + 1;
  req.body.postId = 1;
  let setPostId = req.body.postId;
  let newComment = {
    _id : counter,
    body : req.body.body,
    postId : setPostId
  }
  
  comments.push(newComment)
  res.json(newComment)
}


let commentsController = {
list, show, create
}

module.exports = commentsController;