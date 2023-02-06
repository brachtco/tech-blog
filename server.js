const path = require('path');
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequilize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(sessionStore);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers});

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 100000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',

    },
    resave: false,
    saveUninitailized: true,
    store: new SequelizeStore({
        db: sequilize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view.engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequilize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})




