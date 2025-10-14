/*
========================================================
DECLARAÇÃO DE VARIÁVEIS E SELETORES
========================================================
*/
// Variáveis para as funcionalidades de aula (5)
const toggleButton = document.getElementById('toggle-button');
const paragrafoExemplo = document.getElementById('paragrafo-exemplo');
const colorButton = document.getElementById('color-button');
const addItemButton = document.getElementById('add-item-button');
const novoItemInput = document.getElementById('novo-item-input');
const listaDinamica = document.getElementById('lista-dinamica');
const validarNomeInput = document.getElementById('validar-nome-input');
const validarButton = document.getElementById('validar-button');
const validacaoMensagem = document.getElementById('validacao-mensagem');
const contadorButton = document.getElementById('contador-button');
const contadorDisplay = document.getElementById('contador-display');
let contadorCliques = 0;

// Variáveis para as funcionalidades extras (5)
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const calcularButton = document.getElementById('calcular-button');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operadorSelect = document.getElementById('operador');
const resultadoCalcSpan = document.getElementById('resultado-calc');
const accordionHeaders = document.querySelectorAll('.accordion-header');
const animateButton = document.getElementById('animate-button');
const boxAnimada = document.getElementById('box-animada');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselTrack = document.querySelector('.carousel-track');
let currentTestimonialIndex = 0;

/*
========================================================
FUNCIONALIDADES DE AULA (5)
========================================================
*/

/**
 * FUNCIONALIDADE 1: EXIBIR/ESCONDER ELEMENTO
 * Oculta ou mostra um parágrafo ao clicar no botão, alternando a propriedade 'display'.
 */
toggleButton.addEventListener('click', () => {
    // Verifica o estado atual do estilo 'display'
    if (paragrafoExemplo.style.display === 'none' || paragrafoExemplo.style.display === '') {
        // Se estiver oculto, mostra o elemento
        paragrafoExemplo.style.display = 'block';
    } else {
        // Se estiver visível, esconde o elemento
        paragrafoExemplo.style.display = 'none';
    }
});

/**
 * FUNCIONALIDADE 2: ALTERAR COR DE FUNDO
 * Muda a cor de fundo do corpo da página para uma cor aleatória pré-definida
 * em um array.
 */
colorButton.addEventListener('click', () => {
    const cores = ['#ffcc00', '#66ccff', '#ff6666', '#99ff99', '#ff99ff'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});

/**
 * FUNCIONALIDADE 3: ADICIONAR ITEM À LISTA
 * Cria um novo item de lista com o texto digitado em um campo de input
 * e o adiciona à lista no HTML.
 */
addItemButton.addEventListener('click', () => {
    const novoItemTexto = novoItemInput.value.trim();
    if (novoItemTexto !== '') {
        // Cria um novo elemento <li>
        const novoItem = document.createElement('li');
        // Define o conteúdo de texto do novo <li>
        novoItem.textContent = novoItemTexto;
        // Adiciona o novo <li> à lista existente
        listaDinamica.appendChild(novoItem);
        // Limpa o campo de input após adicionar o item
        novoItemInput.value = '';
    }
});

/**
 * FUNCIONALIDADE 4: VALIDAÇÃO DE CAMPO
 * Valida se o campo de input de nome está vazio. Se estiver, exibe uma
 * mensagem de erro.
 */
validarButton.addEventListener('click', () => {
    if (validarNomeInput.value.trim() === '') {
        validacaoMensagem.textContent = 'O campo de nome não pode estar vazio.';
        validacaoMensagem.style.color = '#dc3545';
    } else {
        validacaoMensagem.textContent = 'Nome validado com sucesso!';
        validacaoMensagem.style.color = '#28a745';
    }
});

/**
 * FUNCIONALIDADE 5: CONTADOR DE CLIQUES
 * Incrementa um contador a cada clique no botão e atualiza o valor exibido
 * na página.
 */
contadorButton.addEventListener('click', () => {
    contadorCliques++;
    contadorDisplay.textContent = contadorCliques;
});

/*
========================================================
FUNCIONALIDADES EXTRAS (5)
========================================================
*/

/**
 * FUNCIONALIDADE 6: VALIDAÇÃO DE EMAIL EM FORMULÁRIO
 * Adiciona um evento de 'submit' ao formulário para validar o formato do email
 * antes de enviar.
 */
contactForm.addEventListener('submit', (e) => {
    // Impede o envio padrão do formulário
    e.preventDefault();
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Por favor, insira um email válido.';
    } else {
        emailError.textContent = ''; // Limpa a mensagem de erro
        alert('Formulário enviado com sucesso!');
        contactForm.reset(); // Reseta o formulário
    }
});

/**
 * FUNCIONALIDADE 7: CALCULADORA SIMPLES
 * Realiza operações matemáticas básicas (soma, subtração, etc.) com base nos
 * valores e operador selecionados.
 */
calcularButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operador = operadorSelect.value;
    let resultado;

    // Verifica se os inputs são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultadoCalcSpan.textContent = 'Por favor, insira números válidos.';
        return;
    }

    // Estrutura de switch para executar a operação correta
    switch (operador) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            // Previne divisão por zero
            if (num2 === 0) {
                resultadoCalcSpan.textContent = 'Divisão por zero não é permitida.';
                return;
            }
            resultado = num1 / num2;
            break;
    }

    // Exibe o resultado na tela
    resultadoCalcSpan.textContent = resultado.toFixed(2); // Formata para 2 casas decimais
});

/**
 * FUNCIONALIDADE 8: ACORDION (SEÇÕES EXPANSÍVEIS)
 * Alterna a classe 'active' nos conteúdos de uma seção clicável,
 * expandindo ou recolhendo o conteúdo.
 */
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Encontra o elemento de conteúdo irmão do cabeçalho clicado
        const content = header.nextElementSibling;
        // Alterna a classe 'active' para expandir/recolher
        content.classList.toggle('active');
    });
});

/**
 * FUNCIONALIDADE 9: ATIVAR ANIMAÇÃO COM CLASSE
 * Adiciona uma classe CSS a um elemento para ativar uma animação pré-definida.
 */
animateButton.addEventListener('click', () => {
    // Adiciona a classe 'animated' para iniciar a animação
    boxAnimada.classList.add('animated');
    
    // Remove a classe após a animação terminar para que possa ser reativada
    boxAnimada.addEventListener('animationend', () => {
        boxAnimada.classList.remove('animated');
    }, { once: true });
});

/**
 * FUNCIONALIDADE 10: CARROSSEL DE DEPOIMENTOS
 * Permite navegar entre os depoimentos clicando nos botões de "próximo" e "anterior".
 */
nextButton.addEventListener('click', () => {
    // Encontra o número total de depoimentos
    const totalItems = document.querySelectorAll('.testimonial-item').length;
    // Incrementa o índice, voltando a 0 se passar do último
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalItems;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.testimonial-item').length;
    // Decrementa o índice, voltando para o último se for o primeiro
    currentTestimonialIndex = (currentTestimonialIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    // Calcula o deslocamento horizontal do carrossel
    const itemWidth = document.querySelector('.testimonial-item').offsetWidth;
    const offset = -currentTestimonialIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}