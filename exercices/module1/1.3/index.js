let clics = 0;

const text1 = document.querySelector('#blabla');

window.addEventListener('click', () => {
    clics++;
    if(clics >= 5 && clics <= 9){
        text1.innerHTML = "Bravo, bel échauffement !";
    }
    if(clics >= 10){
        text1.innerHTML = "Vous êtes passé maître en l'art du clic !";
    } else {
        text1.innerHTML = "Clics nombre " + clics;
    }
})