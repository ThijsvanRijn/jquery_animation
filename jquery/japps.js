const motionlink = document.querySelector('a[data-function="motion"]')
function motion (e){
    e.preventDefault;
    ijs.animate({top: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink.addEventListener('click', motion);

const motionlink1 = document.querySelector('a[data-function="motion"]')
function motion1 (e){
    e.preventDefault;
    ijs.animate1({left: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink1.addEventListener('click', motion1);

const motionlink2 = document.querySelector('a[data-function="motion"]')
function motion2 (e){
    e.preventDefault;
    ijs.animate2({right: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink2.addEventListener('click', motion2);

const motionlink3 = document.querySelector('a[data-function="motion"]')
function motion3 (e){
    e.preventDefault;
    ijs.animate3({bottom: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink3.addEventListener('click', motion3);