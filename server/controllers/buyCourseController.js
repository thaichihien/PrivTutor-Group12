const dataController = require('./dataController')
const accountController = require('./accountController')


const buyCourse =async (req,res)=>{
    try {
        const {courseID} = req.body  // Đây là id khóa học
        const id = req.user         // đây id của tài khoản mua
        let buySuccess = false
       // TODO 1 lấy thông tin tiền của khóa học và tài khoản
       // (có thể tự thêm hàm lấy dữ liệu tại dataController.js và accountController.js)

       // TODO 2 : thực hiện mua khóa học : so sánh, trừ tiền,...
       // nếu thành công set giá trị buySuccess = true
       // ngược lại buySuccess = false
       // Sử dụng hai biến dataControler và accountController ở trên để lấy dữ liệu


       // TODO 3 thành công thì thêm id khóa học vào bảng của tài khoản-khóa học
        


       // ! Gợi ý: tham khảo renderController.js, nhớ thêm await ở các hàm lấy dữ liệu
       // Liên tục xem terminal, console.log các biến

        if(buySuccess){
            res.json(true)
        }else{
            res.json(false)
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message + " at buyCourse")
    }
}

module.exports = {
    buyCourse
}