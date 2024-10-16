document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const audioSource = document.getElementById("audioSource");
  const playlist = document.getElementById("playlist");

  playlist.addEventListener("change", function () {
    audioSource.src = this.value;
    audio.load();
    audio.play();
  });
});

var select = document.getElementById("playlist");
var options = select.getElementsByTagName("option");

var sortedOptions = Array.from(options).sort((a, b) => a.text.localeCompare(b.text));

for (var i = 0; i < sortedOptions.length; i++) {
  select.appendChild(sortedOptions[i]);
}

// Set volume
document.getElementById("audio").volume = 0.3;

// auto next song when ended
const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");

playlist.addEventListener("change", function () {
  const selectedOption = playlist.value;
  if (!playlist.options[playlist.selectedIndex].disabled) {
    audio.src = `${selectedOption}`;
    audio.play();
  }
});

audio.addEventListener("ended", function () {
  let currentIndex = playlist.selectedIndex;
  let nextIndex = currentIndex < playlist.options.length - 1 ? currentIndex + 1 : 0;

  // Skip disabled options
  while (playlist.options[nextIndex].disabled) {
    nextIndex = nextIndex < playlist.options.length - 1 ? nextIndex + 1 : 0;
  }

  playlist.selectedIndex = nextIndex;
  const selectedOption = playlist.value;
  audio.src = selectedOption;
  audio.play();
});

// Lưu trữ URL thực sự
let realURL = window.location.href;

// Hàm thay đổi URL giả
function changeToCustomURL(customURL) {
  // Kiểm tra sự hỗ trợ của window.history.replaceState()
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, "", customURL);
  } else {
    // Nếu không hỗ trợ, sử dụng window.location.replace()
    window.location.replace(customURL);
  }
}

// Thay đổi URL giả khi người dùng tương tác với các phần tử
document.addEventListener("click", function (event) {
  if (event.target.matches('input[type="text"], textarea, a')) {
    changeToCustomURL("google.com");
  }
});

// Trên các thiết bị di động, sử dụng sự kiện 'touchend' thay vì 'click'
document.addEventListener("touchend", function (event) {
  if (event.target.matches('input[type="text"], textarea, a')) {
    changeToCustomURL("google.com");
  }
});

// Khi người dùng click vào thanh địa chỉ, hiển thị lại URL thực sự
document.addEventListener("click", function (event) {
  if (event.target.matches('input[type="text"]')) {
    window.history.replaceState({}, "", realURL);
  }
});

// Popup
document.addEventListener("DOMContentLoaded", function () {
  openPopup(); // Gọi hàm openPopup() khi trang đã được tải
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";

  // Đọc nội dung từ file txt
  fetch("update.txt")
    .then((response) => response.text())
    .then((data) => {
      // Hiển thị nội dung trong thẻ div
      document.getElementById("eventContent").textContent = data;
    })
    .catch((error) => {
      console.error("Lỗi khi đọc file:", error);
    });
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
