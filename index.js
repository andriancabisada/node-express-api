 const express = require('express');
 const bodyParser = require('body-parser');
 const path = require('path');
 const usersRoutes = require('./routes/users.js'); 
 const db = require('./config/database.js');
 const xss = require('xss-clean');
 const mongoSanitize = require('express-mongo-sanitize');
 const helmet = require('helmet');
 const cors = require('cors');
 const passport = require('passport');
 const { errorHandler, notFound } = require('./middleware/error.js');
 
 //Error Middleware
//  const { errorHandler, notFound } = require('./middleware/error');
 const app = express();

 const http = require('http');
 const server = http.createServer(app);
 const socket = require('./socket')
 const { Server } = require("socket.io");
 const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
 });

///MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//bring in the strategy
require('./passport_config/passport')(passport);

//Additional Routes Security
app.use(mongoSanitize());
//app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(xss());


//connect to db
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error:' + err))
    


//routes
app.use('/users', usersRoutes);

app.get('/', (req, res) =>   res.send('Hello = require() Homepage'));



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json(), cors());
app.options('*', cors());

//Error Middleware
app.use(notFound)
app.use(errorHandler)


//starting io server
socket(io)


 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () =>   console.log(`Server running on port: http://localhost:${PORT}`));

