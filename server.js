const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//this requires all npms
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
//this brings in the routes and utils 

const app = express();
const PORT = process.env.PORT || 3001;
//connects to the port and heroku 

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // Tells our session to use cookies
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

//VV this sets handlebars as the view engine for this application
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);
//^^ needed to USE routes



sequelize.sync({ force: false  }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
//starts all sequelize functions and does not delete table among start of server 


