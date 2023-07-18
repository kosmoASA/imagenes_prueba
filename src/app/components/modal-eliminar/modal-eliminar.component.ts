import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { getListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent {

  

  constructor(public dialogRef: MatDialogRef<ModalEliminarComponent>,
              private _apiService: ApiService,
              private _getListService: getListService
                ) 
  {
    
  }


  deleteImage() {
    this.dialogRef.close(true);
  }

  noDelete() {
    this.dialogRef.close(false);
  }
}
