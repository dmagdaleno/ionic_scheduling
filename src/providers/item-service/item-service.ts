import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../app/models/item';
import { ApiProvider } from '../api/api';

@Injectable()
export class ItemServiceProvider {

  private apiUrl: string;

  constructor(private _http: HttpClient, private api: ApiProvider) {
    this.apiUrl = this.api.getUrl();
  }

  lista(): Observable<Item[]>{
    return this._http.get<Item[]>(this.apiUrl.concat('/carro/listaTodos'));
  }

}
