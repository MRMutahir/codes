let dec = document.querySelector('.DECREASE');
let res = document.querySelector('.RESET');
let inc = document.querySelector('.INCREASE');
let number = document.querySelector('.number');
console.log(dec);
console.log(res);
console.log(inc);
console.log(number);

let a = 0;
dec.addEventListener('click', () => {
    number.textContent = a--;
    number.style.color = "red";
})
inc.addEventListener('click', () => {
    number.textContent = a++;
    number.style.color = "green";
})
res.addEventListener('click', () => {
        number.textContent = ''
    })
    // const confirm = window.confirm('Are you sure you want to reload the page?')
    // if (confirm) {

//     location.reload()
// }