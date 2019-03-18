import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DvdItem } from '../interfaces/dvd-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyCollectionService {
  serverUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  getMyCollection() {
    return this.http.get(this.serverUrl);
  };

  getMovie(id: number): Observable<DvdItem> {
    return this.http.get<DvdItem>(`${this.serverUrl}/${id}`);
  };

  updateMyCollection(dvd: DvdItem): Observable<DvdItem> {
    return this.http.post<DvdItem>(this.serverUrl, dvd);
  };

  editMyCollection(dvd: DvdItem): Observable<void> {
    return this.http.put<void>(`${this.serverUrl}/${dvd.id}`, dvd);
  };

  deleteFromCollection(id: number): Observable<{}> {
    const toDelUrl = `${this.serverUrl}/${id}`;
    return this.http.delete(toDelUrl);
  };

}
