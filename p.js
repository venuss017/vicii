const button = document.getElementById('order-btn')
const plane = document.getElementById('plane')

button.addEventListener('click', function() {
    order-btn.classList.add('loading')
    plane.classList.add('play')
    setTimeout(() => { 
        button.textContent = 'Order Succes'
        button.classList.remove('loading')
        plane.classList.remove('play')
    }, 3500);
})      