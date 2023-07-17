import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadImage } from 'src/app/interfaces/data-table';
import { ApiService } from 'src/app/services/api.service';
import { getListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})

export class ModalAgregarComponent {

  //* Variables
  
  form: FormGroup;
  maxDate: Date;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ModalAgregarComponent>,
              private _getListService: getListService,
              private _apiService: ApiService
              )
  {
    this.form = this.fb.group({
      imagen : ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });

    this.maxDate = new Date();
  }



  agregarImagen() {
    if(this.form.invalid) {
      return;
    }

    const dataImage: UploadImage = {
       ENLACE: this.form.value.ENLACE,
    }

    this._apiService.newFile(dataImage).subscribe({
      next: (resp: any) => {
        console.log( resp );
        this.dialogRef.close();
      },
      error: (error: any) => {
        console.log( error )
      }
    })

  }

}
