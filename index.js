const button = document.querySelector("#button");
const input = document.querySelector("#input");

function makeGrid(size) {
    document.querySelector("#bigContainer").innerHTML = ""
    const squareSize = 360 / size;
    for (let i = 0; i < size; i++) {
        const bigContainer = document.querySelector("#bigContainer");
        const container = document.createElement("div");
        container.classList.add("container");
        bigContainer.appendChild(container);
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.border = "1px solid black";
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener("mouseenter", () => square.style.backgroundColor = "grey")
            container.appendChild(square);
        };
    };
};

makeGrid(16);

button.addEventListener("click", function(){
    const value = input.value;
    makeGrid(value);
})