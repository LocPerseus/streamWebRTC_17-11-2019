const openStream = require('./openStream');
const playVideo = require("./playVideo");
const Peer = require("simple-peer");
const $ = require('jquery');
openStream(function(stream) {
    playVideo(stream, "localStream");
    const p = new Peer({ initiator: location.hash === "#1", trickle: false, stream: stream }); // trickle sử dụng server bên ngoài
    p.on("signal", token => {
        $("#txtMySignal").val(JSON.stringify(token));
    });
    // p.on('connect', () => {
    //     setInterval(() => p.send(Math.random()), 2000);
    //     console.log('Connected')
    // });
    // p.on('data', data => console.log('NHAN DU LIEU: ' + data));

    $("#btnConnect").click(() => {
        const friendSignal = JSON.parse($("#txtFriendSignal").val());
        p.signal(friendSignal);
    });
    p.on('stream', friendStream => playVideo(friendStream, 'friendStream'))
    console.log("Hello World");
});