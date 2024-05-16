const products = document.querySelectorAll('.product')
const bar = document.getElementById("bar")
const nav = document.getElementById("nav-items")
const close = document.getElementById("close-nav")

products.forEach(product => {
  product.addEventListener("click",()=>{
    console.log('hello')
    window.location.href="/product.html";
  })
});

close.addEventListener('click',()=>{
  nav.classList.remove("visible")
  console.log("hello")
})

if (bar){
  bar.addEventListener('click',()=> {
    nav.classList.add('visible')
  })
}