import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemPlayerComponent {
    @Input('player') player: Player | null = null;
  
}
