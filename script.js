const draggables = document.querySelectorAll('.image');
let draggedItem = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    });

    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();  // Necessary to allow a drop
    });

    draggable.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem && draggedItem !== e.target) {
            // Swap the background images of the dragged item and the target
            const tempBackground = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = tempBackground;
        }
    });
});
