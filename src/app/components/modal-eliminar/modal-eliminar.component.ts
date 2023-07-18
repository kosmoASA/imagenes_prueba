import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent {



  constructor(public dialogRef: MatDialogRef<ModalEliminarComponent>,
                ) 
  {
    
  }



  deleteImage() {
    
  }

  noDelete() {

  }
}
