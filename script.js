let num = undefined;

let form_input = document.getElementById('range');
let form_output = document.getElementById('guess-form');

function reset() {
    document.getElementById('start').disabled = false;
    document.getElementById('end').disabled = false;
    document.getElementsByTagName('button')[0].disabled = false;

    document.getElementById('guess').disabled = true;
    document.getElementsByTagName('button')[1].disabled = true;

    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
    document.getElementById('guess').value = '';
}

function setRandom(event) {
    event.preventDefault();
    document.getElementById('decision').hidden = true;

    let start = Number(document.getElementById('start').value);
    let end = Number(document.getElementById('end').value);

    if (start >= end) {
        alert('Start value must be less than end value');
        return;
    }

    num = Math.floor(Math.random() * (end - start + 1)) + start;

    let input_button = document.getElementsByTagName('button')[0];
    document.getElementById('start').disabled = true;
    document.getElementById('end').disabled = true;
    input_button.disabled = true;

    let output_val = document.getElementById('guess');
    let output_button = document.getElementsByTagName('button')[1];
    output_val.disabled = false;
    output_button.disabled = false;
}

function checkGuess(event) {
    event.preventDefault();

    let input_val = document.getElementById('guess').value;
    let input_button = document.getElementsByTagName('button')[1];

    let output_div = document.getElementById('decision');
    output_div.hidden = false;
    let output_alert = document.getElementsByClassName('alert')[0];
    let output_res = document.getElementById('result');

    if (input_val == num) {
        output_alert.classList.remove('alert-danger');
        output_alert.classList.add('alert-success');
        output_res.innerHTML = 'You guessed correctly!';
        reset();
    } else if (input_val < num) {
        output_alert.classList.add('alert-danger');
        output_res.innerHTML = 'Your guess is too low!';
    } else {
        output_alert.classList.add('alert-danger');
        output_res.innerHTML = 'Your guess is too high!';
    }
}

form_input.addEventListener('submit', setRandom);
form_output.addEventListener('submit', checkGuess);
