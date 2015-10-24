var Reproductor = function (song) {
	console.log('init');
	this.song = song;
	this.isPlay = false;
	this.events();
}

Reproductor.prototype.events = function () {
	console.log('events' );
	$('#play').on('click',  (event) => {
		!this.isPlay ? this.play() : this.pause();
		$(event.currentTarget).html( !this.isPlay ? '| |' : '&#9658;' )
		this.isPlay = !this.isPlay;
	});
}

Reproductor.prototype.play = function () {
	console.log('play')
	this.song.play()
}

Reproductor.prototype.pause = function () {
	console.log('pause')
	this.song.pause()
}

new Reproductor(document.getElementById('mp3'));
