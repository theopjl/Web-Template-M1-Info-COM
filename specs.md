# specs.md — Document maître du projet

> **Instructions à l'agent IA (Copilot / LLM)**
> Ce fichier est la source de vérité du projet. Lis-le intégralement avant toute modification du code.
> Respecte strictement la charte Tailwind définie ci-dessous.
> Ne génère aucune couleur, espace ou composant qui ne soit pas prévu dans ce document.

---

## 1. Contexte

<!-- Décrivez ici le contexte du projet : organisation, événement, cours, association… -->

- **Nom du projet :** À compléter
- **Commanditaire / client :** À compléter
- **Date de rendu :** À compléter
- **Équipe :** À compléter

---

## 2. Public cible

<!-- Qui va utiliser ou consulter ce site ? -->

- **Profil principal :** À compléter (ex : étudiants en communication, grand public, recruteurs…)
- **Âge / niveau numérique :** À compléter
- **Contexte de consultation :** À compléter (mobile, desktop, contexte pro…)

---

## 3. Objectifs

<!-- Que doit accomplir le site ? Listez 3 à 5 objectifs mesurables. -->

1. À compléter
2. À compléter
3. À compléter

---

## 4. Pages / sections

<!-- Listez les pages et sections du site avec leur rôle. -->

| Section      | Rôle                                    | Statut       |
|--------------|-----------------------------------------|--------------|
| `#about`     | Présenter le projet ou l'organisation   | À compléter  |
| `#project`   | Détailler le contenu / les réalisations | À compléter  |
| `#contact`   | Formulaire de prise de contact          | À compléter  |

> Ajoutez des lignes si d'autres sections sont prévues.

---

## 5. Contenus

<!-- Pour chaque section, précisez les textes, visuels et appels à l'action attendus. -->

### 5.1 Header / Hero

- **Titre H1 :** À compléter
- **Sous-titre / accroche :** À compléter
- **CTA principal :** À compléter (ex : "Découvrir le projet")

### 5.2 Section #about

- **Titre H2 :** À compléter
- **Corps de texte :** À compléter (2–3 paragraphes max)
- **Visuels :** À compléter (photo, illustration, icônes…)

### 5.3 Section #project

- **Titre H2 :** À compléter
- **Format :** À compléter (liste, cards, galerie…)
- **Contenu :** À compléter

### 5.4 Section #contact

- **Titre H2 :** "Contact" (ou à adapter)
- **Message d'introduction :** À compléter
- **Destination du formulaire :** À compléter (ex : Netlify Forms, EmailJS, mailto…)

### 5.5 Footer

- **Mentions :** À compléter (copyright, année, noms…)
- **Liens légaux :** À compléter (politique de confidentialité, mentions légales RGPD)

---

## 6. Contraintes

### 6.1 Accessibilité

- [ ] Langue HTML déclarée : `lang="fr"`
- [ ] Meta viewport présente
- [ ] Hiérarchie de titres respectée (H1 unique, H2 par section)
- [ ] Labels associés à chaque champ de formulaire (`<label for="">`)
- [ ] Contraste suffisant (ratio ≥ 4.5:1 pour le texte courant)
- [ ] Focus clavier visible sur tous les éléments interactifs

### 6.2 RGPD

- [ ] Formulaire de contact : préciser la finalité du traitement
- [ ] Pas de cookies tiers sans consentement
- [ ] Mentions légales / politique de confidentialité à prévoir
- [ ] À compléter selon le contexte du projet

### 6.3 Technique

- [ ] Zéro dépendance npm / zéro build
- [ ] Tailwind via CDN uniquement
- [ ] Compatible navigateurs modernes (Chrome, Firefox, Safari, Edge)
- [ ] Temps de chargement acceptable (images optimisées)

---

## 7. Checklist de validation

<!-- Cocher avant la livraison finale -->

- [ ] Le H1 est unique et descriptif
- [ ] Toutes les images ont un attribut `alt` renseigné
- [ ] Le formulaire de contact fonctionne (ou affiche un message d'erreur clair)
- [ ] Le site est lisible et utilisable sur mobile (375px)
- [ ] Le focus clavier est visible sur chaque lien et bouton
- [ ] Aucune couleur hors palette n'est utilisée
- [ ] Aucun `style=""` inline n'est présent dans le HTML
- [ ] Le footer contient les mentions obligatoires

---

## Charte & règles Tailwind (obligatoire)

> **L'agent IA doit respecter cette charte à la lettre.**
> Toute classe Tailwind générée doit être cohérente avec les choix définis ici.

### 🎨 Palette de couleurs

| Rôle            | Valeur Tailwind        | Hex (référence) |
|-----------------|------------------------|-----------------|
| Fond principal  | `bg-white`             | #ffffff         |
| Fond alterné    | `bg-gray-50`           | #f9fafb         |
| Texte principal | `text-gray-900`        | #111827         |
| Texte secondaire| `text-gray-500`        | #6b7280         |
| Bordures        | `border-gray-100/200`  | #f3f4f6 / #e5e7eb |
| Couleur d'accent| **À définir** (ex : `bg-blue-600`) | À compléter     |
| Fond bouton CTA | `bg-gray-900` → À adapter | #111827      |

> **Règle :** N'utiliser que les couleurs ci-dessus. Toute couleur d'accent doit être définie ici avant usage.

### 🔤 Typographie

| Élément         | Classes Tailwind                              |
|-----------------|-----------------------------------------------|
| H1              | `text-4xl font-bold tracking-tight sm:text-5xl` |
| H2              | `text-3xl font-semibold`                      |
| H3              | `text-xl font-semibold`                       |
| Corps courant   | `text-base text-gray-500` (ou `text-gray-700`)|
| Label formulaire| `text-sm font-medium text-gray-700`           |
| Texte footer    | `text-sm text-gray-400`                       |
| Police          | Inter (importée via Google Fonts)             |

### 📐 Espacement

| Usage                        | Classes Tailwind               |
|------------------------------|--------------------------------|
| Padding sections             | `py-24 px-6`                   |
| Conteneur max-width          | `mx-auto max-w-5xl`            |
| Espacement entre blocs       | `mt-4`, `mt-6`, `mt-8`        |
| Gap dans les grilles / flex  | `gap-4`, `gap-6`, `gap-8`     |
| Padding interne inputs       | `px-4 py-2.5`                  |

> **Règle :** Préférer des marges généreuses pour un rendu aéré. Éviter les espacements inférieurs à `mt-2` sauf cas spécifique.

### 🧩 Composants

#### Bouton principal (CTA)
```
rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow
hover:bg-gray-700 active:scale-95 transition-all
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900
```

#### Bouton secondaire (outline)
```
rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900
hover:bg-gray-50 transition-colors
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900
```

#### Card
```
rounded-xl border border-gray-100 bg-white p-6 shadow-sm
hover:shadow-md transition-shadow
```

#### Input / Textarea
```
block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900
placeholder:text-gray-400 shadow-sm
focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20
```

#### Lien de navigation
```
hover:text-gray-900 transition-colors
focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 rounded
```

### 🎭 Ton visuel

- **Style :** Minimaliste, propre, beaucoup d'espace blanc.
- **Animations :** Légères uniquement (`transition-colors`, `transition-shadow`, `active:scale-95`). Pas d'animations complexes.
- **Ombres :** Subtiles (`shadow-sm`, `shadow`). Pas de `shadow-xl` sauf usage très ponctuel.
- **Arrondis :** Cohérents : `rounded-lg` pour les inputs/boutons, `rounded-xl` pour les cards.

### 🚫 Interdits

- ❌ Pas d'attribut `style=""` inline dans le HTML
- ❌ Pas de couleurs hors palette (ex : `text-red-500` ou `bg-purple-300` sans validation préalable)
- ❌ Pas de bibliothèques UI tierces (Flowbite, DaisyUI, Bootstrap…)
- ❌ Pas de bundler / npm / PostCSS
- ❌ Pas de classes Tailwind arbitraires `[]` sauf exception justifiée dans ce fichier
- ❌ Pas de `!important` dans le CSS custom
- ❌ Pas de hiérarchie de titres brisée (ex : H3 sans H2 parent)
