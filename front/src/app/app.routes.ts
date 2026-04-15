// Importamos las distintas rutas de la página
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Stock } from './pages/stock/stock';
import { Shop } from './pages/shop/shop';
import { Bodykits } from './pages/bodykit/bodykit';
import { Mainpage } from './pages/mainpage/mainpage';
import { Gallery } from './pages/gallery/gallery';
import { Register } from './pages/register/register';
import { Rims } from './pages/rims/rims';
import { Enquire } from './pages/enquire/enquire';

// Exportamos las rutas para poder usarlas en el resto de la app
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // El home será la página principal
  { path: 'home', component: Home },
  { path: 'bodykit', component: Bodykits },
  { path: 'mainpage', component: Mainpage },
  { path: 'stock', component: Stock },
  { path: 'shop', component: Shop },
  { path: 'gallery', component: Gallery },
  { path: 'register', component: Register },
  { path: 'rims', component: Rims },
  { path: 'enquire', component: Enquire },
  { path: '**', redirectTo: 'home' }
];
