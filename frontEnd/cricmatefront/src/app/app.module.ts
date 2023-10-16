import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/pages/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { ScoreComponent } from './components/score/score.component';
import { PopupComponent } from './components/popup/popup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MyTeamsComponent } from './components/pages/my-teams/my-teams.component';
import { MyTeamInfoComponent } from './components/pages/my-team-info/my-team-info.component';
import { StartMatchComponent } from './components/pages/start-match/start-match.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SelectOpeningComponent } from './components/pages/select-opening/select-opening.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './components/stats/stats.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DynamicStatsComponent } from './components/dynamic-stats/dynamic-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ScoreComponent,
    PopupComponent,
    MyTeamsComponent,
    MyTeamInfoComponent,
    StartMatchComponent,
    SelectOpeningComponent,
    StatsComponent,
    DynamicStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
