import { Component, Input } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-team-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemTeamComponent {
    @Input('team') team: Team | null = null;

}
