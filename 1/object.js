var Reproductor = {
	isPlay: false,

	init: function (song) {
		console.log('init');
		this.song = song;
		this.events();
	},

	events: function () {
		var that = this;
		$('#play').on('click',  function() {
			!that.isPlay ? that.play() : that.pause();
			$(this).html( !that.isPlay ? '| |' : '&#9658;' )
			that.isPlay = !that.isPlay;
		});
	},

 	play : function () {
 		console.log('play');
		this.song.play();
	},

	pause: function () {
 		console.log('pause');
		this.song.pause();
 		
	}
};

Reproductor.init(document.getElementById('mp3'));
