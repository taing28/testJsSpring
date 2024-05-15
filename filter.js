const filter = document.querySelector('#btn-filter')

filter.addEventListener('click', (e) => {
    const statusValue = document.querySelector('#select-status').value
    const pizzaTypeValue = document.querySelector('#select-pizza').value

    const requestData = {
        status: `${statusValue}`,
        pizzaType: `${pizzaTypeValue}`,
        page: ''
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
            console.log('Error', error);
        })
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

