// Liste des tiles : label + fichier cible
const tiles = [
  { label: "Accueil", file: "index.html" },
  { label: "À propos", file: "apropos.html" },
  { label: "Contact", file: "contact.html" },
  { label: "Galerie", file: "galerie.html" },
];

const grid = document.getElementById("tiles");

tiles.forEach(t => {
  const a = document.createElement("a");
  a.className = "tile";
  a.href = t.file;
  a.textContent = t.label;
  grid.appendChild(a);
});
