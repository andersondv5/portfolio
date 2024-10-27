function typeWriter(text, elementId, delay = 20) {
    let index = 0;

    function writeCharacter() {
        if (index < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(index);
            index++;
            setTimeout(writeCharacter, delay);
        }
    }

    setTimeout(writeCharacter, 1000); // Delay antes de começar a escrever
}

// Usando a função para diferentes textos
typeWriter("Design moderno com um toque de criatividade.", "text1");
typeWriter("Enquanto isso, acesse minhas redes sociais", "text2");
typeWriter("Que tal dar uma olhada no meu Linkedin ou Github?", "text3");
typeWriter("Acesse os links abaixo e entre em contato", "text4");


// darkMode

const logo = document.getElementById("toggleTheme");

logo.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// Aguarda 3 segundos antes de ocultar o carregador
setTimeout(function() {
    document.getElementById('loader').style.display = 'none'; // Oculta o carregador
    document.getElementById('content').style.display = 'block'; // Mostra o conteúdo
}, 2000); // Altere o tempo conforme necessário


