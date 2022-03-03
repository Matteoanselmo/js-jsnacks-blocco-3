const arrayNumber = [1 , 2 , 3 , 4 , 5 , 6 , 7];

function oddOrEven(arrayInex){
    if(arrayInex % 2 == 0){
        return true;
    }else{
        return false;
    }
}

for(let i = 0; i < arrayNumber.length; i++){
    if(oddOrEven(arrayNumber[i])){
        document.getElementById('rosso').innerHTML += ` ${arrayNumber[i]} è pari <br>`;
    }else{
        document.getElementById('verde').innerHTML += ` ${arrayNumber[i]} è dispari <br>`;
    }
    
}

function somma(firstNumber , secondNumber){
    if( (firstNumber + secondNumber) % 2 == 0 ){
        return true;
    }else{
        return false;
    }
}

const userFirstNumber = parseInt(prompt('inserisci primo numero'));
const userSecondNumber = parseInt(prompt('inserisci secondo numero'));
if(somma(userFirstNumber , userSecondNumber)){
    console.log('è pari');
}else{
    console.log('è dispari');
}