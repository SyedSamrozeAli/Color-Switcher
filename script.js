// Function to change background color of body
function colorChange(color) {
    const background = document.querySelector("body");
    background.style.backgroundColor = color;
}

const parentContainer = document.querySelector(".container");
let previousBox = null;
let prevColor = "white";
for (let i = 0; i < parentContainer.children.length; i++) {
    parentContainer.children[i].addEventListener('click', (e) => {
        // Get the background color of the clicked box
        const color = getComputedStyle(parentContainer.children[i]).getPropertyValue("background-color");

        // Change the background color of the body
        colorChange(color);

        // Change the background color of the clicked box to white
        parentContainer.children[i].style.backgroundColor = "white";

        // Restore the background color of the previously clicked box
        if (previousBox && previousBox !== parentContainer.children[i]) {
            previousBox.style.backgroundColor = prevColor;
        }

        // Update the previously clicked box and its original color
        previousBox = parentContainer.children[i];
        prevColor = color;
    });
}
