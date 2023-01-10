
const pool = require('../database/configDB')

const createNewAccount = async (fullname,email,password) => {
    try {

        // Gợi ý : sử dụng RETURNING * ở cuối câu truy vấn INSERT
        // để trả về data vừa mới insert vào
        // data bắt buộc phải có student_id
        const res = await pool.query('SELECT * FROM Student')
        const newid = res.rowCount + 1
        const id = 'ST'+ newid.toString()
        console.log(id)
        const sql = `INSERT INTO Student (student_id, acc_password, full_name, date_of_birth, email, balance) VALUES
        ($1, $2, $3,'2023-01-01', $4, 250000) 
        RETURNING student_id, acc_password AS password, full_name AS fullname, date_of_birth, balance`
        const value = [id, password.toString(), fullname.toString(), email.toString()]
        const newAccount = await pool.query(sql, value)

        return newAccount.rows[0]

    } catch (error) {
        console.log(error.message + " at createNewAccount")
    }
}


const getAnAccount = async (ID) => {
    try {
        //Tìm tài khoản dựa vào ID
        // Lưu ý data cần cột tên là fullname
        const sql = `SElECT student_id, acc_password AS password, full_name AS fullname, date_of_birth, balance 
        FROM Student WHERE student_id = $1`;
        const value = [ID];
        const account  = await pool.query(sql, value)

        return account.rows[0]
    } catch (error) {
        console.log(error.message + " at getAnAccount")
    }


}

const getAnAccountByEmail = async (email) => {
    try {
        // Tìm tài khoản dựa vào email
        const sql = `SElECT student_id, acc_password AS password, full_name AS fullname, date_of_birth, balance 
        FROM Student WHERE email = $1`;
        const value = [email.toString()];
        const account = await pool.query(sql,value)


        return account

    } catch (error) {
        console.log(error.message + " at getAnAccountByEmail")
    }
}

const getBalance = async (ID) => {
    try {
        //Tìm tài khoản dựa vào ID
        // Lưu ý data cần cột tên là fullname
        const sql = `SElECT balance FROM Student WHERE student_id = $1`;
        const value = [ID];
        const data  = await pool.query(sql, value)
        const balance = data.rows[0].balance


        return balance
    } catch (error) {
        console.log(error.message + " at getBalance")
    }


}

const setNewCourse = async (course_id, student_id) => {
    try {
       
        const sql = `INSERT INTO Course_Student (student_id, course_id, rating, comment, progress) VALUES
        ($1, $2, null, null, 0)`
        const value = [student_id, course_id]
        const newReg = await pool.query(sql, value)

        return newReg.rows[0]

    } catch (error) {
        console.log(error.message + " at setNewCourse")
    }
}

const setNewBalance = async (student_id, newbalance) => {
    try {
       
        const sql = `UPDATE Student
        SET balance =  $1
        WHERE student_id = $2`
        const value = [newbalance, student_id]
        const newRes = await pool.query(sql, value)

        return newRes.rows[0]

    } catch (error) {
        console.log(error.message + " at setNewBalance")
    }
}

module.exports = {
    getAnAccount,
    getAnAccountByEmail,
    createNewAccount,
    getBalance,
    setNewCourse,
    setNewBalance
}
