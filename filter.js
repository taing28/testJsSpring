const filter = document.querySelector('#btn-filter')
var currentPage = 0;

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

filter.addEventListener('click', (e) => {
    filterFunc();
})

nextBtn.addEventListener('click', (e) => {
    currentPage++
    console.log(currentPage);
    filterFunc();
})

prevBtn.addEventListener('click', (e) => {
    if(currentPage === 0) {
        console.log('nuh uh');
        return
    }
    currentPage--
    console.log(currentPage);
    filterFunc();
})


function showData(data) {
    data.map((value, index) => {
        tableBody.innerHTML += `<tr>
      <td>${value.id}</td>
      <td>${value.combo}</td>
      <td>${value.pizzaType}</td>
      <td>${value.drink}</td>
      <td>${value.totalPrice}</td>
      <td>${value.fullName}</td>
      <td>${value.phone}</td>
      <td>${value.status}</td>
      <td>
      <button class="btn btn-outline-dark detail-btn" type="button" data-toggle="modal" data-target="#exampleModal">
      Chi tiet
    </button>
        <button class="btn btn-outline-dark">Xoa</button>
      </td>
    </tr>`
    })
}

function filterFunc() {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value

    const requestData = {
        status: `${statusValue}`,
        pizzaType: `${pizzaTypeValue}`,
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