const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const user = require('./routes/user')
const po = require('./routes/po')
const pemesan = require('./routes/pemesan')
const kelas = require('./routes/kelas')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', user)
app.use('/po', po)
app.use('/pemesan', pemesan)
app.use('/kelas', kelas)

const port = process.env.PORT || 2018;
app.listen(port, process.env.IP, () => {
  console.log("Server Started on Port: ", port);
});