const buttonsCalc = document.querySelectorAll('.number-btn');
const numbersCalc = document.querySelectorAll('.number-fct');
const buttonsToClear = document.querySelectorAll('.cce-btn');
const buttonClear = document.querySelector('#btn-c');
const buttonCToFix = document.querySelector('#btn-ce');
const numberOne = document.querySelector('#btn-1');
const numberTwo = document.querySelector('#btn-2');
const numberThree = document.querySelector('#btn-3');
const numberFour = document.querySelector('#btn-4');
const numberFive = document.querySelector('#btn-5');
const numberSix = document.querySelector('#btn-6');
const numberSeven = document.querySelector('#btn-7');
const numberEight = document.querySelector('#btn-8');
const numberNine = document.querySelector('#btn-9');
const numberZero = document.querySelector('#btn-0');
const SimbolPlus = document.querySelector('#btn-plus');
const SimbolMinus = document.querySelector('#btn-minus');
const SimbolDivison = document.querySelector('#btn-division');
const SimbolTimes = document.querySelector('#btn-times');
const SimbolPower = document.querySelector('#btn-power');
const SimbolEquals = document.querySelector('#btn-equals');
const SimbolPoint = document.querySelector('#btn-point');
const SimbolCE = document.querySelector('#btn-ce');
const SimbolC = document.querySelector('#btn-c');
const visor = document.querySelector('.visor');
const displayVisor = document.querySelector('.display-visor');
const recentValue = document.querySelector('.recent-values');
const visorValue = document.querySelector('.valor-atual');
const valueStored = document.querySelector('.values-store');
const SimbolVisor = document.querySelector('.simbol-to-calc');
const SimbolsToCalc = document.querySelectorAll('.simbol-calc');

function clearAll() {
    valueStored.innerHTML = '';
    SimbolVisor.innerHTML = '';
    visorValue.innerHTML = 0;
};

function clearTheLastNumber() {
    const visorValueLen = visorValue.textContent.length;
    const newText = visorValue.textContent.substring(0, visorValueLen - 1) + '';
    visorValue.textContent = newText;
    if (visorValue.textContent == '') {
        visorValue.innerHTML = 0;
    }
}


// When clear buttons are clicked
buttonsToClear.forEach(clearCalc => {
    clearCalc.addEventListener('click', (event) => {
        //Clear the whole process
        if (event.target.id == "btn-c") {
            clearAll();
        }

        //Clear the last number
        if (event.target.id == "btn-ce") {
            clearTheLastNumber();
        }
    });
});



//When any number is clicked
numbersCalc.forEach(button => {
    button.addEventListener('click', (event) => {

        //When a number is pressed, if there's no other number in the display, except the alone zero, the 0 will be replaced
        if (visorValue.textContent == 0) {
            if (visorValue.textContent.includes('.')) {
                //Nothing happens
            } else {
                visorValue.innerHTML = '';
            }
        }

        //Verify if the code has a point and if the shown number is zero
        if (visorValue.textContent == '') {
            if (event.target.id == 'btn-point') {
                if (visorValue.textContent.includes(`${event.target.textContent}`)) {
                    //Nothing happens
                } else {
                    visorValue.innerHTML = 0;
                }
            }
        }

        //If the amount of numbers is greater than 9 indexes, nothing will be add
        const visorValueLen = visorValue.textContent.length;
        if (visorValueLen < 9) {
            visorValue.innerHTML += `${event.target.textContent}`
        } else {
            alert(visorValueLen)
        }

    });
});



//Define which operation the calculator is going to do
SimbolsToCalc.forEach(simbols => {
    simbols.addEventListener('click', (event) => {
        SimbolVisor.innerHTML = `${event.target.textContent}`;
        valueStored.innerHTML = visorValue.textContent;
        visorValue.innerHTML = 0;

        if (SimbolVisor.textContent == event.target.textContent) {

        }
    });
});

//What happens when the "equals button is pressed"
SimbolEquals.addEventListener('click', () => {
    if (SimbolsToCalc == '') {

    } else {

        const storeValue = parseFloat(valueStored.textContent) || 0; //Changing the type of the string valueStored
        const currentValue = parseFloat(visorValue.textContent)|| 0;//Changing the type of the string visorValue


        //Every functionality of a calculator   
        if (SimbolVisor.textContent == SimbolPlus.textContent) {
            valueStored.innerHTML = `${storeValue} + ${currentValue}`;
            SimbolVisor.innerHTML = SimbolEquals.textContent;
            visorValue.innerHTML = `${storeValue + currentValue}`;
        }
        else if (SimbolVisor.textContent == SimbolMinus.textContent) {
            valueStored.innerHTML = `${storeValue} - ${currentValue}`;
            SimbolVisor.innerHTML = SimbolEquals.textContent;
            visorValue.innerHTML = `${storeValue - currentValue}`;
        }
        else if (SimbolVisor.textContent == SimbolTimes.textContent) {
            valueStored.innerHTML = `${storeValue} * ${currentValue}`;
            SimbolVisor.innerHTML = SimbolEquals.textContent;
            visorValue.innerHTML = `${storeValue * currentValue}`;
        }
        else if (SimbolVisor.textContent == SimbolDivison.textContent) {
            if (currentValue == 0) {
                visorValue.innerHTML = 'Impossible operation'
            } else {
                valueStored.innerHTML = `${storeValue} / ${currentValue}`;
                SimbolVisor.innerHTML = SimbolEquals.textContent;
                visorValue.innerHTML = `${storeValue / currentValue}`;
            }
        }
        else if (SimbolVisor.textContent == SimbolPower.textContent) {
            valueStored.innerHTML = `${storeValue} ^ ${currentValue}`;
            SimbolVisor.innerHTML = SimbolEquals.textContent;
            visorValue.innerHTML = `${storeValue ** currentValue}`;
        }
    }
});

