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

  function showData(data){
    data.map((value, index) => {
      tableBody.innerHTML += `<tr>
      <td>${index+1}</td>
      <td>${value.combo}</td>
      <td>${value.pizzaType}</td>
      <td>${value.drink}</td>
      <td>${value.totalPrice}</td>
      <td>${value.fullName}</td>
      <td>${value.phone}</td>
      <td>${value.status}</td>
      <td>
        <button class="btn btn-outline-dark">Chi tiet</button>
        <button class="btn btn-outline-dark">Xoa</button>
      </td>
    </tr>`
    })
  }