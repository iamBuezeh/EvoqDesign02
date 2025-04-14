const market = document.querySelector('.market')
const dashboard = document.querySelector('.dashboard')





dashboard.addEventListener("click", function(e) {
    // e.preventDefault();
    dashboard.classList.add('active')
    market.classList.remove('active')
    
})

market.addEventListener("click", function(e) {
    // e.preventDefault();
    market.classList.add('active')
    dashboard.classList.remove('active')
    
})









