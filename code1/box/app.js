let main = document.querySelector('.main');
console.log(main);
let allBox = document.querySelectorAll('child');
console.log(allBox);
// let a = document.getElementsByClassName("A");
// console.log(a)
let a = document.querySelector(".A");
let b = document.querySelector(".B");
let c = document.querySelector(".C");
let d = document.querySelector(".D");
let click = document.querySelector("button");
click.addEventListener('click',()=>{
    a.style.backgroundColor = 'green';
})
let x = main.childNodes[1];
console.log(x);
x.addEventListener('click',()=>{
    b.style.backgroundImage =  "url('https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg')"
})
// console.log(a);
// console.log(click);
// console.log(b);
// console.log(c);
// console.log(d);
// let child_2 = item1.firstChild.nodeValue;
// console.log(child.firstChild.nodeValue);