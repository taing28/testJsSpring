// Endpoint của backend
const backendUrl = 'http://localhost:8080/bill';

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
    // Xử lý dữ liệu trả về từ backend
    console.log(data); // In dữ liệu ra console để kiểm tra
    // Tiếp tục xử lý dữ liệu ở đây (ví dụ: cập nhật giao diện người dùng)
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Error fetching data:', error);
  });