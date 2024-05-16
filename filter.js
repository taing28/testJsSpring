const filter = document.querySelector('#btn-filter')
const searchBox = document.querySelector('#search-box')
const searchButton = searchBox.querySelector('button')



filter.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    console.log('clicked filter');

    currentPage = 0;
    pageNumb.innerHTML = '1'
    filterFunc(statusValue, pizzaTypeValue, '');
})

searchButton.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value
    const searchValue = searchBox.querySelector('input').value.trim()
    currentPage = 0;
    pageNumb.innerHTML = '1'

    filterFunc(statusValue, pizzaTypeValue, searchValue);
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
            alert('There is no order')
            console.log('Error', error);
            if (currentPage === 0) {
                currentPage = 0
                pageNumb.innerHTML = `${currentPage + 1}`
            }
            if (currentPage > 0) {
                currentPage--
                pageNumb.innerHTML = `${currentPage + 1}`
            }

        })
}