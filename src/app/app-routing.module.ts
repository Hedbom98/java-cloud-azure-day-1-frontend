import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLeagueComponent } from './league/list/list.component';
import { AddLeagueComponent } from './league/add/add.component';
import { ListManagerComponent } from './manager/list/list.component';
import { AddManagerComponent } from './manager/add/add.component';
import { ViewManagerComponent } from './manager/view/view.component';
import { EditManagerComponent } from './manager/edit/edit.component';
import { AddPlayerComponent } from './player/add/add.component';
import { ListPlayerComponent } from './player/list/list.component';
import { ViewPlayerComponent } from './player/view/view.component';
import { EditPlayerComponent } from './player/edit/edit.component';
import { ListTeamComponent } from './team/list/list.component';
import { AddTeamComponent } from './team/add/add.component';
import { ViewTeamComponent } from './team/view/view.component';
import { EditTeamComponent } from './team/edit/edit.component';

const routes: Routes = [
  {
    path: "leagues",
    component: ListLeagueComponent
  },
  {
    path: "leagues/add",
    component: AddLeagueComponent
  },


  {
    path: "managers",
    component: ListManagerComponent
  },
  {
    path: "managers/add",
    component: AddManagerComponent
  },
  {
    path: "managers/view/:id",
    component: ViewManagerComponent
  },
  {
    path: "managers/edit/:id",
    component: EditManagerComponent
  },


  {
    path: "players",
    component: ListPlayerComponent
  },
  {
    path: "players/add",
    component: AddPlayerComponent
  },
  {
    path: "players/view/:id",
    component: ViewPlayerComponent
  },
  {
    path: "players/edit/:id",
    component: EditPlayerComponent
  },


  {
    path: "teams",
    component: ListTeamComponent
  },{
    path: "teams/add",
    component: AddTeamComponent
  },{
    path: "teams/view/:id",
    component: ViewTeamComponent
  },{
    path: "teams/edit/:id",
    component: EditTeamComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
