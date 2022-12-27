const { Pool, Client } = require('pg')
 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'privtutor_db',
    password: 'your password',
    port: 5432,
})

pool.connect()
   
pool.query('SELECT * FROM Student', (err, res) => {
    console.log(err, res)
    pool.end()
})

// your password là mật khẩu kết nối vs Postgres của mỗi máy.
