function volume_sphere(event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById("radius").value);
    const volume = document.getElementById("volume");

    if (isNaN(radius) || radius < 0) {
        volume.value = NaN;
    } else {
        volume.value = ((4 / 3) * Math.PI * radius ** 3).toFixed(4);
    }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
