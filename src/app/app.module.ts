import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ComicHubService } from "./comic.service";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ComicListComponent } from "./comic-list/comic-list.component";
import { ComicDetailsComponent } from "./comic-details/comic-details.component";
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ComicListComponent,
    ComicDetailsComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ComicListComponent },
      { path: 'comics/:comicId', component: ComicDetailsComponent },
      { path: 'add-new-character', component: AddCharacterComponent },
    ])
  ],
  providers: [ComicHubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
