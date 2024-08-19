document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');
    const playlist = document.getElementById('playlist');

    playlist.addEventListener('change', function() {
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

document.getElementById('audio').volume = 0.5; // Set volume to 50%

	const playlist = document.getElementById('playlist');
    const audio = document.getElementById('audio');
    
    playlist.addEventListener('change', function() {
        const selectedOption = playlist.value;
        audio.src = `${selectedOption}`;
        audio.play();
    });
    
    audio.addEventListener('ended', function() {
		const currentIndex = playlist.selectedIndex;
		const nextIndex = currentIndex < playlist.options.length - 1 ? currentIndex + 1 : 0;
		playlist.selectedIndex = nextIndex;
		const selectedOption = playlist.value;
		audio.src = `${selectedOption}`;
		audio.play();
    });