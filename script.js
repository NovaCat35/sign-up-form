// add 'active' attr to class for any tampered input (after user focus-out)
let inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('focusout', (event) => {
    event.target.classList.add('active');
}));

// password confirmation checker



