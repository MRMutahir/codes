// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (m)=>{
    if(m.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(m.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(m.target)
    string = string + m.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})