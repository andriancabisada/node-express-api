 import express from 'express';
 import bodyParser from 'body-parser';
 import path from 'path';
 import usersRoutes from './routes/users.js'; 
 import db from './config/database.js';



 const app = express();


 app.use(bodyParser.json());


 db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error:' + err))
    
 app.use('/users', usersRoutes);

 app.get('/', (req, res) =>   res.send('Hello from Homepage'));

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () =>   console.log(`Server running on port: http://localhost:${PORT}`));

