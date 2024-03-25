import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DessinComponent } from './dessin/dessin.component';
import { ListeDessinsComponent } from './liste-dessins/liste-dessins.component';
import { FormeGeometriqueComponent } from './forme-geometrique/forme-geometrique.component';
import { MessageComponent } from './message/message.component';
import { FormulaireDessinComponent } from './formulaire-dessin/formulaire-dessin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DessinComponent,
    ListeDessinsComponent,
    FormeGeometriqueComponent,
    MessageComponent,
    FormulaireDessinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
