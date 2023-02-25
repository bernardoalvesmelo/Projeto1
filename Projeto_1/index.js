const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

context.fillRect(0, 0, canvas.width, canvas.height);

const createTriangleButton = document.getElementById("createTriangleButton");

createTriangleButton.addEventListener("click", () => {
    let side1 = parseFloat(document.getElementById("side1").value);
    let side2 = parseFloat(document.getElementById("side2").value);
    let side3 = parseFloat(document.getElementById("side3").value);

    let isValidTriangle = (side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1;

    if (isValidTriangle) {
        drawTriangle(side1, side2, side3);
    }
    else {
        alert("Triângulo inválido");
    }
});

function drawTriangle(side1, side2, side3) {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let longerSide = side1 > side2 ? side1 : side2;

    let x = (canvas.width - longerSide) / 2;
    let y = (canvas.height - side3) / 2;

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + side1, y);
    context.lineTo(x + side2, y + side3);
    context.closePath();

    context.fillStyle = "#0000ff";
    context.fill();
}