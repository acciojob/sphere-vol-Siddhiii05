function volume_sphere() {
    //Write your code here
	event.preventDefault();
	const radius = parseFloat(document.getElementById("radius").value);
	const volume = document.getELememtById("volume");

	if(isNan(radius)||radius < 0){
		volume.value = Nan;
	} else {
		const result = (4/3) * Math.PI * Math.pow(radius, 3);
		volume.value = result.toFixed(4);
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
