import express from 'express';  
import db from './config/prisma.js'
const app = express();


app.get('/', (req, res) => {
  res.send('wellcome to Sangam!');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});