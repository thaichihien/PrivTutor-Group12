const pool = require('../database/configDB')

const getAllCourse = async() => {
    try {
        const course = await pool.query(
        `SELECT c.course_id, c.logoCourseURL AS courseimage, c.course_name AS coursetitle, t.full_name AS author, c.rating, c.price 
        FROM Teacher t JOIN Course c ON c.teacher_id = t.teacher_id`
        )
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
        const review = await pool.query(
        `SELECT a.comment, s.full_name AS author, c.course_name AS coursetitle 
        FROM Course_Student a JOIN Course c ON a.course_id = c.course_id 
        JOIN Student s ON s.student_id = a.student_id WHERE a.comment IS NOT NULL`
        )
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