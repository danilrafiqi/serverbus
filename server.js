const express = require('express')
const app = express()


const user = require('./routes/user')

app.use('/user', user)

const port = process.env.PORT || 2018;
app.listen(port, process.env.IP, () => {
  console.log("Server Started on Port: ", port);
});