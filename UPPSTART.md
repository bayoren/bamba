# Familjens Matsedel — Uppstartsinstruktioner

Du har två filer:
- `index.html` — hela appen
- `recipes.js` — 60 recept från 4 bloggar

---

## Steg 1 — Skapa Firebase-projekt (gratis)

1. Gå till **https://console.firebase.google.com**
2. Klicka **"Add project"** → ge det ett namn (t.ex. *familjens-matsedel*)
3. Avaktivera Google Analytics om du vill → **Create project**
4. I vänstermenyn: **Build → Realtime Database**
5. Klicka **"Create Database"** → välj en region (t.ex. europe-west1) → **Start in test mode** → Enable
6. I vänstermenyn: **Project Settings** (kugghjulet uppe till vänster) → fliken **"General"**
7. Scrolla ner till **"Your apps"** → klicka **`</>`** (Web)
8. Ge appen ett namn → **Register app**
9. Kopiera `firebaseConfig`-objektet som visas

---

## Steg 2 — Klistra in din Firebase-konfiguration

Öppna `index.html` i en textredigerare (t.ex. Notepad, VS Code).

Hitta detta block längst ner:

```js
const FIREBASE_CONFIG = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  databaseURL: "REPLACE_WITH_YOUR_DATABASE_URL",
  ...
};
```

Ersätt hela objektet med det du kopierade från Firebase. Det ska se ut ungefär så:

```js
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAbc123...",
  authDomain: "familjens-matsedel.firebaseapp.com",
  databaseURL: "https://familjens-matsedel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "familjens-matsedel",
  storageBucket: "familjens-matsedel.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

**OBS:** `databaseURL` är särskilt viktigt — den måste stämma exakt.

---

## Steg 3 — Ladda upp till GitHub

1. Gå till **https://github.com** → logga in
2. Klicka **"New repository"** (grön knapp uppe till höger)
3. Ge repot ett namn, t.ex. `matsedel` → välj **Public** → **Create repository**
4. Klicka **"uploading an existing file"**
5. Dra och släpp **båda filerna**: `index.html` och `recipes.js`
6. Klicka **"Commit changes"**

---

## Steg 4 — Aktivera GitHub Pages

1. I ditt repo: klicka **Settings** (fliken uppe)
2. I vänstermenyn: **Pages**
3. Under **"Branch"**: välj `main` och mappen `/ (root)` → **Save**
4. Vänta 1-2 minuter. Din sida finns på:
   `https://DITT-ANVÄNDARNAMN.github.io/matsedel/`

Dela denna länk med din sambo — ni kan nu redigera matsedeln och inköpslistan på era respektive mobiler i realtid.

---

## Steg 5 — Säkra din databas (rekommenderat)

Firebase-databasen är nu i "test mode" vilket innebär att vem som helst med länken kan skriva. För en familjeapp räcker detta, men om du vill begränsa åtkomst:

I Firebase Console → Realtime Database → **Rules**, klistra in:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

(Behåll test mode tills vidare — ändra regler om det behövs.)

---

## Funktioner i appen

| Funktion | Beskrivning |
|----------|-------------|
| 📅 Matsedel | Planera måndag–söndag för denna och nästa vecka |
| 🔄 Automatisk veckoväxling | Nästa vecka blir automatiskt denna vecka på måndag |
| 📖 Receptbank | 60 recept från 4 bloggar, sök och filtrera |
| 👥 Portionsjustering | Ändra portioner — sparas och räknas om automatiskt |
| 🛒 Inköpslista | Lägg till ingredienser per recept eller hela veckans matsedel |
| ✅ Bocka av | Bocka av varor i affären, ta bort ibockade |
| 🔗 Dela lista | Generera delningslänk för inköpslistan |
| 📱 Realtidssynk | Alla ändringar syns direkt på alla enheter via Firebase |

---

## Lägga till fler recept

Öppna `recipes.js` och lägg till fler recept i slutet av arrayen, följ samma struktur som de befintliga.
