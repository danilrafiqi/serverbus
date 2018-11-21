const express = require('express')
const app = express()
const bodyParser = require("body-parser");


const po = require('./routes/po')
const rute = require('./routes/rute')
const kelas = require('./routes/kelas')
const penumpang = require('./routes/penumpang')
const aturan = require('./routes/aturan')
const admin = require('./routes/admin')
const tujuan = require('./routes/tujuan')
const pemesan = require('./routes/pemesan')
const bank = require('./routes/bank')
const agen = require('./routes/agen')
const user = require('./routes/user')
const bus = require('./routes/bus')
//const kursi = require('./routes/kursi')
const transaksi = require('./routes/transaksi')
const jadwal = require('./routes/jadwal')
const harga = require('./routes/harga')
const tiket = require('./routes/tiket')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/po', po)
app.use('/rute', rute)
app.use('/kelas', kelas)
app.use('/penumpang', penumpang)
app.use('/aturan', aturan)
app.use('/admin', admin)
app.use('/tujuan', tujuan)
app.use('/pemesan', pemesan)
app.use('/bank', bank)
app.use('/agen', agen)
app.use('/user', user)
app.use('/bus', bus)
//app.use('/kursi', kursi)
app.use('/transaksi', transaksi)
app.use('/jadwal', jadwal)
app.use('/harga', harga)
app.use('/tiket', tiket)


const port = process.env.PORT || 2018;
app.listen(port, process.env.IP, () => {
  console.log("Server Started on Port: ", port);
});