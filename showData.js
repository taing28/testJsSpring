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
        let inputDrink = document.querySelector('#input-drink')
        inputDrink.value = `${value.drink}`
        let inputDrinkNumber = document.querySelector('#input-drink-number')
        inputDrinkNumber.value = `${value.drinkQuantity}`
        let inputVoucherId = document.querySelector('#input-voucherid')
        inputVoucherId.value = `${value.voucherId}`
        let inputPizza = document.querySelector('#input-pizza')
        inputPizza.value = `${value.pizzaType}`
        let inputSalad = document.querySelector('#input-salad')
        inputSalad.value = `${value.salad}`
        let inputTien = document.querySelector('#input-tien')
        inputTien.value = `${value.totalPrice}`
        let inputGiamGia = document.querySelector('#input-giam-gia')
        inputGiamGia.value = `${value.sale}`
        let inputHoTen = document.querySelector('#input-ho-ten')
        inputHoTen.value = `${value.fullName}`
        let inputEmail = document.querySelector('#input-email')
        inputEmail.value = `${value.email}`
        let inputSoDienThoai = document.querySelector('#input-so-dien-thoai')
        inputSoDienThoai.value = `${value.phone}`
        let inputDiaChi = document.querySelector('#input-dia-chi')
        inputDiaChi.value = `${value.address}`
        let inputMessage = document.querySelector('#input-message')
        inputMessage.value = `${value.note}`
        let inputTrangThai = document.querySelector('#input-trang-thai')
        inputTrangThai.value = `${value.status}`
        let inputNgayTao = document.querySelector('#input-ngay-tao')
        inputNgayTao.value = `${value.createDate}`
        let inputNgayCapNhat = document.querySelector('#input-ngay-cap-nhat')
        inputNgayCapNhat.value = `${value.updateDate}`
      })
    })
}