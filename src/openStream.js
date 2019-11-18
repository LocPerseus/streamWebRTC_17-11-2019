const playVideo = require("./playVideo");

function openStream(cb) { // cb: callback
    navigator.mediaDevices
        .getUserMedia({
            audio: false,
            video: true
        })
        .then(stream => {
            cb(stream); // khi có stream. gọi function cb
        })
        .catch(err => console.log(err));
}

module.exports = openStream;