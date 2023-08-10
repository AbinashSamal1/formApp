import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PersonalDetailsComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';

@NgModule({
  declarations: [
    PersonalDetailsComponent,
    UsersComponent,
    FileUploadComponent,
    FileViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule, NgbModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [PersonalDetailsComponent]
})
export class AppModule { }
