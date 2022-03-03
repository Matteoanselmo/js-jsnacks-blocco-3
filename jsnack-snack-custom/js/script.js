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