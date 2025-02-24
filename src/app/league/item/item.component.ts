import { Component, Input } from '@angular/core';
import { League } from '../models/league';

@Component({
  selector: 'app-league-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemLeagueComponent {
  @Input('league') league: League | null = null;
}
