// Dados dos temas
const themes = {
    diabetes: {
        title: "Diabetes",
        whatIs: "A diabetes é uma doença crônica que ocorre quando o pâncreas não produz insulina suficiente ou quando o corpo não consegue usar efetivamente a insulina que produz.",
        video: "https://www.youtube.com/embed/VIDEO_ID_DIABETES", // Substitua pelo ID real do vídeo
        eat: ["Vegetais folhosos", "Peixes ricos em ômega-3", "Nozes e sementes", "Grãos integrais"],
        avoid: ["Açúcares refinados", "Bebidas açucaradas", "Alimentos processados", "Carboidratos simples"],
        fact: "Cerca de 422 milhões de pessoas no mundo têm diabetes, segundo a OMS.",
        link: "https://www.who.int/news-room/fact-sheets/detail/diabetes"
    },
    hipertensao: {
        title: "Hipertensão",
        whatIs: "A hipertensão arterial, ou pressão alta, é uma condição em que a força do sangue contra as paredes das artérias é muito alta.",
        video: "https://www.youtube.com/embed/VIDEO_ID_HIPERTENSAO", // Substitua pelo ID real do vídeo
        eat: ["Frutas e vegetais", "Produtos lácteos com baixo teor de gordura", "Grãos integrais", "Peixes e aves"],
        avoid: ["Sal em excesso", "Alimentos gordurosos", "Bebidas alcoólicas em excesso", "Café em grandes quantidades"],
        fact: "A hipertensão é conhecida como 'assassino silencioso' porque muitas vezes não apresenta sintomas.",
        link: "https://www.who.int/news-room/fact-sheets/detail/hypertension"
    },
    obesidade: {
        title: "Obesidade",
        whatIs: "A obesidade é uma doença crônica caracterizada pelo acúmulo excessivo de gordura corporal que pode prejudicar a saúde.",
        video: "https://www.youtube.com/embed/VIDEO_ID_OBESIDADE", // Substitua pelo ID real do vídeo
        eat: ["Vegetais e frutas", "Proteínas magras", "Grãos integrais", "Gorduras saudáveis"],
        avoid: ["Alimentos ricos em açúcar", "Fast food", "Bebidas açucaradas", "Porções excessivas"],
        fact: "A obesidade afeta mais de 650 milhões de adultos em todo o mundo.",
        link: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight"
    }
};

// Elementos do DOM
const contentArea = document.getElementById('content-area');
const diabetesCard = document.getElementById('diabetes');
const hipertensaoCard = document.getElementById('hipertensao');
const obesidadeCard = document.getElementById('obesidade');

// Função para mostrar o conteúdo do tema
function showContent(themeKey) {
    const theme = themes[themeKey];
    const eatList = theme.eat.map(item => `<li>${item}</li>`).join('');
    const avoidList = theme.avoid.map(item => `<li>${item}</li>`).join('');

    contentArea.innerHTML = `
        <div class="content-wrapper">
            <h2>${theme.title}</h2>
            <section>
                <h3>O que é</h3>
                <p>${theme.whatIs}</p>
            </section>
            <section>
                <h3>Assista e aprenda</h3>
                <iframe width="560" height="315" src="${theme.video}" frameborder="0" allowfullscreen></iframe>
            </section>
            <section>
                <h3>O que comer</h3>
                <ul>${eatList}</ul>
            </section>
            <section>
                <h3>Evitar</h3>
                <ul>${avoidList}</ul>
            </section>
            <section>
                <h3>Você sabia?</h3>
                <p>${theme.fact}</p>
            </section>
            <section>
                <h3>Saiba mais</h3>
                <a href="${theme.link}" target="_blank">Fonte confiável</a>
            </section>
            <button id="back-btn" class="back-btn">Voltar</button>
        </div>
    `;

    // Adicionar evento ao botão Voltar
    document.getElementById('back-btn').addEventListener('click', showWelcome);

    // Animação: adicionar classe para fade in
    contentArea.classList.add('show');
}

// Função para mostrar a tela de boas-vindas
function showWelcome() {
    contentArea.innerHTML = `
        <h2>Bem Vindo!</h2>
        <p>Escolha um tema acima para aprender mais sobre nutrição saudável.</p>
    `;
    contentArea.classList.remove('show');
}

// Adicionar event listeners aos cards
diabetesCard.addEventListener('click', () => showContent('diabetes'));
hipertensaoCard.addEventListener('click', () => showContent('hipertensao'));
obesidadeCard.addEventListener('click', () => showContent('obesidade'));