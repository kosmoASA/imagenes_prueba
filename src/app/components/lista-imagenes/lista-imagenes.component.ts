import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataTable } from 'src/app/interfaces/data-table';



const ELEMENT_DATA: DataTable[] = [
  {fecha: '1/06/2023', descripcion: 'Hydrogen_image.png'},
  {fecha: '2/06/2023', descripcion: 'Helium_image.png'},
  {fecha: '3/06/2023', descripcion: 'Lithium_image.png'},
  {fecha: '4/06/2023', descripcion: 'Beryllium_image.png'},
  {fecha: '5/06/2023', descripcion: 'Boron_image.png'},
  {fecha: '6/06/2023', descripcion: 'Carbon_image.png'},
  {fecha: '7/06/2023', descripcion: 'Nitrogen_image.png'},
  {fecha: '8/06/2023', descripcion: 'Oxygen_image.png'},
  {fecha: '9/06/2023', descripcion: 'Fluorine_image.png'},
  {fecha: '10/06/2023', descripcion: 'Neon_image.png'},
];

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})


export class ListaImagenesComponent {

  //* Variables
  
  displayedColumns: string[] = ['fecha', 'descripcion', 'descargar', 'eliminar'];
  dataSource!: MatTableDataSource<DataTable>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor () 
  {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }


  
  onDownload() { // Habilita la descarga de la imagen

  }

  onDelete() { // Abre el modal de eliminar, para realizar la acción

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
