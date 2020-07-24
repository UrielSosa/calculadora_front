/*Helpers*/
let qs = element => document.querySelector(element);
let qsa = element => document.querySelectorAll(element);

/*Propiedades de la calcu*/
var propieties = {
    teclas: qsa('li'),
    action: null,
    digit: null,
    operations: qs('#operaciones'),
    cantSig: 0,
    cantDeci: false,
    result: false,
}


/*Metodos de la calcu*/
let methods = {
    inicio: () => {
        propieties.teclas.forEach(tecla => {
            tecla.addEventListener('click', methods.pressButton);
        });
    },
    pressButton: e => {
        propieties.action = e.target.getAttribute('class');
        propieties.digit = e.target.innerHTML;
        methods.calculator(propieties.action, propieties.digit)
    },
    calculator: (action, digit) => {
        switch (action) {
            case "num":
                propieties.cantSig = 0;
                if (propieties.operations.innerHTML == 0) {
                    propieties.operations.innerHTML = digit;
                }else{
                    if (!propieties.result) {
                        propieties.operations.innerHTML += digit;
                    }
                }
                break;

            case "sig":
                propieties.cantSig++
                propieties.cantDeci = false;
                propieties.result = false;
                if (propieties.cantSig == 1) {
                    if (propieties.operations.innerHTML == 0) {
                        propieties.operations.innerHTML = 0;    
                    }else{
                        propieties.operations.innerHTML += digit;
                    }
                }
                break;

            case "deci":
                if (!propieties.cantDeci) {
                    propieties.operations.innerHTML += digit;
                    propieties.cantDeci = true;
                }
                break;
            case "equal":
                propieties.result = true;
                propieties.operations.innerHTML = eval(propieties.operations.innerHTML);
                break;
            default:
                console.log('Esta acción no está definida');
                break;
        }
    },
    deleteCalculator: () => {
     propieties.operations.innerHTML = 0;   
    }
}

methods.inicio();