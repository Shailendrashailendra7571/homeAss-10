const conatiner = document.getElementById("conatiner")
const button1 = document.getElementById("button1")

button1.addEventListener("click",()=> {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    conatiner.style.backgroundColor = randomColor;
});

