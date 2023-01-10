const dataController = require('./dataController')
const accountController = require('../controllers/accountController')

const renderIndex = async (req,res) => {
    try {

        const id = req.user

        let user = {
            fullname : "",
            balance :''
        }
        if(id){
            const data  = await accountController.getAnAccount(id)
            user = data
        }

        const course = await dataController.getAllCourse()

        const review = await dataController.getAllReview()

        res.render('index',{course,review,user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}

const renderDetailCourse = async(req,res) => {
    try {
        const courseID= req.query.id

        const id = req.user

        let purchased = false

        let user = {
            fullname : "",
            balance :''
        }
        if(id){
            const data  = await accountController.getAnAccount(id)
            user = data

            purchased = await dataController.checkCoursePurchased(id,courseID)

        }

        const course = await dataController.getDetailCourse(courseID)
        
        let lesson = null
        if(purchased){
            lesson = await dataController.getAllLessons(courseID)
        }else{
            lesson = await dataController.getAllLessonsBlock(courseID)
        }
        

        if(purchased){
            res.render('Student_item_detail_purchased',{course,lesson,user})
        }else{
            res.render('Student_item_detail',{course,lesson,user})
        }
       

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const renderDiscovery = async (req,res)=>{
    try {
        const id = req.user

        let user = {
            fullname : "",
            balance :''
        }
        if(id){
            const data  = await accountController.getAnAccount(id)
            user = data
        }
        const course = await dataController.getAllCourse()
        
        const featuredcourse = await dataController.getFeaturedCourse()


        res.render('StudentDiscovery',{course,featuredcourse,user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }


}

const renderMyCourse = async (req,res) => {
    try {
        const id = req.user

        let user = {
            fullname : "",
            balance :''
        }
        if(id){
            const data  = await accountController.getAnAccount(id)
            user = data
        }

        const mycourse = await dataController.getAllMyCourse(id)

        res.render('My_Course',{mycourse,user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message + " at renderMyCourse")
    }

}

const renderCart =async (req,res) => {
    try {
        const courseID = req.query.id

        const id = req.user

        let user = {
            fullname : "",
            balance :''
        }
        if(id){
            const data  = await accountController.getAnAccount(id)
            user = data
        }
        const course = await dataController.getDetailCourse(courseID)


        res.render('Shopping_Cart',{course,user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message + " at renderCart")
    }

}



module.exports = {
    renderIndex,
    renderDetailCourse,
    renderDiscovery,
    renderMyCourse,
    renderCart
}