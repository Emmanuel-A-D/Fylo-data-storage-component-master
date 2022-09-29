
const range = document.querySelector ('.input-range');


range.addEventListener('input', (e) => {
    const selectedSpacing = e.target.value;
    const result = document.querySelectorAll ('.value-range');
    result[0].innerHTML = selectedSpacing;
    result[1].innerHTML = 1000 - `${selectedSpacing}`;
    result[2].innerHTML = `${selectedSpacing} GB`;
});
