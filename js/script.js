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

const darkbtn = document.getElementById("toggleTheme");

darkbtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


document.getElementById('toggleTheme').addEventListener('click', function() {
    const img = this;
    if (img.src.includes('moon.svg')) {
      img.src = './img/imagens/sun.svg'; 
    } else {
      img.src = './img/imagens/moon.svg'; 
    }
  });


