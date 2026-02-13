// Vokabeldatei für Schulhilfen
// Struktur: { subject: { unit: [{ german: "", foreign: "", type: "" }] } }

const vocabularyDatabase = {
    english: {
        15: [
            { german: "Velofahren", foreign: "biking", type: "Nomen" },
            { german: "Bergsteigen, Klettern", foreign: "climbing", type: "Nomen" },
            { german: "gefährlich", foreign: "dangerous", type: "Adjektiv" },
            { german: "Tauchen", foreign: "diving", type: "Nomen" },
            { german: "Abfahrts-", foreign: "downhill", type: "Nomen" },
            { german: "Ausrüstung, Ausstattung", foreign: "equipment", type: "Nomen" },
            { german: "aufregend, spannend", foreign: "exciting", type: "Adjektiv" },
            { german: "Wandern", foreign: "hiking", type: "Nomen" },
            { german: "Berg, Gebirge", foreign: "mountain", type: "Nomen" },
            { german: "Rugby", foreign: "rugby", type: "Nomen" },
            { german: "wenigstens", foreign: "at least", type: "Adverb" },
            { german: "unter Kontrolle haben", foreign: "be in control of", type: "Phrase" },
            { german: "leidenschaftlich gern haben", foreign: "be keen on", type: "Phrase" },
            { german: "wahrscheinlich", foreign: "be likely to", type: "Phrase" },
            { german: "bis zum Äussersten getrieben werden", foreign: "be pushed to one's limits", type: "Phrase" },
            { german: "Grenze", foreign: "border", type: "Nomen" },
            { german: "weitermachen", foreign: "carry on", type: "Verb" },
            { german: "wählen", foreign: "choose", type: "Verb" },
            { german: "Aufregung", foreign: "excitement", type: "Nomen" },
            { german: "wandern", foreign: "hike", type: "Verb" },
            { german: "Freude", foreign: "joy", type: "Nomen" },
            { german: "Grenze, Limit", foreign: "limit", type: "Nomen" },
            { german: "aufpassen, Acht geben", foreign: "pay attention", type: "Phrase" },
            { german: "persönliche Bestleistung", foreign: "personal best", type: "Phrase" },
            { german: "sich antreiben", foreign: "push oneself", type: "Verb" },
            { german: "Risiko", foreign: "risk", type: "Nomen" },
            { german: "Rundfahrt, Autoreise", foreign: "road trip", type: "Nomen" },
            { german: "Felsen, Stein", foreign: "rock", type: "Nomen" },
            { german: "Schulter", foreign: "shoulder", type: "Nomen" },
            { german: "Südamerika", foreign: "South America", type: "Nomen" },
            { german: "Mannschaftssportart", foreign: "team sport", type: "Nomen" },
            { german: "bewundern, lieben", foreign: "adore", type: "Verb" },
            { german: "Basketball", foreign: "basketball", type: "Nomen" },
            { german: "Eishockey", foreign: "ice hockey", type: "Nomen" },
            { german: "Lippe", foreign: "lip", type: "Nomen" },
            { german: "Spieltag", foreign: "match day", type: "Nomen" },
            { german: "etwas ausmachen", foreign: "mind", type: "Verb" },
            { german: "persönlich", foreign: "personally", type: "Adverb" },
            { german: "Spieler/-in", foreign: "player", type: "Nomen" },
            { german: "Eiskunstlauf", foreign: "skating", type: "Nomen" },
            { german: "Publikumssport", foreign: "spectator sport", type: "Nomen" },
            { german: "Tischtennis", foreign: "table tennis", type: "Nomen" },
            { german: "Tennis", foreign: "tennis", type: "Nomen" },
            { german: "Zungenbrecher", foreign: "tongue twister", type: "Nomen" },
            { german: "Tierarzt / Tierärztin", foreign: "vet", type: "Nomen" },
            { german: "Volleyball", foreign: "volleyball", type: "Nomen" },
            { german: "böse, schlimm", foreign: "wicked", type: "Adjektiv" },
            { german: "Hexe", foreign: "witch", type: "Nomen" },
            { german: "ansprechen", foreign: "appeal", type: "Verb" },
            { german: "Wahl", foreign: "choice", type: "Nomen" },
            { german: "wettbewerbsorientiert", foreign: "competitive", type: "Adjektiv" },
            { german: "tauchen", foreign: "dive", type: "Verb" },
            { german: "Unihockey", foreign: "floorball", type: "Nomen" },
            { german: "sich entscheiden für", foreign: "go for", type: "Verb" },
            { german: "Schulleiter/-in", foreign: "head teacher", type: "Nomen" },
            { german: "intensiv", foreign: "intense", type: "Adjektiv" },
            { german: "motivieren", foreign: "motivate", type: "Verb" },
            { german: "Frieden, Ruhe", foreign: "peace", type: "Nomen" },
            { german: "Stille, Schweigen", foreign: "silence", type: "Nomen" },
            { german: "einreichen", foreign: "submit", type: "Verb" }
        ],
        
        // Beispiel für Unit 1 - füge hier deine eigenen Vokabeln hinzu
        1: [
            { german: "Hallo", foreign: "hello", type: "Interjektion" },
            { german: "Tschüss", foreign: "goodbye", type: "Interjektion" },
            { german: "bitte", foreign: "please", type: "Adverb" },
            { german: "danke", foreign: "thank you", type: "Phrase" },
            { german: "Haus", foreign: "house", type: "Nomen" },
            { german: "Schule", foreign: "school", type: "Nomen" },
            { german: "Buch", foreign: "book", type: "Nomen" },
            { german: "Stift", foreign: "pen", type: "Nomen" },
            { german: "Tisch", foreign: "table", type: "Nomen" },
            { german: "Stuhl", foreign: "chair", type: "Nomen" }
        ],
        
        // Weitere Units hier hinzufügen...
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        16: [],
        17: [],
        18: [],
        19: [],
        20: [],
        21: []
    },
    
    french: {
        // Beispiel für Französisch Unit 1 - füge hier deine eigenen Vokabeln hinzu
        1: [
            { german: "Hallo", foreign: "bonjour", type: "Interjektion" },
            { german: "Tschüss", foreign: "au revoir", type: "Phrase" },
            { german: "bitte", foreign: "s'il vous plaît", type: "Phrase" },
            { german: "danke", foreign: "merci", type: "Interjektion" },
            { german: "Haus", foreign: "maison", type: "Nomen" },
            { german: "Schule", foreign: "école", type: "Nomen" },
            { german: "Buch", foreign: "livre", type: "Nomen" },
            { german: "Stift", foreign: "stylo", type: "Nomen" },
            { german: "Tisch", foreign: "table", type: "Nomen" },
            { german: "Stuhl", foreign: "chaise", type: "Nomen" }
        ],
        
        // Weitere Units hier hinzufügen...
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
        18: [],
        19: [],
        20: [],
        21: []
    }
};

// Funktion zum Abrufen der Vokabeln
function getVocabularyData(subject, unit) {
    if (vocabularyDatabase[subject] && vocabularyDatabase[subject][unit]) {
        return vocabularyDatabase[subject][unit];
    }
    return [];
}

// Funktion zum Hinzufügen neuer Vokabeln (für zukünftige Erweiterungen)
function addVocabulary(subject, unit, vocabularyArray) {
    if (!vocabularyDatabase[subject]) {
        vocabularyDatabase[subject] = {};
    }
    if (!vocabularyDatabase[subject][unit]) {
        vocabularyDatabase[subject][unit] = [];
    }
    vocabularyDatabase[subject][unit].push(...vocabularyArray);
}

/*
ANLEITUNG ZUM HINZUFÜGEN VON VOKABELN:
======================================

1. Finde die richtige Sprache (english oder french) und Unit-Nummer
2. Füge Vokabeln im folgenden Format hinzu:

{ german: "deutsches Wort", foreign: "Fremdwort", type: "Wortart" }

Beispiel für Englisch Unit 5:
5: [
    { german: "Auto", foreign: "car", type: "Nomen" },
    { german: "schnell", foreign: "fast", type: "Adjektiv" },
    { german: "laufen", foreign: "run", type: "Verb" }
]

Mögliche Wortarten:
- Nomen
- Verb
- Adjektiv
- Adverb
- Phrase
- Interjektion

3. Speichere die Datei
4. Die Vokabeln werden automatisch in allen Modi verfügbar sein

TIPP: Du kannst mehrere mögliche Übersetzungen mit Komma trennen:
{ german: "Auto, Wagen", foreign: "car", type: "Nomen" }
*/
