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
    return this.http.get<any>(`${this.baseURL}/file/getFileList`);
  }

  newFile(data: UploadImage): Observable<any> {
    return this.http.post<DataTable[]>(`${this.baseURL}/file/newFile`, data);
  }

}
