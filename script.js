document.addEventListener("DOMContentLoaded", () => {
    const playPauseBtn = document.getElementById("playPauseBtn");
    const boomBoxImage = document.getElementById("boomBoxImage");
    const clickSound = document.getElementById("clickSound");
    const music = document.getElementById("music");

    let isPlaying = false;

    playPauseBtn.addEventListener("click", () => {
        clickSound.play(); // Reproduce el sonido de clic

        if (isPlaying) {
            music.pause();
            playPauseBtn.classList.remove("pause");
            playPauseBtn.classList.add("play");
        } else {
            music.play();
            playPauseBtn.classList.remove("play");
            playPauseBtn.classList.add("pause");
        }

        isPlaying = !isPlaying;
    });
});
