import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Comics } from "./comics";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ComicHubService {
  constructor(private http: HttpClient) {}

  private _comicUrl: string =
    "https://propertymecomics.s3.amazonaws.com/comics";

  getComics(): Observable<Comics[]> {
    return this.http.get<Comics[]>(this._comicUrl);
  }
}
