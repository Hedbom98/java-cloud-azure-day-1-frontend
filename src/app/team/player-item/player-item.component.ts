import { Component, Input } from '@angular/core';
import { Player } from '../../player/models/player';

@Component({
  selector: 'app-player-item',
  standalone: false,
  templateUrl: './player-item.component.html',
  styleUrl: './player-item.component.css'
})
export class PlayerItemComponent {
@Input('player') player: Player | null = null;
}
