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

// Sắp xếp
var select = document.getElementById("playlist");
var options = select.getElementsByTagName("option");

var sortedOptions = Array.from(options).sort((a, b) => a.text.localeCompare(b.text));

for (var i = 0; i < sortedOptions.length; i++) {
  select.appendChild(sortedOptions[i]);
}

// Set volume
document.getElementById("audio").volume = 0.25;

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

// Drop menu 2lv
const select1 = document.getElementById("list");
const select2 = document.getElementById("playlist");

select1.addEventListener("change", function () {
  const selectedValue = select1.value;

  // Lặp qua tất cả các option trong select 2 để ẩn tất cả
  Array.from(select2.options).forEach((option) => {
    option.disabled = true;
    option.setAttribute("hidden", "");
  });

  // Hiển thị các option có class tương ứng với giá trị đã chọn của select 1
  Array.from(select2.options).forEach((option) => {
    if (option.classList.contains(selectedValue)) {
      option.disabled = false;
      option.removeAttribute("hidden", "");
    }
  });
});
