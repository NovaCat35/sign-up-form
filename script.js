let inputs = document.querySelectorAll('input');

// focus class is just for styling a blue label to go into the corner (within css of course)
inputs.forEach(input => input.addEventListener('focus', (event) => {
    event.target.previousElementSibling.classList.add('focus');
}));


inputs.forEach(input => input.addEventListener('focusout', (event) => {
    let input = event.target;
    let inputID = event.target.id;
    let label = event.target.previousElementSibling;

    // Add 'active' attr to class for any tampered input (after user focus-out of input).
    // This is so we don't aggressively tell user they have error right from the get-go but only 
    // when they go back into focus to correct the mistake, haha :9
    input.classList.add('active');

    // get rid of 'focus' if nothing modified after focus-out
    if(placeholderActive(inputID)) {
        label.classList.remove('focus');
    }
}));

function placeholderActive(selector) {
    return document.querySelector('#' + selector + ':placeholder-shown');
}

// --- Password Confirmation Checker ---
let passInput1 = document.querySelector('#password1');
let passInput2 = document.querySelector('#password2');

password2.addEventListener('input', () => {
    checkPasswords(passInput1.value, passInput2.value);
    if (passInput2.validity.valid) {
        console.log('VALID PASS');
        passInput2.classList.remove('invalidPassword');
    } else {
        console.log('INVALID PASS');
        passInput2.classList.add('invalidPassword');
    }
});

function checkPasswords(p1, p2) {
    if(p1 !== p2){
        console.log('ERROR');
        passInput2.setCustomValidity(' ');
    } else {
        passInput2.setCustomValidity("");
    }
    passInput2.reportValidity();
}



