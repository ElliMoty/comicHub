import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ComicHubService } from "../comic.service";

@Component({
  selector: "app-comic-details",
  templateUrl: "./comic-details.component.html",
  styleUrls: ["./comic-details.component.css"]
})
export class ComicDetailsComponent implements OnInit {
  public comics = [];
  comic;
  constructor(
    private _comicService: ComicHubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const comicsInfo = this._comicService.getComics();
    comicsInfo.subscribe(data => {
      this.comics = data;
      this.route.paramMap.subscribe(params => {
        this.comic = this.comics[+params.get("comicId")];
      });
    });
  }
}
