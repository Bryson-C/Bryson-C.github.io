let orbitClock = document.getElementById('orbital-clock');

function updateOrbitalClock() {
	let d = new Date();
	
	// seconds
	let seconds = d.getSeconds();
	let milli = d.getMilliseconds();
	orbitClock.children[2].style.transform = `rotate(${-90 + ((seconds+(milli/1000))/60) * 360}deg)`;
	// minutes
	let minutes = d.getMinutes();
	orbitClock.children[1].style.transform = `rotate(${-90 + ((minutes+(seconds/60))/60) * 360}deg)`;
	// hours
	let hours = d.getHours();
	orbitClock.children[0].style.transform = `rotate(${-90 + ((hours+(minutes/60))/12) * 360}deg)`;
}
updateOrbitalClock();
setInterval(updateOrbitalClock, 10);