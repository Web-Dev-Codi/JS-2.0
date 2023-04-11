const musicContainer = document.getElementById('music-container');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const coverImg = document.getElementById('cover');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const pause = document.getElementById('pause');
const title = document.getElementById('title');




// const songsObj = [
//     {
//         title: title.innerHTML = "Ukulele",
//         src: audio.src = "music/ukulele.mp3",
//         cover: coverImg.src = "images/ukulele.jpg",
//     },
//     {
//         title: title.innerHTML = "Hey",
//         src: audio.src = "music/hey.mp3",
//         cover: coverImg.src = "images/hey.jpg",
//     },
//     {
//         title: title.innerHTML = "Summer",
//         src: audio.src = "music/summer.mp3",
//         cover: coverImg.src = "images/summer.jpg",
//     },

// ];



function playSong() {
    audio.play()
}
function pauseSong() {
    audio.pause()
    musicContainer.className = "music-container";
}
function nextSong() {
    audio.play()
}

play.addEventListener('click', () => {
    musicContainer.className = "music-container play";
    audio.play();
    console.log(audio);
});


prev.addEventListener('click', () => {
   audio.prev()
}
    
);


next.addEventListener('click', (e) => {
        
});




pause.addEventListener('click', pauseSong);

audio.addEventListener('timeupdate', () => {
    
    progress.innerText = audio.currentTime;
    console.log(progress);
});

console.log(audio.currentSrc);

