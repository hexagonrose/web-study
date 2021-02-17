const getNumber=document.querySelector('.guess'),
numberBox=getNumber.querySelector('input[type=text]'),
clickBox=getNumber.querySelector('input[type=button]'),
printArea=document.querySelector('.print'),
numMachine=document.querySelector('.machine'),
resultArea=document.querySelector('.result'),
rangeArea=document.querySelector('.range');

function printValue(val1,val2){
    printArea.innerHTML=`You choose ${val1} the machine choose ${val2}`;
    if (val1===val2) {
        resultArea.innerHTML='You win!';
    } else {
        resultArea.innerHTML='You lost lol';
    }
}

function handleSubmit(event){
    const numValue=parseInt(numberBox.value);
    const machineValue=Math.floor(Math.random()*numMachine.value);
    printValue(numValue,machineValue);
    }

function showRange(){
    const rangeValue=numMachine.value;
    rangeArea.innerHTML = `Generate a number between 0 and ${rangeValue}`;
}


function init(){
    clickBox.addEventListener('click',handleSubmit);
}
init();