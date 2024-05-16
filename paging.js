// Paging
const pageNumb = document.querySelector('#page-number')

var currentPage = 0;

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

nextBtn.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    const searchValue = searchBox.querySelector('input').value.trim()

    currentPage++
    console.log(currentPage);
    filterFunc(statusValue, pizzaTypeValue, searchValue);
    pageNumb.innerHTML = `${currentPage + 1}`
})

prevBtn.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    const searchValue = searchBox.querySelector('input').value.trim()

    if (currentPage === 0) {
        console.log('nuh uh');
        return
    }

    currentPage--
    console.log(currentPage);
    filterFunc(statusValue, pizzaTypeValue, searchValue);
    pageNumb.innerHTML = `${currentPage + 1}`
})