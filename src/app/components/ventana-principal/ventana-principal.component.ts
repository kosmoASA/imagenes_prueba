import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';
import { getListService } from 'src/app/services/get-list.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ventana-principal',
  templateUrl: './ventana-principal.component.html',
  styleUrls: ['./ventana-principal.component.css']
})
export class VentanaPrincipalComponent {

  constructor(public dialog: MatDialog,
              private _getListService: getListService,
              private _apiService: ApiService)
  {

  }

  ngOnInit () {
    this._getListService.refreshListImage()
  }


  onAddImage() { //Abre el modal de Agregar Imagen

    const dialogRef = this.dialog.open(ModalAgregarComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((formData: any) => {

      this._apiService.newFile(formData).subscribe({
        next: (resp: any) => {
          console.log( resp )
          this._getListService.refreshListImage();
        },
        error: (error: any) => {
          console.log( error )
          this._getListService.mensajeError(error);
        }
      })
      
    });
    
  }
}
