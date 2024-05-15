const filter = document.querySelector('#btn-filter')
const searchBox = document.querySelector('#search-box')
const searchButton = searchBox.querySelector('button')

const pageNumb = document.querySelector('#page-number')

var currentPage = 0;

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

filter.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    filterFunc(statusValue, pizzaTypeValue, '');
})

searchButton.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    const searchValue = searchBox.querySelector('input').value.trim()

    filterFunc(statusValue, pizzaTypeValue, searchValue);
})

nextBtn.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    const searchValue = searchBox.querySelector('input').value.trim()

    currentPage++
    console.log(currentPage);
    filterFunc(statusValue, pizzaTypeValue, searchValue);
    pageNumb.innerHTML = `${currentPage+1}`
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
    pageNumb.innerHTML = `${currentPage+1}`
})


function filterFunc(status, pizzaType, name) {
    const requestData = {
        status: status,
        pizzaType: pizzaType,
        name: name,
        page: `${currentPage}`
    }

    const url = new URL('http://localhost:8080/bill')
    url.search = new URLSearchParams(requestData).toString();


    fetch(url)
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = ''
            showData(data)
        })
        .catch(error => {
            currentPage--
            console.log('Error', error);
        })
}