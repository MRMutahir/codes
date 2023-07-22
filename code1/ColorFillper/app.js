let view = document.querySelector('.view');
let colorcode = document.querySelector('.colorcode');
let Click = document.querySelector('.Click');
let body = document.querySelector('.body');
let color = ["green", "red", "#00BFFF", "#f15025",  "pink", "#2F4F4F", "#48D1CC", "#6B8E23"
, "seagreen", "DarkOrange", "Gold", "rgb(238, 130, 238)", "#9370DB", "SlateBlue", "Chartreuse",'#d35400','#f1c40f','#1abc9c','#bdc3c7','#2c2c54','#d1ccc0','#706fd3']
console.log(body)
console.log(view);
console.log(colorcode);
console.log(Click);

Click.addEventListener('click', () => {
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = color[randomNumber];
    colorcode.textContent =color[randomNumber]
})
function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}
const reloadButton = document.getElementById('reload-button');

reloadButton.addEventListener('click', () => {
  const confirmed = window.confirm('Are you sure you want to reload the page?');
  if (confirmed) {
    location.reload();
  }
});

// let click2 = '#'
// click2.addEventListener('click',()=>{

// })
// const colorPicker = document.getElementById('colorPicker');
// colorPicker.addEventListener('input', () => {
//   const selectedColor = colorPicker.value;
//   document.body.style.backgroundColor = selectedColor;
// });


