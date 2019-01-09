--query for create view
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


FROM `jadwal`
inner join tujuan on tujuan.id = jadwal.tujuan_id  
INNER join bus on bus.id = jadwal.bus_id
INNER join kelas on kelas.id = bus.kelas_id
INNER JOIN po on po.id = kelas.po_id
INNER join rute on rute.id = tujuan.rute_id

--searching tiket
SELECT * FROM `carijadwal` WHERE tanggal_keberangkatan like '2018-12-13%' and pemberangkatan like 'Bandar Lampung' and pemberhentian like 'Jakarta' and kursi_tersedia NOT LIKE '0'



--cari kursi
CREATE VIEW carikursi AS 
SELECT 
tiket.id as id,  
tiket.jadwal_id as jadwal,  
tiket.no_kursi as no_kursi,  
jadwal.tanggal_keberangkatan as tanggal_keberangkatan,  
bus.jumlah_kursi as jumlah_kursi 

FROM `tiket`
INNER JOIN jadwal on jadwal.id = tiket.jadwal_id
INNER JOIN bus on bus.id = jadwal.bus_id



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
FROM `tiket` 
INNER JOIN penumpang on penumpang.id = tiket.penumpang_id
INNER JOIN jadwal on jadwal.id = tiket.jadwal_id
INNER JOIN tujuan on tujuan.id = jadwal.tujuan_id
INNER JOIN bus on bus.id = jadwal.bus_id
INNER JOIN kelas on kelas.id = bus.kelas_id
INNER JOIN po on po.id = kelas.po_id
INNER JOIN rute on rute.id = tujuan.rute_id


## untuk login
CREATE VIEW v_login AS
(SELECT 
user.nama as nama, 
login.email as email, 
login.password as password, 
login.hak_akses as hak_akses, 
'null' as po 

FROM user 
INNER JOIN login ON login.email = user.email )

UNION

(SELECT 
operator.nama as nama, 
login.email as email, 
login.password as password, 
login.hak_akses as hak_akses, 
operator.po_id as po 

FROM operator 
INNER JOIN login ON login.email = operator.email)

##end


## untuk total grup by po
SELECT SUM(harga) AS total, po_nama FROM cektiket GROUP BY po_nama

## untuk total by bulan
SELECT SUM(harga) AS total, MONTHNAME( tanggal_keberangkatan) AS bulan FROM cektiket GROUP BY bulan

## 


##profile
CREATE VIEW v_profile AS 
(SELECT 
user.nama as nama, 
user.jenis_kelamin as jenis_kelamin, 
user.foto as foto, 
login.email as email, 
login.hak_akses as hak_akses, 
'null' as po 

FROM user 
INNER JOIN login ON login.email = user.email )

UNION

(SELECT 
operator.nama as nama, 
operator.jenis_kelamin as jenis_kelamin, 
operator.foto as foto, 
login.email as email, 
login.hak_akses as hak_akses, 
operator.po_id as po 

FROM operator 
INNER JOIN login ON login.email = operator.email)


##endprofile