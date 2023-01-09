const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
const goToCart = () =>{
    const {id} = params
    window.location.href = '/cart?id=' + id
}


document.getElementById('add-btn').onclick = () => {
    goToCart()
}

document.getElementById('buy-btn').onclick = () => {
    goToCart()
}

