import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Comics } from "./comics";
import { Observable } from 'rxjs';

@Injectable()
export class ComicHubService { 
  constructor(private http: HttpClient) {}

  private _comicUrl: string = "assets/data/comic.json";

  getComics(): Observable<Comics[]> {
    return this.http.get<Comics[]>(this._comicUrl);
  }
}
