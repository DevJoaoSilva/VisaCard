// Adding select options

const year = new Date().getFullYear();
const lastYear = year + 10;

for(let i = year; i <= lastYear; i++){
    let small = i.toString().substring(2);
    let op = document.createElement('option');
    op.value = small;
    op.innerHTML = i;
    document.querySelector('#expire-y').appendChild(op);
}


// Card Number ---------------------------
document.querySelector('#form-numb')
.addEventListener('focus', ()=>{
    document.querySelector('#card-numb').style.border = '1px solid white';
    document.querySelector('#card-numb').style.boxShadow = '0px 0px 5px white';
});
document.querySelector('#form-numb')
.addEventListener('focusout', ()=>{
    document.querySelector('#card-numb').style.border = '0px solid white';
    document.querySelector('#card-numb').style.boxShadow = 'none';
});

document.querySelector('#form-numb')
.addEventListener('keyup', e=>{
    
    const numValue = e.target.value;
    const numLength = numValue.length;

    if(e.keyCode == 8){
       changeBackspaceValues(numLength);
    } else{
        
        if(numLength < 5){
            resetNubValues();
            changeNubValues(1, numLength, numValue[numLength - 1]);
        }
        else if(numLength < 9){
            resetNubValues();
            changeNubValues(2, numLength, '*');
        }
        else if(numLength < 13){
            resetNubValues();
            changeNubValues(3, numLength, '*');
        }
        else if(numLength < 17){
            resetNubValues();
            changeNubValues(4, numLength, numValue[numLength - 1]);
        }
    }
    
});
function resetNubValues() {
    let numValue = document.querySelector('#form-numb').value;
    let lenghtForm = document.querySelector('#form-numb').value.length;

    for (let i = 1; i < lenghtForm; i++) {
        if(i < 5){
            changeNubValues(1, i, numValue[i - 1]);
        }
        else if(i < 9){
            changeNubValues(2, i, '*');
        }
        else if(i < 13){
            changeNubValues(3, i, '*');
        }
        else if(i < 17){
            changeNubValues(4, i, numValue[i - 1]);
        }
    }
    for (let i = lenghtForm + 1; i < 17; i++) {
        if(i < 5){
            changeNubValues(1, i, '#');
        }
        else if(i < 9){
            changeNubValues(2, i, '#');
        }
        else if(i < 13){
            changeNubValues(3, i, '#');
        }
        else if(i < 17){
            changeNubValues(4, i, '#');
        }
    }
}

function changeNubValues(group, position, value) {
    document.querySelector('#g'+group+position).innerHTML = value;
}

function changeBackspaceValues(length) {
    resetNubValues();
}

// Card Holder ---------------------------
document.querySelector('#form-hold')
.addEventListener('focus', ()=>{
    document.querySelector('#card-holder').style.border = '1px solid white';
    document.querySelector('#card-holder').style.boxShadow = '0px 0px 5px white';
});
document.querySelector('#form-hold')
.addEventListener('focusout', ()=>{
    document.querySelector('#card-holder').style.border = '0px solid white';
    document.querySelector('#card-holder').style.boxShadow = 'none';
});

document.querySelector('#form-hold')
.addEventListener('keyup', e=>{
    
    const numValue = e.target.value;
    const numLength = numValue.length;

    resetHoldValues();
    if(e.keyCode == 8  && numLength == 0){
        resetHoldValues();
    } else{
        if(numLength > 0){
            document.querySelector('#card-hold').innerHTML += numValue[numLength - 1];
        }
    }
});

function resetHoldValues() {
    let numValue = document.querySelector('#form-hold').value;
    let lenghtForm = document.querySelector('#form-hold').value.length;

    document.querySelector('#card-hold').innerHTML = '';
    if(lenghtForm > 0){
        for (let i = 1; i < lenghtForm; i++) {
            document.querySelector('#card-hold').innerHTML += numValue[i - 1];
        }
    }
}

// Card Expire ---------------------------
document.querySelectorAll(".expire select").forEach(select =>{
    select.addEventListener('focus', ()=>{
        document.querySelector('#card-expires').style.border = '1px solid white';
        document.querySelector('#card-expires').style.boxShadow = '0px 0px 5px white';
    });
    select.addEventListener('focusout', ()=>{
        document.querySelector('#card-expires').style.border = '0px solid white';
        document.querySelector('#card-expires').style.boxShadow = 'none';
    });
    select.addEventListener('change', (e)=>{
            let expireId = e.target.id;
            if(expireId === 'expire-m'){
                document.querySelector("#card-expires").children[1].innerHTML = document.querySelector("#" + expireId).value;
            }
            else if(expireId === 'expire-y'){
                document.querySelector("#card-expires").lastElementChild.innerHTML = document.querySelector("#" + expireId).value;
            }
            
        });
})

// Card CVV ---------------------------
document.querySelector('#cvv')
.addEventListener('focus', ()=>{
    document.querySelector('.card').style.transform = "rotateY(180deg) translateY(-50%)";
    document.querySelector('#card-front').style.display = 'none';

    setTimeout(()=>{
        document.querySelector('#card-back').style.display = 'flex';
    }, 200);
});

document.querySelector('#cvv')
.addEventListener('focusout', ()=>{
    document.querySelector('.card').style.transform = "rotateY(0) translateY(-50%)";
    document.querySelector('#card-back').style.display = 'none';

    setTimeout(()=>{
        document.querySelector('#card-front').style.display = 'flex';
    }, 200);
});

document.querySelector('#cvv')
.addEventListener('keyup', e=>{
    
    const numValue = e.target.value;
    const numLength = numValue.length;

    if(e.keyCode == 8){
        if(numLength <= 2){
            document.querySelector('#card-cvv div').innerHTML = '';
            for(let i = 1; i <= numLength; i++){
                document.querySelector('#card-cvv div').innerHTML += '*';
            }
        }
    } else{   
        if(numLength <= 3){
            console.log(numLength);
            document.querySelector('#card-cvv div').innerHTML += '*';
        }
    }
});