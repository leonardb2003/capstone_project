const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT || 3000);
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');

const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});

app.use(
    cookieParser(),
    cors(),
    route,
    express.json(),
    express.urlencoded({extended: true})
)

app.listen(port, ()=> {
    console.log(`Server is running at ${port}`)
});

app.use(errorHandling);

