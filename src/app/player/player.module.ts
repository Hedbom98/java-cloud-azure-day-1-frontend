import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlayerComponent } from './list/list.component';
import { AddPlayerComponent } from './add/add.component';
import { ViewPlayerComponent } from './view/view.component';
import { EditPlayerComponent } from './edit/edit.component';
import { ItemPlayerComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListPlayerComponent,
    AddPlayerComponent,
    ViewPlayerComponent,
    EditPlayerComponent,
    ItemPlayerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [AddPlayerComponent, ItemPlayerComponent, EditPlayerComponent, ViewPlayerComponent],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class PlayerModule {}
