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

        const data = await dataController.getDetailCourse(id)
        const course = data[0]
        res.render('Student_item_detail',{course})

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}



module.exports = {
    renderIndex,
    renderDetailCourse
}