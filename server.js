const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let corsOptions = {
    origin: 'http//localhost:8081'
};
const db = require("./app/models");

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

db.sequelize.sync();

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});