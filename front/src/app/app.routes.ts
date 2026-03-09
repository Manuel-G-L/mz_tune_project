import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StockComponent } from './pages/stock/stock';
import { Shop } from './pages/shop/shop';
import { Bodykit } from './pages/bodykit/bodykit';
import { Mainpage } from './pages/mainpage/mainpage';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [

  // Esta línea hace que 'home' sea la principal al abrir la web
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'bodykit', component: Bodykit },
  { path: 'mainpage', component: Mainpage },
  { path: 'stock', component: StockComponent },
  { path: 'shop', component: Shop },
  { path: 'gallery', component: Gallery },


  // Si el usuario escribe una ruta que no existe, lo mandamos a home
  { path: '**', redirectTo: 'home' }
];
