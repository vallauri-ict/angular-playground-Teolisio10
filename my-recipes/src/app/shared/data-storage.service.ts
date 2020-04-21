import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable PERMETTE DI INIETTARE PARAMETRI
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  // ACCESSO AL DATABASE db.json
  private REST_API_SERVER = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint: string) {
    // IL METODO get RESTITUISCE UN Observable
    // endpoint NEL NOSTRO CASO AL MOMENTO E' SOLO recipes
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }
}
