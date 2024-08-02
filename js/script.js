function mode() {
    const html = document.documentElement   

    html.classList.toggle("claro")

    const img = document.querySelector(".profile img")

    if (html.classList.contains("claro")) {
        img.setAttribute("src", "././img/Ellipse 6.svg");
        document.body.style.backgroundImage="url('./img/fundo2.svg')";
    } else{
        img.setAttribute("src", "././img/Ellipse 2.svg");
        document.body.style.backgroundImage="url('./img/Desktop\ -\ 5.svg')";
    }

}