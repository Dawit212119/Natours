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

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => console.log('server connected'));
