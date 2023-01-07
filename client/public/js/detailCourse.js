const lessonlinkList = document.querySelectorAll('.lesson-link')
var lockModal = new bootstrap.Modal(document.getElementById("lockModal"), {});

console.log(lessonlinkList[5].getAttribute('href'))

const addLockLesson = (e) => {
    e.preventDefault()
    lockModal.show()
    //confirm('Buy course to unlock full lessons')
}

lessonlinkList.forEach(e => {
    if(!e.getAttribute('href')){
        e.onclick = (e) => {addLockLesson(e)}
    }
})

