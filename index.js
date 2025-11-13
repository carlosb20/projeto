const play = document.querySelector('.play');
const pm4 = document.querySelector('.pm4');
const darkModeToggle = document.querySelector('.dark');
const barra = document.getElementById('barra');
const imagem_img = document.querySelector('.imagem img');
// const evento_div = document.querySelector('.evento div');
const section_id = document.querySelectorAll('section');
const menu1 = document.querySelector('.menu');

darkModeToggle.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '#d1cacaff' : 'black';
    darkModeToggle.style.filter = document.body.style.backgroundColor === 'black' ? 'invert(1)' : 'invert(0)';
    barra.style.color = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    imagem_img.style.border = document.body.style.backgroundColor === 'black' ? '5px solid rgba(227, 217, 217, 1)' : '5px solid rgba(236, 153, 19, 1)';
   
    section_id.forEach((section) => {
        console.log(section.className =='evento');
       section.className =='evento' ? section.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '#ddd1d13a' : 'rgba(159, 131, 88, 1)' : null;
        
    });
})



pm4.addEventListener('click', () => {
   if (!play.querySelector('video')) {
        play.style.display = 'flex';
        play.style.justifyContent = 'center';
        play.style.alignItems = 'center';
        play.style.width = '100%';
        play.style.height = '100%';
        play.style.padding = '10px';
        play.style.marginTop = '10px';
        play.style.borderRadius = '5px';
        play.style.backgroundColor = 'rgba(116, 182, 85, 0.33)';
        
        const video = document.createElement('video');

        video.src = './portifolio/video/videoaula.mp4';

        video.style.width = '100%';
        video.controls = true;
        play.appendChild(video);
    }else {
        play.style.padding = '0px';
        play.querySelector('video').remove();
        
    }
});

const pm42 = document.querySelector('.pm4-2');
const play2 = document.querySelector('.play2');

pm42.addEventListener('click', () => {
    if (!play2.querySelector('video')) {
        play2.style.display = 'flex';
        play2.style.justifyContent = 'center';
        play2.style.alignItems = 'center';
        play2.style.width = '100%';
        play2.style.height = '100%';
        play2.style.padding = '10px';
        play2.style.marginTop = '10px';
        play2.style.borderRadius = '5px';
        play2.style.backgroundColor = 'rgba(116, 182, 85, 0.33)';
        const video = document.createElement('video');
        video.src = './portifolio/video/jogo-matematica.mp4';
        video.style.width = '100%';
        video.controls = true;
        play2.appendChild(video);
    }else {
        play2.style.padding = '0px';
        play2.querySelector('video').remove();
        
    }

});

const pm43 = document.querySelector('.pm4-3');
const play3 = document.querySelector('.play3');

pm43.addEventListener('click', () => {
    if (!play3.querySelector('video')) {
        play3.style.display = 'flex';
        play3.style.justifyContent = 'center';
        play3.style.alignItems = 'center';
        play3.style.width = '100%';
        play3.style.height = '100%';
        play3.style.padding = '10px';
        play3.style.marginTop = '10px';
        play3.style.borderRadius = '5px';
        play3.style.backgroundColor = 'rgba(116, 182, 85, 0.33)';

        const video = document.createElement('video');
        video.src = './portifolio/video/sistema-bancario.mp4';
        video.style.width = '100%';
        video.controls = true;
        play3.appendChild(video);
    }else {
        play3.style.padding = '0px';
        play3.querySelector('video').remove(); 
        
    }
});


const pm44 = document.querySelector('.pm4-4');
const play4 = document.querySelector('.play4');

pm44.addEventListener('click', () => {
    if (!play4.querySelector('video')) {
        play4.style.display = 'flex';
        play4.style.justifyContent = 'center';
        play4.style.alignItems = 'center';
        play4.style.width = '100%';
        play4.style.height = '100%';
        play4.style.padding = '10px';
        play4.style.marginTop = '10px';
        play4.style.borderRadius = '5px';
        play4.style.backgroundColor = 'rgba(116, 182, 85, 0.33)';

        const video = document.createElement('video');
        video.src = './portifolio/video/django-video.mp4';
        video.style.width = '100%';
        video.controls = true;
        play4.appendChild(video);
    }else {
        play4.style.padding = '0px';
        play4.querySelector('video').remove(); 
        
    }
});


const tele = document.querySelector('.tela span');
const menu = document.querySelector('.menu');



tele.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        
    } else {
        menu.style.display = 'none';
    }
    
});

const lick = document.querySelectorAll('.ul01 li a.link');

lick.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = link.getAttribute('href');
        const target = document.querySelector(targetSelector);
        if (target) {
            const heade = document.querySelector('header').offsetHeight;
            
            const targetPosition = target.offsetTop - heade - 20; 
    
            window.scroll({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
    });
});

