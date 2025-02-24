import { Component, inject, Output } from '@angular/core';
import { PlayerService } from '../../player.service';
import { ActivatedRoute } from '@angular/router';
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

  id = this.route.snapshot.paramMap.get('id');
  player: any | null;
  // = this.playerService.getPlayerById(Number(this.id));


  async ngOnInit() {
    this.player = this.playerService.getPlayerById(Number(this.id));
  }
}
