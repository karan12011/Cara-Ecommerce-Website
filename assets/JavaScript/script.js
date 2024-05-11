const products = document.querySelectorAll('.product')

products.forEach(product => {
    product.addEventListener("click",()=>{
        console.log('hello')
        window.location.href="/product.html";
    })
});