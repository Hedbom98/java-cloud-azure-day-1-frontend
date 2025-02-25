import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../../team.service';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddPlayerComponent {
  playerForm: FormGroup;
  formBuilder = inject(FormBuilder);
  playerService = inject(PlayerService);
  router = inject(Router);

  constructor() {
    this.playerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      parentClub: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

  async addPlayer() {
    await this.playerService.addPlayer(this.playerForm.value);
    this.router.navigate(['/']);
  }

  
}
