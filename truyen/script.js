document.addEventListener("DOMContentLoaded", function() {
    openPopup(); // Gọi hàm openPopup() khi trang đã được tải
});

function openPopup() {
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";

        // Đọc nội dung từ file txt
    fetch('update.txt')
      .then(response => response.text())
      .then(data => {
        // Hiển thị nội dung trong thẻ div
        document.getElementById('eventContent').textContent = data;
      })
      .catch(error => {
        console.error('Lỗi khi đọc file:', error);
      });
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }