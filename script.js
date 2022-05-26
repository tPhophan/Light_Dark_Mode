const switchToggle = document.querySelector('input[type="checkbox"]');
const iconToggle = document.querySelector('#toggle-icon');
const nav =document.querySelector('#nav');
const img1 = document.querySelector('#img1');
const imgText = document.querySelector('#imgText');

function ft_switchMode(e){
    if (e.target.checked){
        ft_darkMode();
    }
    else{
        ft_lightMode();
    }
}

function ft_darkMode(){
    document.documentElement.setAttribute('data-theme', 'dark')
    iconToggle.children[0].innerText = 'Dark Mode'
    iconToggle.children[1].classList.replace('fa-sun','fa-moon')
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    imgText.innerText = 'After';
    img1.src='img/pola_after.jpg';
}

function ft_lightMode(){
    document.documentElement.setAttribute('data-theme', '')
    iconToggle.children[0].innerText = 'Light Mode'
    iconToggle.children[1].classList.replace('fa-moon','fa-sun')
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    imgText.innerText = 'Before';
    img1.src='img/pola_before.jpg';
}

switchToggle.addEventListener('change', ft_switchMode);