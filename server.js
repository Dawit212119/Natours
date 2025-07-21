import mongoose from 'mongoose';
import app from './app';
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); //  load the env variable

/*    create a DB connection*/

//    replace the password field from the dburl by actual password
const DB = process.env.DATABSE_URL.replace(
  '<PASSWORD>',
  process.env.DATABSE_PASSWORD
);
// connection established

const connect = mongoose.connect(DB);
connect
  .then(() => console.log('DB Connection'))
  .cathc((err) => console.log(err));

//  model tour schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'tour name must be unique'],
    require: [true, 'tour name is required'],
  },
  rating: {
    type: Number,
    default: 4.6,
  },
  price: {
    type: Number,
    require: [true, 'price is required'],
  },
});
const Tour = mongoose.model('Tour', tourSchema); //   create a class(model) called Tour that will implement tourschema
//  create instance from the class (Tour)
const testTour = new Tour({
  name: 'To NYC',
  rating: 4.8,
  price: 456,
});
//  save the doucment in to db
testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => console.log('server connected'));
