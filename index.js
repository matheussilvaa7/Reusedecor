document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.product');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function updateCarousel() {
        const width = carouselSlides[0].clientWidth;
        carouselContainer.style.transform = `translateX(${-width * currentIndex}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselSlides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselSlides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});


document.addEventListener('DOMContentLoaded', () => {
    // Exibir o modal de cadastro ao carregar a página
    const modal = document.getElementById("registrationModal");
    modal.style.display = "block";

    // Adicionar evento de submissão ao formulário de cadastro
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Validar campos
        if (name && email) {
            alert("Cadastro realizado com sucesso!");
            closeModal();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});

function closeModal() {
    const modal = document.getElementById("registrationModal");
    modal.style.display = "none";
}

function addToCart(product) {
    const cart = document.getElementById("cart");
    const item = document.createElement("li");
    item.textContent = product;
    cart.appendChild(item);
}
