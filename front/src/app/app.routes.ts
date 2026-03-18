import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Stock } from './pages/stock/stock';
import { Shop } from './pages/shop/shop';
import { Bodykits } from './pages/bodykit/bodykit';
import { Mainpage } from './pages/mainpage/mainpage';
import { Gallery } from './pages/gallery/gallery';
import { Register } from './pages/register/register';

export const routes: Routes = [

  // Esta línea hace que 'home' sea la principal al abrir la web
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'bodykit', component: Bodykits },
  { path: 'mainpage', component: Mainpage },
  { path: 'stock', component: Stock },
  { path: 'shop', component: Shop },
  { path: 'gallery', component: Gallery },
  { path: 'register', component: Register },
  { path: '**', redirectTo: 'home' }
];
