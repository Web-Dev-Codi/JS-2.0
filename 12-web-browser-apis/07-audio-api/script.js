const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const hold = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');


                                // attaching to the audio element 
play.addEventListener('click', () => audio.play())
pause.addEventListener('click', () => audio.pause())
hold.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})
// Shows time stamp in the dom
audio.addEventListener('timeupdate', () => {
    currentTime.innerText = audio.currentTime;
})
volume.addEventListener('change', () =>  audio.volume = volume.value)