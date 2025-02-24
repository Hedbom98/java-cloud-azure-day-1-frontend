import { Component, inject } from '@angular/core';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListPlayerComponent {

  playerService = inject(PlayerService);
    players: any = this.playerService.players;
}
