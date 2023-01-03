const lessonlinkList = document.querySelectorAll('.lesson-link')

const addLockLesson = (e) => {
    e.preventDefault()
    confirm('Buy course to unlock full lessons')
}

lessonlinkList.forEach(e => {
    if(!e.href){
        e.onclick = (e) => {addLockLesson(e)}
    }
})

