//Popup
// document.addEventListener("DOMContentLoaded", function () {
//   openPopup(); // Gọi hàm openPopup() khi trang đã được tải
// });

function openPopup() {
  document.getElementById("popup_1").style.display = "block";
  document.getElementById("popup_2").style.display = "block";
  document.getElementById("popup_3").style.display = "block";
  document.getElementById("overlay").style.display = "block";

  // Đọc nội dung từ file txt
  fetch("updateTotal.txt")
    .then((response) => response.text())
    .then((data) => {
      // Hiển thị nội dung trong thẻ div
      document.getElementById("eventContent_1").textContent = data;
    })
    .catch((error) => {
      console.error("Lỗi khi đọc file:", error);
    });
}

function closePopup() {
  document.getElementById("popup_1").style.display = "none";
  document.getElementById("popup_2").style.display = "none";
  document.getElementById("popup_3").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
