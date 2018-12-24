--query for create view
CREATE VIEW AS carijadwal
SELECT 
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


FROM `jadwal`
inner join tujuan on tujuan.id = jadwal.tujuan_id  
INNER join bus on bus.id = jadwal.bus_id
INNER join kelas on kelas.id = bus.kelas_id
INNER JOIN po on po.id = kelas.po_id
INNER join rute on rute.id = tujuan.rute_id

--searching tiket
SELECT * FROM `carijadwal` WHERE tanggal_keberangkatan like '2018-12-13%' and pemberangkatan like 'Bandar Lampung' and pemberhentian like 'Jakarta' and kursi_tersedia NOT LIKE '0'

