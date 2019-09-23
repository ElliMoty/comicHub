import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ComicHubService } from "./comic.service";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ComicListComponent } from "./comic-list/comic-list.component";
import { ComicDetailsComponent } from "./comic-details/comic-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ComicListComponent,
    ComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ComicListComponent },
      { path: 'comics/:comicId', component: ComicDetailsComponent },
    ])
  ],
  providers: [ComicHubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
