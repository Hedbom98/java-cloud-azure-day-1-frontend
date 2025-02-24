import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeagueService } from '../../league.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../player.service';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddTeamComponent {
  teamForm: FormGroup;
  formBuilder = inject(FormBuilder);
  teamService = inject(TeamService);
  router = inject(Router);

  constructor() {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required],
      founded: ['', Validators.required],
      manager: ['', Validators.required],
      league: ['', Validators.required],
    });
  }

  async addTeam() {
    await this.teamService.addTeam(this.teamForm.value);
    this.router.navigate(['team']);
  }
}
