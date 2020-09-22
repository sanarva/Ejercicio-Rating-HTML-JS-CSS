//Función usada para cambiar de color la huella cuando hacemos click en ella. Con el primer for lo que hacemos es quitar la clase activePaw de todos los elementos para luego, en el segundo for, ponérsela a los elementos que le correspondan.
function changeColorClick(itemChoosen) {
    let removeColorPaw = document.getElementsByClassName("fa-paw");
    for (let i = 0; i < removeColorPaw.length; i++) {
        removeColorPaw[i].classList.remove("activePaw");
    }

    for (let j = 1; j <= itemChoosen; j++) {
        let colorPaw = document.getElementById("positionPaw" + j);
        colorPaw.classList.add("activePaw");
    }
}

//Para quitar la clase al hacer click fuera de las huellas, usaremos target
//Aquí estoy añadiendo el evento "click" al id "body", por lo que solo hace caso si clico en el body
document.getElementById("body").addEventListener("click", cleanColor);

function cleanColor(e) {

    if (e.target.nodeName != "I") {
        let removeColorPaw = document.getElementsByClassName("fa-paw");
        for (let i = 0; i < removeColorPaw.length; i++) {
            removeColorPaw[i].classList.remove("activePaw");
        }
    }
}
