// assets/js/main.js
// JS optionnel — aucun framework, aucun bundler, aucun import.
// À compléter par l'agent IA selon les besoins fonctionnels du projet.

// --- Année courante dans le footer ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Exemples commentés à activer si besoin ---

// Menu mobile (à activer si l'agent IA ajoute un bouton hamburger)
// const menuBtn = document.getElementById('menu-btn');
// const menuNav = document.getElementById('mobile-menu');
// menuBtn?.addEventListener('click', () => {
//   menuNav?.classList.toggle('hidden');
// });

// Validation légère du formulaire de contact
// const form = document.querySelector('form');
// form?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // TODO (agent IA) : ajouter logique d'envoi (fetch, EmailJS, Netlify Forms…)
//   alert('Message envoyé !');
// });
