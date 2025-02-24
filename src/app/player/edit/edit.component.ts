import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditPlayerComponent {
  updatePlayerForm: FormGroup;
  formBuilder = inject(FormBuilder);
  playerService = inject(PlayerService);
  router = inject(Router);

  constructor() {
    this.updatePlayerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      parentClub: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

  async updatePlayer() {
    await this.playerService.updatePlayer(this.updatePlayerForm.value);
    this.router.navigate(['players']);
  }
}
