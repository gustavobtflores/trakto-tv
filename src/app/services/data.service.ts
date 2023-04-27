import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../interfaces/material';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const API_BASE = 'https://api.trakto.io';

interface MaterialResponse {
  data: Material[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getMaterials(
    amountPerPage: number = 10
  ): Observable<MaterialResponse> {
    const headers = new HttpHeaders({
      Accept: '*/*',
    });

    return this.http.get<MaterialResponse>(
      `${API_BASE}/document?total_per_page=${amountPerPage}&order_by=updated_at&order_orientation=desc`,
      {
        headers,
      }
    );
  }
}
