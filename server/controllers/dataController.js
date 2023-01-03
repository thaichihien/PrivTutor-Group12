const pool = require('../database/configDB')

const getAllCourse = async() => {
    try {
        const course = await pool.query(
        `SELECT c.course_id, c.logoCourseURL AS courseimage, c.course_name AS coursetitle, t.full_name AS author, c.rating, c.price 
        FROM Teacher t JOIN Course c ON c.teacher_id = t.teacher_id`
        )
   


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
       
        return review.rows
    } catch (error) {
        console.log(error.message)
    }
}

const getDetailCourse = async (id) => {
    try {
        // id là id của khóa học
        const course = await pool.query(
            `SElECT c.course_name AS title, c.description, c.rating AS ratings,
            COUNT(a.student_id) AS  numberrating, COUNT(a.course_id) AS numberstudent,
            t.full_name AS author, c.logoCourseURL AS courseimg, c.price
            FROM Teacher t JOIN Course c USING (teacher_id) JOIN Course_Student a
            USING (course_id) WHERE c.course_id = $1 AND a.rating IS NOT NULL
            GROUP BY c.course_id, t.teacher_id`,[id]
        )

        // course = {
        //     title,          tiêu đề
        //     description,    đoạn miêu tả ngắn
        //     ratings,        điểm số
        //     numberrating,   số lượng người đánh giá
        //     numberstudent,   số lượng học sinh
        //     author,             tác giả
        //     courseimg,      hình ảnh
        //     price,          giá tiền
        // }

        return course.rows

    } catch (error) {
        console.log(error.message)
    }




}

module.exports = {
    getAllCourse,
    getDetailCourse,
    getAllReview
}