const btnUp = document.querySelector('.btn--scroll-up');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');

function isHeaderScrolling() {
    if (document.documentElement.scrollTop > 700) {
        header.classList.add('minimized');
        logo.classList.add('logo-minimized');
        btnUp.classList.remove('hide');
        } else {
            header.classList.remove('minimized');
            logo.classList.remove('logo-minimized');
            btnUp.classList.add('hide');
        }
    };

window.onscroll = () => {
    isHeaderScrolling();
};

btnUp.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.empty-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Désolé, aucune fonctionnalité correspondante !');
        });
    });
});