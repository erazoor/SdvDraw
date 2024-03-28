import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dessin } from './models/dessin';

@Injectable({
  providedIn: 'root',
})
export class DessinService {
  private apiUrl = 'http://37.59.43.189:3001/dessins';

  constructor(private http: HttpClient) {}

  getDessins(): Observable<Dessin[]> {
    return this.http.get<Dessin[]>(this.apiUrl);
  }

  getDessinById(id: number): Observable<Dessin> {
    return this.http.get<Dessin>(`${this.apiUrl}/${id}`);
  }

  createDessin(dessin: Dessin): Observable<Dessin> {
    return this.http.post<Dessin>(this.apiUrl, dessin);
  }

  updateDessin(dessin: Dessin): Observable<Dessin> {
    return this.http.put<Dessin>(`${this.apiUrl}/${dessin.id}`, dessin);
  }

  deleteDessin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
