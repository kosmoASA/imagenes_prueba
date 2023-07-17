import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';
import { getListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-ventana-principal',
  templateUrl: './ventana-principal.component.html',
  styleUrls: ['./ventana-principal.component.css']
})
export class VentanaPrincipalComponent {

  constructor(public dialog: MatDialog,
              private _getListService: getListService)
  {

  }

  ngOnInit () {
    this._getListService.refreshListImage()
  }


  onAddImage() { //Abre el modal de Agregar Imagen

    const dialogRef = this.dialog.open(ModalAgregarComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log( data );
      this._getListService.refreshListImage();
    });
    
  }
}
