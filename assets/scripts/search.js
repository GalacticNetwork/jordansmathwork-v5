const boxes = document.querySelectorAll('.list');

function filterBoxes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    boxes.forEach(box => {
        const boxTitle = box.querySelector('span').textContent.toLowerCase();
        if (boxTitle.includes(searchTerm)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

document.getElementById('searchInput').addEventListener('input', filterBoxes);