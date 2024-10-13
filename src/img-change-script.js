document.getElementById('cover1').addEventListener('click',function(){
        
    let scover1 = document.getElementById('cover1');
    let bgImage = window.getComputedStyle(scover1).backgroundImage;
    console.log(bgImage);

    let bcover = document.getElementById('cover');
    // bcover.style.backgroundImage = 'url(./assets/images/T-shirt/black.jpg)';
    bcover.style.backgroundImage = bgImage;
});

document.getElementById('cover2').addEventListener('click',function(){
    
    let scover2 = document.getElementById('cover2');
    let bgImage = window.getComputedStyle(scover2).backgroundImage;
    console.log(bgImage);

    let bcover = document.getElementById('cover');
    // bcover.style.backgroundImage = 'url(./assets/images/T-shirt/black.jpg)';
    bcover.style.backgroundImage = bgImage;
});

document.getElementById('cover3').addEventListener('click',function(){
    
    let scover3 = document.getElementById('cover3');
    let bgImage = window.getComputedStyle(scover3).backgroundImage;
    console.log(bgImage);

    let bcover = document.getElementById('cover');
    // bcover.style.backgroundImage = 'url(./assets/images/T-shirt/black.jpg)';
    bcover.style.backgroundImage = bgImage;
});