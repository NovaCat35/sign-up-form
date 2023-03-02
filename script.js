let inputs = document.querySelectorAll('input');

// focus class is just for styling a blue label to go into the corner (within css of course)
inputs.forEach(input => input.addEventListener('focus', (event) => {
    event.target.previousElementSibling.classList.add('focus');
}));


inputs.forEach(input => input.addEventListener('focusout', (event) => {
    console.log(event);
    let input = event.target;
    let inputID = event.target.id;
    let label = event.target.previousElementSibling;

    // add 'active' attr to class for any tampered input (after user focus-out of input)
    // this is so we don't aggressively tell user they have error right from the get-go but only 
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

// password confirmation checker



