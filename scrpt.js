const changeBgBtn = document.getElementById('changeBtn');
const bgContainer = document.getElementById('bgContainer');

changeBgBtn.addEventListener('click', function () {
    let randomNumberOne = Math.floor(Math.random() * 255) + 1;
    let randomNumberTwo = Math.floor(Math.random() * 255) + 1;
    let randomNumberThree = Math.floor(Math.random() * 255) + 1;
    const bgColor = `rgb(${randomNumberOne}, ${randomNumberTwo}, ${randomNumberThree})`;

    document.body.style.backgroundColor = bgColor;
})