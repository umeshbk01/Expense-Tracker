const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env '});

connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1/transactions', require('./routes/transactions'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${PORT}`));