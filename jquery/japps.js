const motionlink = document.querySelector('a[data-function="motion"]')
function motion (e){
    e.preventDefault;
    ijs.animate({top: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink.addEventListener('click', motion);

function motionOut (e){
    e.preventDefault;
    ijs.animate({top: '-100vw'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

ijss.addEventListener('click', motionOut);



const motionlink1 = document.querySelector('a[data-function="motion1"]') // Hier moets je de data-function="motion" gelijk maken aan wat de data-functie van de link is
function motion1 (e){
    e.preventDefault;
    ijs1.animate({left: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink1.addEventListener('click', motion1);

function motionOut1 (e){
    e.preventDefault;
    ijs1.animate({left: '-100vw'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}


ijss1.addEventListener('click', motionOut1);


const motionlink2 = document.querySelector('a[data-function="motion2"]')// Hier moets je de data-function="motion" gelijk maken aan wat de data-functie van de link is
function motion2 (e){
    e.preventDefault;
    ijs2.animate({right: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

motionlink2.addEventListener('click', motion2);

function motionOut2 (e){
    e.preventDefault;
    ijs2.animate({right: '-100vw'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}

ijss2.addEventListener('click', motionOut2);

const motionlink3 = document.querySelector('a[data-function="motion3"]')// Hier moets je de data-function="motion" gelijk maken aan wat de data-functie van de link is
function motion3 (e){
    e.preventDefault;
    ijs3.animate({bottom: '0px'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
  
}

motionlink3.addEventListener('click', motion3);

function motionOut3 (e){
    e.preventDefault;
    ijs3.animate({bottom: '-100vw'}); // variable . animate ( {css-attribute: '' of `${variable}unit` }, speed )
    
}


ijss3.addEventListener('click', motionOut3);