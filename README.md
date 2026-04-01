# Web Template — M1 Communication

Template statique de départ pour les projets web M1 Communication.
Stack : HTML · Tailwind CSS (CDN) · JS vanilla. Aucune installation requise.

## Ouvrir le site localement

**Option 1 — VS Code (recommandé) :**
Installez l'extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), faites un clic droit sur `index.html` → *Open with Live Server*.

**Option 2 — Navigateur directement :**
Double-cliquez sur `index.html`. Le site s'ouvre dans votre navigateur (certaines fonctionnalités JS peuvent nécessiter un serveur local).

## Structure des fichiers

```
/
├── index.html              # Page principale
├── specs.md                # Document maître à compléter avant de solliciter l'agent IA
├── assets/
│   ├── css/styles.css      # Surcharges CSS minimales
│   └── js/main.js          # JS optionnel (commenté)
└── README.md               # Ce fichier
```

## Workflow recommandé

1. Compléter `specs.md` (contexte, contenus, charte Tailwind).
2. Ouvrir GitHub Copilot (ou un autre LLM) en lui fournissant `specs.md` comme contexte.
3. Demander à l'agent de modifier `index.html` en respectant la charte définie dans `specs.md`.
