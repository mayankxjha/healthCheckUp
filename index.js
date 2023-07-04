console.log('your nyano');
function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}
document.addEventListener('touchstart', () => {
    playAudio()
})