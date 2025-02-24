import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLeagueComponent } from './list/list.component';
import { AddLeagueComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ItemLeagueComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListLeagueComponent,
    AddLeagueComponent,
    ViewComponent,
    EditComponent,
    ItemLeagueComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AddLeagueComponent,ItemLeagueComponent
  ],
  
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class LeagueModule { }
