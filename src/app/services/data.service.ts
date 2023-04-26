import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../interfaces/material';
import { Observable } from 'rxjs';

const API_BASE = 'https://api.trakto.io';

interface MaterialResponse {
  data: Material[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getMaterials(): Observable<MaterialResponse> {
    return this.http.get<MaterialResponse>(
      `${API_BASE}/document?total_per_page=10&order_by=updated_at&order_orientation=desc`,
      {
        headers: {
          Accept: '*/*',
        },
      }
    );
  }
}
