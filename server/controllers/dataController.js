const pool = require('../database/configDB')

const getAllCourse = async(keyword) => {
    try {


        let QUERY =  `SELECT c.course_id, c.logoCourseURL AS courseimage, c.course_name AS coursetitle, t.full_name AS author, c.rating, c.price 
        FROM Teacher t JOIN Course c ON c.teacher_id = t.teacher_id` 

        // TODO thực hiện search theo tên giáo viên hoặc tên khóa học
        // - dữ liệu y hệt câu truy vấn trên nhưng lần này lọc lại
        // - chỉ lấy khóa học hoặc giáo viên có tên có keyword
        // Gợi ý câu truy vấn:
        // "SELECT <CỘT LẤY> FROM KHÓA HỌC WHERE TÊN KHÓA HỌC LIKE '%keyword%' OR TÊN GIÁO VIÊN LIKE '%keyword%'"
        if(keyword){
            QUERY = `SELECT c.course_id, c.logoCourseURL AS courseimage, c.course_name AS coursetitle, t.full_name AS author, c.rating, c.price 
            FROM Teacher t JOIN Course c USING (teacher_id)
            WHERE c.course_name LIKE '%${keyword}%' OR t.full_name LIKE '%${keyword}%'`
        }

        const course = await pool.query(QUERY)

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
        // bổ sung lấy courseid as id
        const sql = `SElECT c.course_name AS title, c.description, c.rating AS ratings,
        COUNT(a.student_id) AS  numberrating, COUNT(a.course_id) AS numberstudent,
        t.full_name AS author, c.logoCourseURL AS courseimg, c.price, c.release_date, c.duration
        FROM Teacher t JOIN Course c USING (teacher_id) JOIN Course_Student a
        USING (course_id) WHERE c.course_id = $1 AND a.rating IS NOT NULL
        GROUP BY c.course_id, t.teacher_id`;

        const value = [id];
        const data = await pool.query(sql, value)
        const course = data.rows[0]
        const count = await pool.query('SELECT COUNT(*) AS numberlessons FROM Lesson WHERE course_id = $1 GROUP BY course_id', value)
        const numberlessons = count.rows[0].numberlessons
        course.numberlessons = numberlessons

        return course

    } catch (error) {
        console.log(error.message)
    }

}

const getAllLessonsBlock = async (id) => {
    try {
        const sql = 'SElECT lesson_name AS title, duration FROM Lesson  WHERE course_id = $1';
        const value = [id];

        const lessonData = await pool.query(sql, value)
        const lesson = lessonData.rows
        // lesson = {
        //     title,
        //     duration
        // }

       

        const linkLessonData = await pool.query('SElECT link_lesson FROM Lesson WHERE course_id = $1', value)
        const linkLesson = linkLessonData.rows

       

        lesson[0].link = linkLesson[0].link_lesson
        lesson[1].link = linkLesson[1].link_lesson

        return lesson

    } catch (error) {
        console.log(error.message)
    }
}


const getAllLessons = async (id) => {
    try {

        
        const sql = 'SElECT link_lesson as link,lesson_name AS title, duration FROM Lesson  WHERE course_id = $1';
        const value = [id];

        const lessonData = await pool.query(sql, value)
        const lesson = lessonData.rows

        return lesson

    } catch (error) {
        console.log(error.message)
    }
}

const getFeaturedCourse = async() => {
    try {
        const featuredcourse = await pool.query(
            `SELECT c.course_id, c.course_name AS title, c.description, t.full_name AS author, c.release_date, c.duration,
            COUNT(*) AS numberlessons, c.rating
            FROM Course c JOIN Lesson l USING (course_id) JOIN Teacher t USING (teacher_id)
            GROUP BY c.course_id, t.teacher_id`
        )

        // featuredcourse = {
        //     title,
        //     description,
        //     author,
        //     releasedate,
        //     duration,
        //     numberlessons,
        //     rating
        // }
       
    
        return featuredcourse.rows



    } catch (error) {
        console.log(error.message)
    }
}

const getAllMyCourse = async(id) =>{
    try {
        // Tìm tất cả khóa học đã mua của một tài khoản với id
        const sql = `SELECT c.course_id, c.course_name AS title, c.logoCourseURL AS image, t.full_name AS author, cs.progress
        FROM Course_Student cs JOIN Course c USING (course_id) JOIN Teacher t USING (teacher_id)
        WHERE cs.student_id = $1`
        const value = [id]
        const course = await pool.query(sql,value)

        // course = {
        //     image,
        //     title,
        //     author,
        //     progress // tiến độ là số nguyên từ 0 -> 100
        // }

        


        return course.rows

    } catch (error) {
        console.log(error.message + " at getAllMyCourse")
    }
}

const getCoursePrice = async(courseid) =>{
    try {
        // Tìm tất cả khóa học đã mua của một tài khoản với id
        const sql = `SELECT price FROM Course WHERE course_id = $1`
        const value = [courseid]
        const data = await pool.query(sql,value)
       
        const price = data.rows[0].price

        return price

    } catch (error) {
        console.log(error.message + " at getCoursePrice")
    }
}

const checkCoursePurchased = async (studentID,courseID) => {
    try {
        // Hàm kiểm tra xe học sinh mua khóa học này chưa
        // 
        const sql = `SELECT * FROM Course_Student WHERE student_id = $1 AND course_id = $2`
        const value = [studentID, courseID]
        const check = await pool.query(sql, value)      



        if(check.rowCount != 0){
            return true
        }else return false

    } catch (error) {
        console.log(error.message + " at checkCoursePurchased")
    }



}

module.exports = {
    getAllCourse,
    getDetailCourse,
    getFeaturedCourse,
    getAllReview,
    getAllLessonsBlock,
    getAllLessons,
    getAllMyCourse,
    getCoursePrice,
    checkCoursePurchased
}