import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
