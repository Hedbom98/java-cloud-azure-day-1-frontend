import { Component, inject, Output } from '@angular/core';
import { PlayerService } from '../../player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewPlayerComponent {
  playerService = inject(PlayerService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  

  id = this.route.snapshot.paramMap.get('id');
  player: any | null;
  // = this.playerService.getPlayerById(Number(this.id));


  async ngOnInit() {
    this.player = await this.playerService.getPlayerById(Number(this.id));
    console.log(this.player);
  }

  async deletePlayer(){
    await this.playerService.deletePlayer(Number(this.id));
    this.router.navigate(['players']);
  }
}
