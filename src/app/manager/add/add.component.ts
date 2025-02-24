import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from '../../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddManagerComponent {
  managerForm: FormGroup;
  formBuilder = inject(FormBuilder);
  managerService = inject(ManagerService);
  router = inject(Router);

  constructor() {
    this.managerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  async addManager() {
    await this.managerService.addManager(this.managerForm.value);
    this.router.navigate(['managers']);
  }
}
