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
