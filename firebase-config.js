// ═══════════════════════════════════════════════════════════════
// FIREBASE KONFIGURATION
// ═══════════════════════════════════════════════════════════════
//
// ANLEITUNG:
// 1. Gehe zu https://console.firebase.google.com
// 2. Erstelle ein neues Projekt (kostenlos)
// 3. Klicke auf "Web-App hinzufügen" (</>)
// 4. Kopiere die firebaseConfig und ersetze die Werte unten
// 5. Aktiviere unter Authentication:
//    - E-Mail/Passwort
//    - Google
// 6. Aktiviere Firestore Database (im Test-Modus starten)
//
// OHNE FIREBASE: Das Programm läuft auch offline,
// Fortschritt wird dann nur im Browser (localStorage) gespeichert.
// ═══════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
    apiKey: "DEINE_API_KEY",
    authDomain: "DEIN_PROJEKT.firebaseapp.com",
    projectId: "DEIN_PROJEKT_ID",
    storageBucket: "DEIN_PROJEKT.appspot.com",
    messagingSenderId: "DEINE_SENDER_ID",
    appId: "DEINE_APP_ID"
};

// ── Initialisierung ──
let useFirebase = false;
let db = null;

try {
    if (FIREBASE_CONFIG.apiKey !== "DEINE_API_KEY") {
        firebase.initializeApp(FIREBASE_CONFIG);
        db = firebase.firestore();
        useFirebase = true;
        console.log("✅ Firebase verbunden");
    } else {
        console.log("ℹ️ Firebase nicht konfiguriert – Offline-Modus (localStorage)");
        initOfflineMode();
    }
} catch(e) {
    console.warn("Firebase Fehler:", e);
    initOfflineMode();
}

// ── Offline-Fallback (localStorage) ──
function initOfflineMode() {
    // Simuliere Auth ohne Firebase
    const savedUser = localStorage.getItem('sh_user');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        setTimeout(() => onUserLoggedIn(user), 100);
    } else {
        setTimeout(() => {
            document.getElementById('authLoader').classList.remove('show');
            document.getElementById('authLogin').classList.add('active');
        }, 300);
    }

    // Override auth functions for offline mode
    window.signInGoogle = function() {
        const user = { uid: 'offline_user', displayName: 'Offline Nutzer', email: 'offline@local' };
        localStorage.setItem('sh_user', JSON.stringify(user));
        onUserLoggedIn(user);
    };

    window.loginEmail = function() {
        const email = document.getElementById('lEmail').value;
        if (!email) { alert('Bitte E-Mail eingeben.'); return; }
        const name = email.split('@')[0];
        const user = { uid: 'u_' + btoa(email), displayName: name, email };
        localStorage.setItem('sh_user', JSON.stringify(user));
        onUserLoggedIn(user);
    };

    window.registerEmail = function() {
        const name = document.getElementById('rName').value.trim();
        const email = document.getElementById('rEmail').value;
        if (!name || !email) { alert('Bitte alle Felder ausfüllen.'); return; }
        const user = { uid: 'u_' + btoa(email), displayName: name, email };
        localStorage.setItem('sh_user', JSON.stringify(user));
        onUserLoggedIn(user);
    };

    window.doSignOut = function() {
        localStorage.removeItem('sh_user');
        onUserLoggedOut();
    };

    // Override progress storage to use localStorage
    window.getProgressData = function() {
        const raw = localStorage.getItem('sh_progress');
        return raw ? JSON.parse(raw) : {};
    };

    window.saveProgressData = function(data) {
        localStorage.setItem('sh_progress', JSON.stringify(data));
    };

    window.loadProgress = function() {
        const data = window.getProgressData();
        if (typeof refreshUnitsIfVisible === 'function') refreshUnitsIfVisible();
        return data;
    };
}

// ── Firebase Auth Listener ──
if (useFirebase) {
    firebase.auth().onAuthStateChanged(user => {
        document.getElementById('authLoader').classList.remove('show');
        if (user) {
            onUserLoggedIn(user);
        } else {
            onUserLoggedOut();
        }
    });

    // Override progress functions to use Firestore
    window.getProgressData = function() {
        return (typeof progressData !== 'undefined') ? progressData : {};
    };

    window.saveProgressData = function(data) {
        const uid = firebase.auth().currentUser?.uid;
        if (!uid) return;
        if (typeof progressData !== 'undefined') progressData = data;
        firebase.firestore().collection('progress').doc(uid).set(data).catch(console.warn);
    };
}
