const express = require('express');
const dotenv = require('dotenv');
const CorsConnection = require('./connections/CorsConnection');
const AdminRoutes = require('./routes/admin');
const UserRoutes = require('./routes/user');
const PublicRoutes = require('./routes/public');

dotenv.config();

const DBConnection = require('./connections/DBConnection');

const app = express();
const port = 4000 || process.env.PORT;

// Connect to MongoDB
DBConnection();
// CORS
app.use(CorsConnection);

// acess body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
    res.send('Wellcome to Connect Shiksha Backend');
    }
);

// Routes
app.use('/admin', AdminRoutes);
app.use('/user', UserRoutes);
app.use('/public', PublicRoutes);

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${`http://localhost:${port}`}`);
    }
);

