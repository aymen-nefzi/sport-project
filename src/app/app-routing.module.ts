import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { WeatherComponent } from './components/weather/weather.component';



const routes: Routes = [
// http://localhost:4200
{path:"", component:HomeComponent},
// http://localhost:4200/login
{path:"login",component:LoginComponent},
// http://localhost:4200/signup
{path:"signup",component:SignupComponent},
// http://localhost:4200/add-match
{path:"add-match",component:AddMatchComponent},
// http://localhost:4200/add-team
{path:"add-team",component:AddTeamComponent},
// http://localhost:4200/admin
{path:"admin",component:AdminComponent},
// // http://localhost:4200/matches
{path:"matches",component:MatchesComponent},
// http://localhost:4200/add-player
{path:"add-player",component:AddPlayerComponent},
// http://localhost:4200/add-stadium
{path:"add-stadium",component:AddStadiumComponent},
// http://localhost:4200/display-match/variable
{path:"display-match/:id",component:DisplayMatchComponent},
// http://localhost:4200/edit-match
{path:"edit-match/:id",component:EditMatchComponent},
// http://localhost:4200/edit-player
{path:"edit-player/:id",component:EditPlayerComponent},
// http://localhost:4200/display-player
{path:"display-player/:id",component:DisplayPlayerComponent},
// http://localhost:4200/seach
{path:"search",component:SearchComponent},
// http://localhost:4200/seach-filter
{path:"search-filter",component:SearchFilterComponent},
// http://localhost:4200/weather
{path:"weather",component:WeatherComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
