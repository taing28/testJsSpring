const searchBox = document.querySelector('#search-box')
const searchButton = searchBox.querySelector('button')

searchButton.addEventListener('click', (e) => {
    const searchValue = searchBox.querySelector('input').value

    const requestData = {
        name: searchValue,
        page: ''
    }

    const url = new URL('http://localhost:8080/bill/search')
    url.search = new URLSearchParams(requestData).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = ''
            showData(data)
        })
        .catch(error => {
            console.log('Error', error);
        })
})
