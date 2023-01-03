const lockModal = document.getElementById('lockModal')
const lessonlinkList = document.querySelectorAll('.lesson-link')

const addLockLesson = (e) => {
    e.preventDefault()
    lockModal.show()
}

lessonlinkList.forEach(e => {
    if(!e.href){
        e.onclick = (e) => {addLockLesson(e)}
    }
})

