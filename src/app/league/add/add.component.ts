import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeagueService } from '../../league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddLeagueComponent {

  leagueForm: FormGroup;
  formBuilder = inject(FormBuilder);
  leagueService = inject(LeagueService);
  router = inject(Router)


  constructor() {
    this.leagueForm = this.formBuilder.group({
      name: ["", Validators.required],
      country: ["", Validators.required]
    });
  }


  async addLeague() {
    await this.leagueService.addLeague(this.leagueForm.value);
    this.router.navigate(['/']);
  }
}
