require('dotenv').config();
const express = require("express"); // Import express
const sequelize = require("./config/db");
const routes = require("./routes/index");
const auth = require('./config/auth');

const app = express(); // Create express app
app.use(express.json()); // Parse JSON bodies
app.use(auth.optional);
app.use("/", routes);

// require server loading server configuration


// try and catch to database
try {
	sequelize.authenticate();
	sequelize.sync();
	console.log("Connected to database");
} catch (error) {
	console.log("Error connecting to database", error);
}

app.listen(process.env['PORT'] || 3000, () => {
	// Start server
	console.log(`Server is listening on port ${process.env['PORT']}`); // Log message
});
