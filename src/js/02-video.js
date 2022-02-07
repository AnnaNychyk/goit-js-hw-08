import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
let currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

function getCurrentVideo(data) {
    let timeInSeconds = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, timeInSeconds);
};

player.on('timeupdate', throttle(getCurrentVideo, 1000));

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
