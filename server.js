import app from './app';
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); //  load the env variable

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => console.log('server connected'));
