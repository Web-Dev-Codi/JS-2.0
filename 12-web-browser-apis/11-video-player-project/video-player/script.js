// const video = document.getElementById('video');
// const play = document.getElementById('play');
// const halt = document.getElementById('stop');
// const currentTime = document.getElementById('current-time');
// const progress = document.getElementById('progress')







// function playPauseClip() {
//     if (video.paused) {
//         document.querySelector('.fa-play').classList.replace('fa-play', 'fa-pause');
//         video.play();
//     } else {
//         document.querySelector('.fa-pause').classList.replace('fa-pause', 'fa-play');
//         video.pause();
//     }
// }


// function stopClip() {

//     if (video.paused) {
//         document.querySelector('.fa-play').classList.replace('fa-play', 'fa-pause');
//         video.play();
//     } else {
//         document.querySelector('.fa-pause').classList.replace('fa-pause', 'fa-play');
//         video.pause();
//     }
//     video.currentTime = 0;
// }


// // function timeProgress() {
// //     progress.value = (video.currentTime / video.duration) * 100;
// // }

// function currentClipTime() {
//     const minutes = Math.floor(video.currentTime / 60);
//     const seconds = Math.floor(video.currentTime - minutes * 60);

//     const small = minutes.toString().padStart(1, '0');
//     const smallSeconds = seconds.toString().padStart(1, '0');

//     const videoTime = `0${small}:0${smallSeconds}`;

    
//     currentTime.innerHTML = videoTime;
//     console.log(videoTime);
//     progress.value = (video.currentTime / video.duration) * 100;
    
// }


// play.addEventListener('click', playPauseClip);
// halt.addEventListener('click', stopClip);

// video.addEventListener('timeupdate', currentClipTime);

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress);