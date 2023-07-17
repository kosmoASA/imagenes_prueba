import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//* Modulos
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//* Componentes

import { AppComponent } from './app.component';
import { VentanaPrincipalComponent } from './components/ventana-principal/ventana-principal.component';
import { ListaImagenesComponent } from './components/lista-imagenes/lista-imagenes.component';
import { ModalAgregarComponent } from './components/modal-agregar/modal-agregar.component';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    VentanaPrincipalComponent,
    ListaImagenesComponent,
    ModalAgregarComponent,
    ModalEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
