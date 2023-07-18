import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataTable } from 'src/app/interfaces/data-table';
import { getListService } from 'src/app/services/get-list.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';



@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})


export class ListaImagenesComponent {

  //* Variables
  dataList: DataTable[] = [];
  
  displayedColumns: string[] = ['FECHA', 'ENLACE', 'descargar', 'eliminar'];
  dataSource!: MatTableDataSource<DataTable>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _getListService: getListService,
              public dialog: MatDialog, ) 
  {

  }
  
  ngOnInit() {
    this._getListService.ListDataSubject$.subscribe((data: any) => {
      this.dataList = data;
      this.dataSource = new MatTableDataSource(this.dataList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this._getListService.refreshListImage();
  }
  
  onDownload() { // Habilita la descarga de la imagen

  }

  onDelete() { // Abre el modal de eliminar, para realizar la acción

    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(data => {
      this._getListService.refreshListImage();
    });

  }







  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
