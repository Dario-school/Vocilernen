# 📚 Schulhilfen – Vokabeltrainer

## Schnellstart
Öffne `index.html` im Browser. Fertig!  
Ohne Firebase läuft alles im Offline-Modus (localStorage).

---

## Account-System (Firebase) einrichten

1. https://console.firebase.google.com → Neues Projekt (kostenlos)
2. Web-App hinzufügen → firebaseConfig kopieren
3. In `firebase-config.js` die Werte ersetzen
4. Authentication aktivieren: E-Mail/Passwort + Google
5. Firestore Database erstellen (Testmodus)

---

## Vokabeln hinzufügen → `vocabulary-data.js`

```js
english: {
  5: [
    { german: "Auto",    foreign: "car",  type: "Nomen"    },
    { german: "laufen",  foreign: "run",  type: "Verb"     },
    { german: "schnell", foreign: "fast", type: "Adjektiv" }
  ]
}
```

---

## 🗂️ Lernkartei – Gruppen-System

Alle Wörter starten in Gruppe 1 (Rot)
- Richtig → eine Gruppe höher
- Falsch  → bleibt / zurück in Gruppe 1

Regeln:
- Gruppe 1 muss leer sein, bevor Gruppe 2 dran ist
- Gruppe 2 falsch → sofort zurück in Gruppe 1 (Priorität!)
- Alle in Gruppe 3 = Einheit abgeschlossen

## Tastatur
- Leertaste = Karte umdrehen
- Pfeil rechts / J = Gewusst
- Pfeil links / N = Nicht gewusst
- A B C D = Antwort wählen (Ankreuzen)
