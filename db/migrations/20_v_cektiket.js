exports.up = function(knex, Promise) {
  return knex.raw(`
  CREATE VIEW cektiket AS 
  SELECT  
  tiket.id as book_id,
  tiket.no_kursi as no_kursi, 
  tiket.total as harga,
  tiket.status as status,
  penumpang.nama as nama, 
  penumpang.email as email, 
  penumpang.no_hp as no_hp, 
  jadwal.tanggal_keberangkatan as tanggal_keberangkatan,
  tujuan.pemberangkatan as pemberangkatan,
  tujuan.pemberhentian as pemberhentian,
  bus.plat as plat,
  kelas.deskripsi as kelas_deskripsi,
  kelas.nama as kelas_nama,
  kelas.po_id as po_id,
  po.nama as po_nama,
  rute.deskripsi as rute_deskripsi
  FROM tiket
  INNER JOIN penumpang on penumpang.id = tiket.penumpang_id
  INNER JOIN jadwal on jadwal.id = tiket.jadwal_id
  INNER JOIN tujuan on tujuan.id = jadwal.tujuan_id
  INNER JOIN bus on bus.id = jadwal.bus_id
  INNER JOIN kelas on kelas.id = bus.kelas_id
  INNER JOIN po on po.id = kelas.po_id
  INNER JOIN rute on rute.id = tujuan.rute_id    
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw('drop view cektiket');
};
