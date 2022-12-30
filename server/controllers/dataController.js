const pool = require('../database/configDB')

const getAllCourse = async() => {
    try {
        const course = await pool.query('Ghi truy vấn tại đây')
        // một khóa học cần các cột sau, nếu cột trong database khác tên 
        // thì đổi lại tên cột tương ứng bên dưới
        // a course = {
        //     course_id,
        //     courseimage,
        //     coursetitle,
        //     author,
        //     rating,
        //     price
        // }


        return course.rows


    } catch (error) {
        console.log(error.message)
    }
}

const getAllReview = async() =>{
    try {
        const review = await pool.query('')
         // một review cần các cột sau, nếu cột trong database khác tên 
        // thì đổi lại tên cột tương ứng bên dưới. Hiện tại chưa có table cho
        // review , có gì tạo thêm cho tương ứng
        // review = {
        //     comment,
        //     author,      // tên người comment
        //     coursetitle  //khóa học người đó comment
        // }

        return review.rows
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAllCourse,
    getAllReview
}