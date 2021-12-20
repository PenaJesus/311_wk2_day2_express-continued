const express = require("express");
const bodyParser = require("body-parser");

// const comments = require("./data/comments");

const { set } = require("express/lib/application");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

const commentsRoute = require("./routes/comments");
app.use(commentsRoute);

const contactsRoute = require("./routes/contacts");
app.use(contactsRoute);

const vehiclesRoute = require("./routes/vehicles");
app.use(vehiclesRoute);

const productsRoute = require("./routes/products");
app.use(productsRoute);






const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
