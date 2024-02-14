"use strict"

let p_tag=document.querySelectorAll('#cal');
let h1_tag=document.getElementById('hea')
let btn=document.getElementById('col');


btn.addEventListener('click',theme);

function theme(){
    if(btn.textContent=='Dark Mode'){
        btn.classList.toggle('btncol');
        btn.innerText="Light Mode"
        document.body.classList.toggle('bdycolor');
        p_tag.forEach(x => {
            x.classList.toggle('pcolor')
        });
        h1_tag.classList.toggle('hcolor');
    }
    else{
        btn.classList.toggle('btncol');
        btn.innerText="Dark Mode"
        document.body.classList.toggle('bdycolor');
        p_tag.forEach(x => {
            x.classList.toggle('pcolor')
        });
        h1_tag.classList.toggle('hcolor');

    }
}

