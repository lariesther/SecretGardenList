import { registerRootComponent } from 'expo';
import App from './App';

// O registerRootComponent garante que o app funcione corretamente tanto com Expo Go quanto em builds nativas.
registerRootComponent(App);
