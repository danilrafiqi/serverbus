exports.up = function(knex, Promise) {
  return knex.raw(`
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
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw('drop view v_login');
};
