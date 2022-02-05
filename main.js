'use strict';

    const button = document.getElementById('button');
    const header = document.getElementById('header');
    const musk = document.querySelector('.musk');

    button.addEventListener('click', ()=> {

        header.classList.toggle('open');
                
                musk.addEventListener('click', ()=> {
                    header.classList.remove('open');
                    });
                    
                });
               
