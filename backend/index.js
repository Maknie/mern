const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URL, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});