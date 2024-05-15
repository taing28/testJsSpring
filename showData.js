// Endpoint của backend
const backendUrl = 'http://localhost:8080/bill';

var fetchedData;
// Gửi yêu cầu GET đến backend
fetch(backendUrl)
  .then(response => {
    // Kiểm tra trạng thái của response
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Phân tích JSON từ response
    return response.json();
  })
  .then(data => {
    // console.log(data);
    // Xử lý dữ liệu trả về từ backend
    showData(data)
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Error fetching data:', error);
  });

  const tableBody = document.querySelector('#tbl-order tbody')
  // console.log(tableBody);

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
      <button id="detail-${value.id}" class="btn btn-outline-dark detail-btn" type="button" data-toggle="modal" data-target="#exampleModal">
      Chi tiet
    </button>
        <button class="btn btn-outline-dark delete-btn">Xoa</button>
      </td>
    </tr>`
    })

    data.map((value, index) => {
      const detailBtn = document.querySelector(`#detail-${value.id}`)
      
      detailBtn.addEventListener('click', (e) => {
        let orderId = document.querySelector('#input-orderCode')
        orderId.value = `${value.id}`
        let inputCombo = document.querySelector('#input-combo')
        inputCombo.value = `${value.combo}`
        let inputDuongKinh = document.querySelector('#input-duong-kinh')
        inputDuongKinh.value = `${value.diameter}`
        let inputSuon = document.querySelector('#input-suon')
        inputSuon.value = `${value.bakedRibs}`
        // ... To be continued
      })
    })
}