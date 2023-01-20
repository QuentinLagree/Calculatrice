let display = document.querySelector(".calc")
let buttons = document.querySelectorAll("span.button")
let answer;
let result;

buttons.forEach(button => button.addEventListener("click", (e) => {
    switch (button.innerHTML) {
        case "AC":
            answer = null
            display.innerHTML = null
        break;
        case "C":
            display.innerHTML = null
        break;
        case "Del":
            display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length-1);
        break;
        case "=":
            let editStr = display.innerHTML.replace(/x/g, '*');
            editStr = editStr.replace(/,/g, '.');
            try {
                result = eval(editStr)
                if (result === Infinity || result === NaN) {
                    display.innerHTML = "ERREUR"
                    return;
                }
                display.innerHTML = result
                answer = result
            } catch (error) {
                display.innerHTML = "ERREUR DE SYNTAXE"
            }
        break;
        case "Ans":
        if (answer) {
            display.innerHTML += result
        }
        break;
        default:
            e.preventDefault()
            /*
                Si la longueur est au maximum donc 22 alors on ne peut plus écrire
                Si la longueur du champs est de 0 et que l'on veut mettre des signes de calcule alors on ne peux pas sauf pour le plus et le moins
                Si le dernier caractère est un signe de calcule et que l'on veux mettre un signe de calcule alors on supprime l'ancien signe et on met le nouveau
                Sinon on met le caractère choisis de base.
            */

            if (display.innerHTML.length !== 22) {
                if (display.innerHTML.length < 1) {
                    if (button.innerHTML === "+" || button.innerHTML === "-") {
                        display.innerHTML += button.innerHTML
                    }
                } else {
                    if ((display.innerHTML.substr(-1, 1) === "+" || display.innerHTML.substr(-1, 1) === "-" || display.innerHTML.substr(-1, 1) === "/" || display.innerHTML.substr(-1, 1) === "x") && (button.innerHTML === "+" || button.innerHTML === "-" || button.innerHTML === "/" || button.innerHTML === "x")) {
                        display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length-1);
                        display.innerHTML += button.innerHTML
                    }
                }
                display.innerHTML += button.innerHTML
            }
        }
}))