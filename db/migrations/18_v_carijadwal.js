exports.up = function(knex, Promise) {
  return knex.raw(`
  CREATE VIEW carijadwal AS 
  SELECT 
  jadwal.id as id,
  jadwal.harga as harga,
  jadwal.kursi_tersedia as kursi_tersedia,
  jadwal.tanggal_keberangkatan as tanggal_keberangkatan, 
  tujuan.pemberangkatan as pemberangkatan,
  tujuan.pemberhentian as pemberhentian,
  bus.plat as plat,
  bus.jumlah_kursi as jumlah_kursi,
  kelas.nama as kelas_nama,
  kelas.deskripsi as kelas_deskripsi,
  po.nama as po_nama,
  rute.deskripsi as rute_deskripsi


  FROM jadwal
  inner join tujuan on tujuan.id = jadwal.tujuan_id  
  INNER join bus on bus.id = jadwal.bus_id
  INNER join kelas on kelas.id = bus.kelas_id
  INNER JOIN po on po.id = kelas.po_id
  INNER join rute on rute.id = tujuan.rute_id
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw('drop view carijadwal');
};
