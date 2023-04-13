const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const FilmModel = require('./models/film')
const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');

app.use(express.json())
app.use(cors())

const URI = 'mongodb://mongodb:27017/chmury_db'

// Connect to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  })
  .then(async () => {
    const allRecords = [];

    const data = await FilmModel.find({});

    console.log(`Number of documents in DataBase: ${data.length}`);
    if (data.length === 0)
      fs.createReadStream(path.join(__dirname, './', 'data.csv')).pipe(
        csv
          .parse({ headers: true })
          .on('error', (err) => console.log(err))
          .on('data', (row) => allRecords.push(row))
          .on('end', async (rowCount) => {
            console.log(`${rowCount} rows has parsed`),
              await FilmModel.insertMany(allRecords);
          }),
      );
  })
  .catch((e) => console.error(e));


// Get all films
app.get('/films', async (req, res) => {
    const films = await FilmModel.find();
    res.json(films);
})

app.listen(3001, ()=> {
    console.log('Server is running on port 3001')
});