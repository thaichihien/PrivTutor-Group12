const buyBtn = document.getElementById('buy-btn')

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
buyBtn.onclick =async () => {
    const {id} = params

    const res = await fetch('/payment/buy',{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify({courseID : id})
    })

    const resJson = await res.json()

    if(resJson){
        document.getElementById('exampleModalLongTitle').innerHTML = "Mua khóa học thành công"
        document.getElementById('modal-content').innerHTML = "Cảm ơn bạn đã mua khóa học này, hãy quay lại trang my course để kiểm tra !"
        const successModal = new bootstrap.Modal(document.getElementById("success-modal"), {
            backdrop :false,
            keyboard:false
        });
        successModal.show()
    }else{
        document.getElementById('exampleModalLongTitle').innerHTML = "Mua khóa học thất bại"
        document.getElementById('modal-content').innerHTML = "Vui lòng kiểm tra số tiền trong tài khoản của bạn"
        const successModal = new bootstrap.Modal(document.getElementById("success-modal"), {});
        successModal.show()
    }

}