import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StashService } from './stash.service';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StashComponent } from './stash/stash.component';
import { StashDetailComponent } from './stash-detail/stash-detail.component';
import { StashCreateComponent } from './stash-create/stash-create.component';
import { StashEditComponent } from './stash-edit/stash-edit.component';

const ROUTES = [
  { path: '', redirectTo: 'stash', pathMatch: 'full' },
  { path: 'stash', component: StashComponent },
  { path: 'stash-details/:id', component: StashDetailComponent },
  { path: 'stash-create', component: StashCreateComponent },
  { path: 'stash-edit/:id', component: StashEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StashComponent,
    StashDetailComponent,
    StashCreateComponent,
    StashEditComponent,
    StashComponent,
    StashDetailComponent,
    StashCreateComponent,
    StashEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    StashService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
