const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')
const inputMessage = document.querySelector('.message')
const inputButton = document.querySelector('.form_btn')



inputButton.addEventListener('click', (e) =>{
    e.preventDefault();

    if(inputName.value == ''){
        alert('Pole "imię" nie może być puste!')
    }
    else if(inputEmail.value == ''){
        alert('Pole "e-mail" nie może być puste!')
    }
    else if(inputMessage.value == ''){
        alert('Najpierw wpisz wiadomość!')
    }
    else{
        window.location.href = "mailto:elektronik@zsejg.edu.pl";
    }
})