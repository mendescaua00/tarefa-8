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
const totalTestimonials = document.querySelectorAll('.testimonial-item').length;

// Novas variáveis para as funcionalidades adicionais
const darkModeToggle = document.getElementById('dark-mode-toggle');
const filterInput = document.getElementById('filter-input');
const dataTableBody = document.querySelector('#data-table tbody');
const blogContainer = document.getElementById('blog-container');
const loginForm = document.getElementById('login-form');
const loginErrorMessage = document.getElementById('login-error-message');

/*
========================================================
DADOS PARA FUNCIONALIDADES DINÂMICAS
========================================================
*/
// Array de objetos para a tabela dinâmica
const usersData = [
    { id: 1, name: 'Alice Silva', role: 'Desenvolvedora Web', status: 'Ativo' },
    { id: 2, name: 'João Santos', role: 'Gerente de Projeto', status: 'Inativo' },
    { id: 3, name: 'Carlos Oliveira', role: 'UX Designer', status: 'Ativo' },
    { id: 4, name: 'Fernanda Costa', role: 'Analista de Dados', status: 'Ativo' },
    { id: 5, name: 'Gustavo Pereira', role: 'QA Tester', status: 'Inativo' },
    { id: 6, name: 'Juliana Lima', role: 'Engenheira de Software', status: 'Ativo' },
    { id: 7, name: 'Roberto Almeida', role: 'Arquiteto de Nuvem', status: 'Ativo' },
    { id: 8, name: 'Mariana Guedes', role: 'Product Owner', status: 'Ativo' },
    { id: 9, name: 'Felipe Ramos', role: 'DevOps Engineer', status: 'Ativo' },
    { id: 10, name: 'Helena Torres', role: 'Tech Lead', status: 'Ativo' },
    { id: 11, name: 'Lucas Martins', role: 'Full-Stack Developer', status: 'Ativo' },
    { id: 12, name: 'Beatriz Castro', role: 'Backend Developer', status: 'Ativo' },
    { id: 13, name: 'Daniel Souza', role: 'Frontend Developer', status: 'Ativo' },
    { id: 14, name: 'Renata Farias', role: 'Scrum Master', status: 'Ativo' },
    { id: 15, name: 'Pedro Henrique', role: 'Mobile Developer', status: 'Ativo' },
    { id: 16, name: 'Aline Nogueira', role: 'Web Designer', status: 'Ativo' },
    { id: 17, name: 'Marcelo Pires', role: 'Data Scientist', status: 'Ativo' },
    { id: 18, name: 'Camila Ribeiro', role: 'Marketing Digital', status: 'Ativo' },
    { id: 19, name: 'Thiago Dias', role: 'Redator Técnico', status: 'Ativo' },
    { id: 20, name: 'Vitoria Nunes', role: 'Recrutadora', status: 'Ativo' }
];

// Array de objetos para o blog de notícias
const blogPosts = [
    { id: 1, title: 'O Futuro do Desenvolvimento Web', image: 'https://via.placeholder.com/600x400?text=Web+Dev', summary: 'Explore as tendências que estão moldando o futuro do desenvolvimento front-end e back-end.' },
    { id: 2, title: 'JavaScript Moderno: ES6+', image: 'https://via.placeholder.com/600x400?text=JavaScript', summary: 'Entenda as principais features do JavaScript moderno e como elas podem otimizar seu código.' },
    { id: 3, title: 'CSS Flexbox vs. Grid', image: 'https://via.placeholder.com/600x400?text=CSS+Layouts', summary: 'Uma análise comparativa sobre Flexbox e Grid para ajudá-lo a escolher a melhor ferramenta para seu projeto.' },
    { id: 4, title: 'Introdução a APIs RESTful', image: 'https://via.placeholder.com/600x400?text=APIs+Rest', summary: 'Aprenda a consumir e criar APIs RESTful para conectar diferentes sistemas e serviços.' },
    { id: 5, title: 'Design Responsivo na Prática', image: 'https://via.placeholder.com/600x400?text=Responsive+Design', summary: 'Dicas e técnicas para criar designs que se adaptam perfeitamente a qualquer dispositivo.' },
    { id: 6, title: 'Otimização de Performance Web', image: 'https://via.placeholder.com/600x400?text=Performance+Web', summary: 'Descubra como melhorar a velocidade de carregamento de suas páginas e a experiência do usuário.' }
];

/*
========================================================
FUNCIONALIDADES DE AULA (5)
========================================================
*/

/**
 * FUNCIONALIDADE 1: EXIBIR/ESCONDER ELEMENTO
 */
toggleButton.addEventListener('click', () => {
    if (paragrafoExemplo.style.display === 'none' || paragrafoExemplo.style.display === '') {
        paragrafoExemplo.style.display = 'block';
    } else {
        paragrafoExemplo.style.display = 'none';
    }
});

/**
 * FUNCIONALIDADE 2: ALTERAR COR DE FUNDO
 */
colorButton.addEventListener('click', () => {
    const cores = ['#ffcc00', '#66ccff', '#ff6666', '#99ff99', '#ff99ff'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});

/**
 * FUNCIONALIDADE 3: ADICIONAR ITEM À LISTA
 */
addItemButton.addEventListener('click', () => {
    const novoItemTexto = novoItemInput.value.trim();
    if (novoItemTexto !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = novoItemTexto;
        listaDinamica.appendChild(novoItem);
        novoItemInput.value = '';
    }
});

/**
 * FUNCIONALIDADE 4: VALIDAÇÃO DE CAMPO
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
 */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Por favor, insira um email válido.';
    } else {
        emailError.textContent = '';
        alert('Formulário de contato enviado com sucesso!');
        contactForm.reset();
    }
});

/**
 * FUNCIONALIDADE 7: CALCULADORA SIMPLES
 */
calcularButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operador = operadorSelect.value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultadoCalcSpan.textContent = 'Por favor, insira números válidos.';
        return;
    }

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
            if (num2 === 0) {
                resultadoCalcSpan.textContent = 'Divisão por zero não é permitida.';
                return;
            }
            resultado = num1 / num2;
            break;
    }

    resultadoCalcSpan.textContent = resultado.toFixed(2);
});

/**
 * FUNCIONALIDADE 8: ACORDION (SEÇÕES EXPANSÍVEIS)
 */
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});

/**
 * FUNCIONALIDADE 9: ATIVAR ANIMAÇÃO COM CLASSE
 */
animateButton.addEventListener('click', () => {
    boxAnimada.classList.add('animated');
    boxAnimada.addEventListener('animationend', () => {
        boxAnimada.classList.remove('animated');
    }, { once: true });
});

/**
 * FUNCIONALIDADE 10: CARROSSEL DE DEPOIMENTOS
 */
nextButton.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = document.querySelector('.testimonial-item').offsetWidth;
    const offset = -currentTestimonialIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

/*
========================================================
NOVAS FUNCIONALIDADES ADICIONADAS
========================================================
*/

/**
 * FUNCIONALIDADE 11: MODO ESCURO
 * Alterna a classe 'dark-mode' no corpo do documento para aplicar
 * estilos de tema escuro definidos no CSS.
 */
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

/**
 * FUNCIONALIDADE 12: TABELA DE DADOS FILTRÁVEL
 * Renderiza uma tabela a partir de um array de dados e filtra as linhas
 * com base no texto digitado no campo de pesquisa.
 */
function renderTable(data) {
    // Limpa o corpo da tabela
    dataTableBody.innerHTML = '';
    // Itera sobre o array de dados para criar as linhas da tabela
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.role}</td>
            <td>${item.status}</td>
        `;
        dataTableBody.appendChild(row);
    });
}

function filterTable() {
    const filterValue = filterInput.value.toLowerCase();
    // Filtra o array de dados original
    const filteredData = usersData.filter(user =>
        user.name.toLowerCase().includes(filterValue) ||
        user.role.toLowerCase().includes(filterValue)
    );
    // Renderiza a tabela com os dados filtrados
    renderTable(filteredData);
}

// Evento de 'input' para filtrar a tabela em tempo real
filterInput.addEventListener('input', filterTable);

// Renderiza a tabela inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderTable(usersData);
});

/**
 * FUNCIONALIDADE 13: BLOG COM CONTEÚDO DINÂMICO
 * Cria elementos HTML para cada post de blog a partir de um array de dados,
 * injetando-os no container do blog.
 */
function renderBlogPosts() {
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('blog-article');
        article.innerHTML = `
            <img src="${post.image}" alt="Imagem do artigo: ${post.title}" class="blog-image">
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-summary">${post.summary}</p>
            </div>
        `;
        blogContainer.appendChild(article);
    });
}

// Renderiza os posts do blog quando a página carrega
document.addEventListener('DOMContentLoaded', renderBlogPosts);

/**
 * FUNCIONALIDADE 14: VALIDAÇÃO DE LOGIN SIMPLES
 * Valida o formulário de login para verificar se os campos não estão vazios.
 * Neste exemplo, a validação é apenas de preenchimento.
 */
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio do formulário
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verificação de campos vazios
    if (username === '' || password === '') {
        loginErrorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Lógica de autenticação (simulada)
    if (username === 'admin' && password === '1234') {
        loginErrorMessage.textContent = 'Login realizado com sucesso!';
        loginErrorMessage.style.color = '#28a745';
        alert('Bem-vindo, ' + username + '!');
        loginForm.reset();
    } else {
        loginErrorMessage.textContent = 'Usuário ou senha inválidos.';
        loginErrorMessage.style.color = '#dc3545';
    }
});

/**
 * FUNCIONALIDADE 15: ADICIONAR ITENS COM TECLA ENTER
 * Adiciona um evento ao campo de input para que o item seja adicionado
 * quando o usuário pressionar a tecla 'Enter'.
 */
novoItemInput.addEventListener('keypress', (e) => {
    // Verifica se a tecla pressionada é a 'Enter' (código 13)
    if (e.key === 'Enter') {
        addItemButton.click(); // Simula o clique no botão de adicionar
    }
});