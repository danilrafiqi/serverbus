exports.up = function(knex, Promise) {
  return knex.raw(`
  CREATE VIEW carikursi AS 
  SELECT 
  tiket.id as id,  
  tiket.jadwal_id as jadwal,  
  tiket.no_kursi as no_kursi,  
  jadwal.tanggal_keberangkatan as tanggal_keberangkatan,  
  bus.jumlah_kursi as jumlah_kursi 
  
  FROM tiket
  INNER JOIN jadwal on jadwal.id = tiket.jadwal_id
  INNER JOIN bus on bus.id = jadwal.bus_id
  
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw('drop view carikursi');
};
