import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../player.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  route = inject(ActivatedRoute);
  

  id = this.route.snapshot.paramMap.get('id');
  player: any | null;

  constructor() {
    this.updatePlayerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [0, Validators.required],
      parentClub: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

  async updatePlayer() {
    await this.playerService.updatePlayer(this.updatePlayerForm.value, Number(this.id));
    this.router.navigate(['players']);
  }

  async ngOnInit() {
    this.player = await this.playerService.getPlayerById(Number(this.id));
    console.log(this.player);

    this.updatePlayerForm = this.formBuilder.group({
      firstName: [this.player.firstName, Validators.required],
      lastName: [this.player.lastName, Validators.required],
      age: [this.player.age, Validators.required],
      parentClub: [this.player.parentClub, Validators.required],
      team: [this.player.team.id, Validators.required],
    });
  }
}
