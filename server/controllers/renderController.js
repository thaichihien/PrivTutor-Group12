const dataController = require('./dataController')
const accountController = require('../controllers/accountController')

const renderIndex = async (req,res) => {
    try {

        const id = req.user

        let user = {
            fullname : ""
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
        const {id} = req.params

        const course = await dataController.getDetailCourse(id)
        
        const lesson = await dataController.getAllLessons(id)


        res.render('Student_item_detail',{course,lesson})

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const renderDiscovery = async (req,res)=>{
    try {
        const course = await dataController.getAllCourse()
        
        const featuredcourse = await dataController.getDetailCourse()


        res.render('StudentDiscovery',{course,featuredcourse})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }


}

const renderMyCourse = async (req,res) => {
    try {
        const id = req.user

        const mycourse = await dataController.getAllMyCourse(id)

        res.render('My_Course',{mycourse})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message + " at renderMyCourse")
    }

}



module.exports = {
    renderIndex,
    renderDetailCourse,
    renderDiscovery,
    renderMyCourse
}