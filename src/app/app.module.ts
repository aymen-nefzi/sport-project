import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { MyFilerPipe } from './pipes/my-filter.pipe';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { WeatherComponent } from './components/weather/weather.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    RankingComponent,
    VideosComponent,
    BlogComponent,
    NewsItemComponent,
    ArticleComponent,
    SignupComponent,
    AddMatchComponent,
    AddTeamComponent,
    AdminComponent,
    BannerComponent,
    AddPlayerComponent,
    PlayersComponent,
    TeamsComponent,
    DisplayMatchComponent,
    EditMatchComponent,
    MatchesComponent,
    AsterixPipe,
    MatchesTableComponent,
    DisplayPlayerComponent,
    SearchComponent,
    SearchFilterComponent,
    EditPlayerComponent,
    MyFilerPipe,
    AddStadiumComponent,
    StadiumTableComponent,
    WeatherComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
