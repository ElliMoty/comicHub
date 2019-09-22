import { Component, OnInit } from "@angular/core";
import { ComicHubService } from "../comic.service";

@Component({
  selector: "app-comic-list",
  templateUrl: "./comic-list.component.html",
  styleUrls: ["./comic-list.component.css"]
})
export class ComicListComponent implements OnInit {
  public comics = [];
  constructor(private _comicService: ComicHubService) {}

  ngOnInit() {
    this._comicService.getComics().subscribe(data => (this.comics = data));
  }
}
