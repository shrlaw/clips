import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyC0lR610iUFD0fbna7i6_eGe8hG1YADftE",
  authDomain: "clips-11b2c.firebaseapp.com",
  projectId: "clips-11b2c",
  storageBucket: "clips-11b2c.firebasestorage.app",
  messagingSenderId: "1053595566469",
  appId: "1:1053595566469:web:1992f6a6711f900e0ac4ec",
  measurementId: "G-17T1MCFD23"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
