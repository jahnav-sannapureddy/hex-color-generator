window.onload = function(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const btn = document.getElementById("btn");
    const copybtn = document.getElementById("copy");
    const colorTxt = document.querySelector(".color");
    btn.addEventListener("click", () => {
        var color = "#";
        for(let i=0; i<6; i++){
            color += hex[(Math.floor(Math.random() * hex.length))];
        }
        colorTxt.textContent = color;
        document.body.style.backgroundColor = color;
    })

    copybtn.addEventListener('click', () => {
        navigator.clipboard.writeText(colorTxt.textContent)
    })

}