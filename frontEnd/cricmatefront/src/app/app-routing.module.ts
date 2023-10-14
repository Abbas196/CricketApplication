import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { MyTeamsComponent } from './components/pages/my-teams/my-teams.component';
import { MyTeamInfoComponent } from './components/pages/my-team-info/my-team-info.component';
import { StartMatchComponent } from './components/pages/start-match/start-match.component';
import { SelectOpeningComponent } from './components/pages/select-opening/select-opening.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:"signup",
    component:RegisterComponent,
    pathMatch:'full',
  },
  {
    path:"score",
    component:ScoreComponent,
    pathMatch:'full',
  },
  {
    path:'my-teams',
    component:MyTeamsComponent,
    pathMatch:'full',
  },
  {
    path:'my-team-info',
    component:MyTeamInfoComponent,
    pathMatch:'full',
  },
  {
    path:'start-match',
    component:StartMatchComponent,
    pathMatch:'full',
  },
  {
    path:'select-opening',
    component:SelectOpeningComponent,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
