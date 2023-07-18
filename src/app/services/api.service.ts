import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTable, UploadImage } from '../interfaces/data-table';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://kosmetikon.myqnapcloud.com:44444';


  constructor(private http: HttpClient) { }

  getFileList(): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/files/getFileList`);
  }

  newFile(data: any): Observable<any> {
    return this.http.post<DataTable[]>(`${this.baseURL}/files/newFile`, data);
  }

}
