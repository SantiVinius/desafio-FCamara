/* Mostrar e ocultar menu lateral no mobile */
var navLinks = document.getElementById('navLinks')

function showMenu() {
    navLinks.style.right = '0'
}

function hideMenu() {
    navLinks.style.right = '-20rem'
}

/* Pegar os dados de agendamento e exibir na tela */

function scheduling() {
    var office = document.getElementById('office').value;
    var workStation = document.getElementById('work-station').value;
    
    var dateInput = document.getElementById('data').value;
    
    date = new Date(dateInput);
    var formattedDate = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});



    var scheduling = document.getElementById('scheduling-info');
    scheduling.scrollIntoView();

    /* Verificar se os campos foram preenchidos */
    if (office == "" || workStation == "" || dateInput == "") {
        scheduling.innerHTML = "Por favor, preencha todos os campos.";
    } else {
        scheduling.innerHTML = `Solicitação enviada! Agendamento solicitado para o dia ${formattedDate}, no escritório de ${office}. Estação de trabalho de número ${workStation}. Entraremos em contato confirmando o agendamento!`
    }
}

/* Scroll suave na navegação*/

function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: 'smooth'})
}

document.querySelector('#a-return-about').addEventListener("click", function(event){
    event.preventDefault();

    scrollTo("#return-about");

    console.log("a-return-about")
})

document.querySelector('#a-protection').addEventListener("click", function(event){
    event.preventDefault();

    scrollTo("#protection");
})

document.querySelector('#a-scheduling').addEventListener("click", function(event){
    event.preventDefault();

    scrollTo("#scheduling");
})

document.querySelector('#a-tellme-more').addEventListener("click", function(event){
    event.preventDefault();

    scrollTo("#return-about");
})

