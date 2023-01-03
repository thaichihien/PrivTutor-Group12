const dataController = require('./dataController')

const renderIndex = async (req,res) => {
    try {
        const course = await dataController.getAllCourse()

        const review = await dataController.getAllReview()

        res.render('index',{course,review})
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}

const renderDetailCourse = async(req,res) => {
    try {
        const {id} = req.params



    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}



module.exports = {
    renderIndex,
    renderDetailCourse
}