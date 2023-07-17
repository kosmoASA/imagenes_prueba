import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getListService {

  private ListDataSubject = new BehaviorSubject<any>([]);
  public ListDataSubject$ = this.ListDataSubject.asObservable();

  constructor(private _apiService: ApiService) { }


  refreshListImage() {
    this._apiService.getFileList().subscribe({
      next: (resp: any) => {
        console.log( resp.data )
        this.ListDataSubject.next(resp.data)
      },
      error: (error: any ) => {
        console.log( error )
      }
    })
  }
}
