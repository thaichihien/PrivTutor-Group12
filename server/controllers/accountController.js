
const pool = require('../database/configDB')

const createNewAccount = async (fullname,email,password) => {
    try {

        // Gợi ý : sử dụng RETURNING * ở cuối câu truy vấn INSERT
        // để trả về data vừa mới insert vào
        // data bắt buộc phải có student_id
        const newAccount = await pool.query()





        return newAccount.rows[0]

    } catch (error) {
        console.log(error.message + " at createNewAccount")
    }
}


const getAnAccount = async (ID) => {
    try {
        //Tìm tài khoản dựa vào ID
        // Lưu ý data cần cột tên là fullname
        const account  = await pool.query()





        return account.rows[0]
    } catch (error) {
        console.log(error.message + " at getAnAccount")
    }


}

const getAnAccountByEmail =async (email) => {
    try {
        // Tìm tài khoản dựa vào email
        const account = await pool.query()




        return account

    } catch (error) {
        console.log(error.message + " at getAnAccountByEmail")
    }
}



module.exports = {
    getAnAccount,
    getAnAccountByEmail,
    createNewAccount
}
