// Endpoint của backend
const backendUrl = 'http://localhost:8080/bill';

var orderId = document.querySelector('#input-orderCode')
var inputCombo = document.querySelector('#input-combo')
var inputDuongKinh = document.querySelector('#input-duong-kinh')
var inputSuon = document.querySelector('#input-suon')
var inputDrink = document.querySelector('#input-drink')
var inputDrinkNumber = document.querySelector('#input-drink-number')
var inputVoucherId = document.querySelector('#input-voucherid')
var inputPizza = document.querySelector('#input-pizza')
var inputSalad = document.querySelector('#input-salad')
var inputTien = document.querySelector('#input-tien')
var inputGiamGia = document.querySelector('#input-giam-gia')
var inputHoTen = document.querySelector('#input-ho-ten')
var inputEmail = document.querySelector('#input-email')
var inputSoDienThoai = document.querySelector('#input-so-dien-thoai')
var inputDiaChi = document.querySelector('#input-dia-chi')
var inputMessage = document.querySelector('#input-message')
var inputTrangThai = document.querySelector('#input-trang-thai')
var inputNgayTao = document.querySelector('#input-ngay-tao')
var inputNgayCapNhat = document.querySelector('#input-ngay-cap-nhat')

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
        <button id="delete-${value.id}" class="btn btn-outline-dark delete-btn">Xoa</button>
      </td>
    </tr>`
  })

  data.map((value, index) => {
    const detailBtn = document.querySelector(`#detail-${value.id}`)

    detailBtn.addEventListener('click', (e) => {
      orderId.value = `${value.id}`
      inputCombo.value = `${value.combo}`
      inputDuongKinh.value = `${value.diameter}`
      inputSuon.value = `${value.bakedRibs}`
      inputDrink.value = `${value.drink}`
      inputDrinkNumber.value = `${value.drinkQuantity}`
      inputVoucherId.value = `${value.voucherId}`
      inputPizza.value = `${value.pizzaType}`
      inputSalad.value = `${value.salad}`
      inputTien.value = `${value.totalPrice}`
      inputGiamGia.value = `${value.sale}`
      inputHoTen.value = `${value.fullName}`
      inputEmail.value = `${value.email}`
      inputSoDienThoai.value = `${value.phone}`
      inputDiaChi.value = `${value.address}`
      inputMessage.value = `${value.note}`
      inputTrangThai.value = `${value.status}`
      inputNgayTao.value = `${value.createDate}`
      inputNgayCapNhat.value = `${value.updateDate}`
    })

    const deleteButton = document.querySelector(`#delete-${value.id}`)

    deleteButton.addEventListener('click', e => {
      if (confirm(`Are you sure want to delete order ${value.id}`)) {
        removeFunction(value.id)
        alert('Xoa thanh cong, refresh trang de cap nhat!')
      }
    })
  })
}
