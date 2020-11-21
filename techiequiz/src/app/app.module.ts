import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {NgbAlertModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomequizComponent } from './components/homequiz/homequiz.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { AdminSubjectComponent } from './admin/admin-subject/admin-subject.component';
import { AddSubjectDialogComponent } from './admin/dialogs/add-subject-dialog/add-subject-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminDashboadNavComponent } from './admin/admin-dashboad-nav/admin-dashboad-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToasterModule } from 'angular2-toaster';
import { AdminTopicComponent } from './admin/admin-topic/admin-topic.component';
import { AddTopicDialogComponent } from './admin/dialogs/add-topic-dialog/add-topic-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomequizComponent,
    MaterialElevationDirective,
    AdminSubjectComponent,
    AddSubjectDialogComponent,
    AdminDashboadNavComponent,
    AdminTopicComponent,
    AddTopicDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbAlertModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    TranslateModule.forRoot(),
    ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddSubjectDialogComponent, AddTopicDialogComponent]
})
export class AppModule { }
