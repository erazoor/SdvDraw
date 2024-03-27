import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeDessinsComponent } from './liste-dessins/liste-dessins.component';
import { FormulaireDessinComponent } from './formulaire-dessin/formulaire-dessin.component';
import { DessinComponent } from './dessin/dessin.component';

const routes: Routes = [
  { path: 'dessins', component: ListeDessinsComponent },
  { path: 'dessin/nouveau', component: FormulaireDessinComponent },
  { path: 'dessin/:id', component: DessinComponent },
  { path: '', redirectTo: '/dessins', pathMatch: 'full' },
  { path: '**', redirectTo: '/dessins', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
