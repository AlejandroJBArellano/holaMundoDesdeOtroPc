const video = document.getElementById("video"), button = document.getElementById("button"), info = document.getElementById("info");
button.addEventListener("click", e => {
    button.style.display = "none";
    video.play()
    info.style = `
    max-width: ${video.offsetWidth}px; 
    display: inline-block;
    `;
    console.log(scrollY)
});
video.addEventListener("timeupdate", e => {
    let dividir = info.offsetHeight / video.duration,
    currentTime = video.currentTime * dividir;
    scroll(0, currentTime)
})