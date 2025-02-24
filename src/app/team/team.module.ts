import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeamComponent } from './list/list.component';
import { AddTeamComponent } from './add/add.component';
import { ViewTeamComponent } from './view/view.component';
import { EditTeamComponent } from './edit/edit.component';
import { ItemTeamComponent } from './item/item.component';
import { ItemPlayerComponent } from '../player/item/item.component';
import { PlayerModule } from '../player/player.module';
import { PlayerItemComponent } from './player-item/player-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



@NgModule({
  declarations: [
    ListTeamComponent,
    AddTeamComponent,
    ViewTeamComponent,
    EditTeamComponent,
    ItemTeamComponent,
    PlayerItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
exports: [
    AddTeamComponent,
    ItemTeamComponent
  ],
  providers: [
      provideHttpClient(withInterceptorsFromDi())
    ]
})
export class TeamModule { }
