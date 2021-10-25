const container = document.querySelector(`.container`);

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && !(i % 5 == 0)) {
        container.innerHTML += `<div class="box1 color0">fizz</div>`;
        }
        else if ((i % 5 == 0) && !(i % 3 == 0)) {
            container.innerHTML += `<div class="box1 color1">buzz</div>`;
        }
        else if ((i % 3 == 0) && (i % 5 == 0)) {
            container.innerHTML += `<div class="box1 color2">fizzbuzz</div>`;
        }
        else {
            container.innerHTML += `<div class="box1 color3">${i}</div>`;
        }
}
