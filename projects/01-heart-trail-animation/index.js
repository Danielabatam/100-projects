const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    // console.log('moved')
    // console.log(event.offsetX);
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");

    const size = Math.random()*100;

    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000)

})