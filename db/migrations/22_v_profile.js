exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE VIEW v_profile AS 
    SELECT 
    user.nama as nama, 
    user.jenis_kelamin as jenis_kelamin, 
    user.foto as foto, 
    login.email as email, 
    login.hak_akses as hak_akses, 
    'null' as po 
    
    FROM user 
    INNER JOIN login ON login.email = user.email 
    
    UNION
    
    SELECT 
    operator.nama as nama, 
    operator.jenis_kelamin as jenis_kelamin, 
    operator.foto as foto, 
    login.email as email, 
    login.hak_akses as hak_akses, 
    operator.po_id as po 
    
    FROM operator 
    INNER JOIN login ON login.email = operator.email
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw('drop view v_profile');
};
