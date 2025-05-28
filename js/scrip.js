let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Cambia cada 3 segundos

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

// Seccion de contacto a WhatsApp
document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const combo = document.getElementById("combo").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const telefono = "598XXXXXXXX"; // Reemplazá con tu número

    const texto = `Hola, soy ${nombre}.%0AQuiero el *${combo}*.%0A${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
