import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'buscar/personagem',
    loadChildren: () => import('../app/paginas/buscar-personagem/buscar-personagem.module').then( m => m.BuscarPersonagemPageModule)
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('../app/paginas/quem-somos/quem-somos.module').then( m => m.QuemSomosPageModule)
  },
  {
    path: 'informacoes/casa',
    loadChildren: () => import('../app/paginas/informacoes-casa/informacoes-casa.module').then( m => m.InformacoesCasaPageModule)
  },
  {
    path: 'informacoes-personagem',
    loadChildren: () => import('../app/paginas/modal-casa/modal-casa.module').then( m => m.ModalCasaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
