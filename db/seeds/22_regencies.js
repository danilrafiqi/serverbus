exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('regencies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('regencies').insert([
        { id: '1771', province_id: '17', name: 'BENGKULU' },
        { id: '1801', province_id: '18', name: 'LAMPUNG BARAT' },
        { id: '1802', province_id: '18', name: 'TANGGAMUS' },
        { id: '1803', province_id: '18', name: 'LAMPUNG SELATAN' },
        { id: '1804', province_id: '18', name: 'LAMPUNG TIMUR' },
        { id: '1805', province_id: '18', name: 'LAMPUNG TENGAH' },
        { id: '1806', province_id: '18', name: 'LAMPUNG UTARA' },
        { id: '1807', province_id: '18', name: 'WAY KANAN' },
        { id: '1808', province_id: '18', name: 'TULANGBAWANG' },
        { id: '1809', province_id: '18', name: 'PESAWARAN' },
        { id: '1810', province_id: '18', name: 'PRINGSEWU' },
        { id: '1811', province_id: '18', name: 'MESUJI' },
        { id: '1812', province_id: '18', name: 'TULANG BAWANG BARAT' },
        { id: '1813', province_id: '18', name: 'PESISIR BARAT' },
        { id: '1871', province_id: '18', name: 'BANDAR LAMPUNG' },
        { id: '1872', province_id: '18', name: 'METRO' },
        { id: '1901', province_id: '19', name: 'BANGKA' },
        { id: '1902', province_id: '19', name: 'BELITUNG' },
        { id: '1903', province_id: '19', name: 'BANGKA BARAT' },
        { id: '1904', province_id: '19', name: 'BANGKA TENGAH' },
        { id: '1905', province_id: '19', name: 'BANGKA SELATAN' },
        { id: '1906', province_id: '19', name: 'BELITUNG TIMUR' },
        { id: '1971', province_id: '19', name: 'PANGKAL PINANG' },
        { id: '2101', province_id: '21', name: 'KARIMUN' },
        { id: '2102', province_id: '21', name: 'BINTAN' },
        { id: '2103', province_id: '21', name: 'NATUNA' },
        { id: '2104', province_id: '21', name: 'LINGGA' },
        { id: '2105', province_id: '21', name: 'KEPULAUAN ANAMBAS' },
        { id: '2171', province_id: '21', name: 'B A T A M' },
        { id: '2172', province_id: '21', name: 'TANJUNG PINANG' },
        { id: '3101', province_id: '31', name: 'KEPULAUAN SERIBU' },
        { id: '3171', province_id: '31', name: 'JAKARTA SELATAN' },
        { id: '3172', province_id: '31', name: 'JAKARTA TIMUR' },
        { id: '3173', province_id: '31', name: 'JAKARTA PUSAT' },
        { id: '3174', province_id: '31', name: 'JAKARTA BARAT' },
        { id: '3175', province_id: '31', name: 'JAKARTA UTARA' },
        { id: '3201', province_id: '32', name: 'BOGOR' },
        { id: '3202', province_id: '32', name: 'SUKABUMI' },
        { id: '3203', province_id: '32', name: 'CIANJUR' },
        { id: '3204', province_id: '32', name: 'BANDUNG' },
        { id: '3205', province_id: '32', name: 'GARUT' },
        { id: '3206', province_id: '32', name: 'TASIKMALAYA' },
        { id: '3207', province_id: '32', name: 'CIAMIS' },
        { id: '3208', province_id: '32', name: 'KUNINGAN' },
        { id: '3209', province_id: '32', name: 'CIREBON' },
        { id: '3210', province_id: '32', name: 'MAJALENGKA' },
        { id: '3211', province_id: '32', name: 'SUMEDANG' },
        { id: '3212', province_id: '32', name: 'INDRAMAYU' },
        { id: '3213', province_id: '32', name: 'SUBANG' },
        { id: '3214', province_id: '32', name: 'PURWAKARTA' },
        { id: '3215', province_id: '32', name: 'KARAWANG' },
        { id: '3216', province_id: '32', name: 'BEKASI' },
        { id: '3217', province_id: '32', name: 'BANDUNG BARAT' },
        { id: '3218', province_id: '32', name: 'PANGANDARAN' },
        { id: '3271', province_id: '32', name: 'BOGOR' },
        { id: '3272', province_id: '32', name: 'SUKABUMI' },
        { id: '3273', province_id: '32', name: 'BANDUNG' },
        { id: '3274', province_id: '32', name: 'CIREBON' },
        { id: '3275', province_id: '32', name: 'BEKASI' },
        { id: '3276', province_id: '32', name: 'DEPOK' },
        { id: '3277', province_id: '32', name: 'CIMAHI' },
        { id: '3278', province_id: '32', name: 'TASIKMALAYA' },
        { id: '3279', province_id: '32', name: 'BANJAR' },
        { id: '3301', province_id: '33', name: 'CILACAP' },
        { id: '3302', province_id: '33', name: 'BANYUMAS' },
        { id: '3303', province_id: '33', name: 'PURBALINGGA' },
        { id: '3304', province_id: '33', name: 'BANJARNEGARA' },
        { id: '3305', province_id: '33', name: 'KEBUMEN' },
        { id: '3306', province_id: '33', name: 'PURWOREJO' }
      ]);
    });
};