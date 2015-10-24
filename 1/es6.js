class Reproductor {

	constructor(params) {
		console.log('init');
		this.song = $(params.mp3).get(0);
		this.btnPlay = $(params.play);
		this.isPlay = false;
		this.events();
	}

	events() {
 		this.btnPlay.on('click', (event) =>  {
			!this.isPlay ? this.play() : this.pause();
			$(event.currentTarget).html( !this.isPlay ? '| |' : '&#9658;' )
			this.isPlay = !this.isPlay;
		});
	}

	play() {
		console.log('play');
		this.song.play();
	}

	pause() {
		console.log('pause');
		this.song.pause();
	}
}

new Reproductor({mp3: '#mp3', play: '#play'});
