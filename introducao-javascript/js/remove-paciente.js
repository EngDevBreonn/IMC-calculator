var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {
        event.target.parantNode.remove();
    }, 500);
});

