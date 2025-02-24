import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManagerComponent } from './list/list.component';
import { AddManagerComponent } from './add/add.component';
import { ViewManagerComponent } from './view/view.component';
import { EditManagerComponent } from './edit/edit.component';
import { ItemManagerComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    ListManagerComponent,
    AddManagerComponent,
    ViewManagerComponent,
    EditManagerComponent,
    ItemManagerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],

  exports: [AddManagerComponent, ItemManagerComponent],

  providers: [
      provideHttpClient(withInterceptorsFromDi())
    ]
})
export class ManagerModule {}
