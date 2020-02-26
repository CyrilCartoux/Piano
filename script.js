const WHITE_KEYS = ['w', 'x', 'c', 'v', 'b', 'n', ',']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");


keys.forEach(key => {
	key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
	// Pour eviter qu'en restant appuyer il repete 1000x le son
	if (e.repeat) return	
	const key = e.key;

	const whiteKeyIndex = WHITE_KEYS.indexOf(key);
	const blackKeyIndex = BLACK_KEYS.indexOf(key);

	if (whiteKeyIndex != -1) { playNote(whiteKeys[whiteKeyIndex])}
	if (blackKeyIndex != -1) { playNote(blackKeys[blackKeyIndex])}
})


function playNote(key){
	const noteAudio = document.getElementById(key.dataset.note);
	// Permet de replay le son si je clique dessus pendant son exécution
	noteAudio.currentTime = 0;
	noteAudio.play();
	key.classList.add("active")
	noteAudio.addEventListener('ended', () => {
		key.classList.remove('active');
	})
}