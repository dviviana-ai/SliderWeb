const slider = document.getElementById("slider");
const texto = document.getElementById("valor");

slider.addEventListener("input", () => {
  texto.textContent = slider.value;
});
