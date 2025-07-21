const express = require('express');
const path = require('path');

const morgan = require('morgan');
const { connected } = require('process');
const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');
const { default: mongoose } = require('mongoose');
const app = express();

// console.log(app.get('env'));   express env access
console.log(process.env);
//   middleware
app.use(express.json());
//  logging info about http request

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use((req, res, next) => {
  console.log('from middleware');
  next();
});

// app.get('/api/v1/tour', getAlltour);

// app.get('/api/v1/tour/:id', getTour);

// app.post('/api/v1/tour', createTour);
// app.delete('/api/v1/tour/:id', deleteTour);

// app.patch('/api/v1/tour/:id', updateTour);

//   route it is used to CHAIN the route handler with the same path

//  mounting Router on route

//   db connection

app.use('/api/v1/tour', tourRoute);
app.use('/api/v1/user', userRoute);
app.use(express.static(path.join(process.cwd(), '/public')));

module.exports(app);
