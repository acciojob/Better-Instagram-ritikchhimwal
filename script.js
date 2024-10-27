// Select all draggable elements
const draggables = document.querySelectorAll(".draggable");

let draggedElement = null;

// Add drag event listeners
draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", handleDragStart);
    draggable.addEventListener("dragover", handleDragOver);
    draggable.addEventListener("drop", handleDrop);
});

// Handle the start of a drag event
function handleDragStart(event) {
    draggedElement = event.target; // Set the current element as dragged
    event.dataTransfer.effectAllowed = "move";
}

// Allow dropping by preventing default behavior of dragover event
function handleDragOver(event) {
    event.preventDefault();
}

// Handle the drop event to swap images
function handleDrop(event) {
    event.preventDefault();

    // If dropping on another element, swap their background images
    if (draggedElement && draggedElement !== event.target) {
        const tempImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = tempImage;
    }

    // Clear the dragged element after drop
    draggedElement = null;
}
